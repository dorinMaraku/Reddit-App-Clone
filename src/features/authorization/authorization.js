import axios from "axios"

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
//const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET
const TYPE = 'code'
const RANDOM_STRING = 'authorized'
const URI = import.meta.env.VITE_URI
const DURATION = 'permanent'
const SCOPE_STRING = 'identity edit flair history modconfig modflair modlog modposts modwiki mysubreddits privatemessages read report save submit subscribe vote wikiedit wikiread'//'"identity": {"description": "Access my reddit username and signup date.", "id": "identity", "name": "My Identity"}'
let access_token;
let refresh_token;
let expires_in;

export const getAuthCode = () => {
  const accessUrl = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`
  window.location = accessUrl
}

export const getToken = async () => { 
  const authCode = new URLSearchParams(window.location.search).get('code');
  // body 
  const params = new URLSearchParams();
  params.append('code', authCode);
  params.append('grant_type', 'authorization_code');
  params.append('redirect_uri', URI);

  //console.log(authCode);
  try {
    let response = await axios.post('https://www.reddit.com/api/v1/access_token', 
    params.toString(), 
    {
      headers: {
        Authorization: `Basic ${window.btoa(`${CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)}`,
        "Content-Type": 'application/x-www-form-urlencoded'
      }
    })
    const body = await response.data

    console.log(body)
    access_token = body.access_token
    refresh_token = body.refresh_token
    expires_in = body.expires_in

    if(!access_token) {
      console.error('Access token is missing');
      return null;
    }
    const tokenExpiration = new Date(expires_in).toUTCString()
    const now = new Date().toUTCString()
    if (now >= tokenExpiration) {
      console.log('Access token has expired. Refreshing...');
      const refreshedToken = await refreshTokenAngGetNewAccessToken();
      if (refreshedToken) {
        return refreshedToken;
      } else { 
        console.error('Failed to refresh token');
        return null;
      }
    }
    else {
      return access_token
    }
  }
  catch (err) {
    console.log(err)  
  }
}

  const refreshTokenAngGetNewAccessToken = async () => {
    if (!refresh_token) {
      console.error('refresh token is missing')
      return null;
    }

    //use refresh_token to obtain new access token
    try {
      const newParams = new URLSearchParams();
      newParams.append('grant_type', 'refresh_token');
      newParams.append('refresh_token', refresh_token);
      const response = await axios.post('https://www.reddit.com/api/v1/access_token', 
      newParams.toString(), 
      {
        headers: {
          Authorization: `Basic ${window.btoa(`${CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)}`,
          "Content-Type": 'application/x-www-form-urlencoded'
        }
      })
      if (response.ok) {
        const data = await response.json()
        access_token = data.access_token;
      }
      //update experies_in 
    } 
    catch (error) {
      console.error('Error refreshing access token', error)
    }
  }


// const data = await axios.get('https://oauth.reddit.com/api/v1/me', 
//   {headers: {'Authorization': 'bearer ' + body.access_token}})
// const user = data;
// console.log(user)
