import axios from "axios"

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
//const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET
const TYPE = 'code'
const RANDOM_STRING = 'authorized'
const URI = import.meta.env.VITE_URI
const DURATION = 'permanent'
const SCOPE_STRING = 'identity edit flair history modconfig modflair modlog modposts modwiki mysubreddits privatemessages read report save submit subscribe vote wikiedit wikiread'//'"identity": {"description": "Access my reddit username and signup date.", "id": "identity", "name": "My Identity"}'

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
    
    let data = await axios.post('https://www.reddit.com/api/v1/access_token', 
    params.toString(), 
    {
      headers: {
        Authorization: `Basic ${window.btoa(`${CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)}`,
        "Content-Type": 'application/x-www-form-urlencoded'
      }
    })
    const body = await data.data
    console.log(body)
    // console.log(data)
    data = await axios.get('https://oauth.reddit.com/api/v1/me', 
      {headers: {'Authorization': 'bearer ' + body.access_token}})
    const user = data;
    console.log(user)
    //await signInUser(user.id, user.name, body.access_token, body.refresh_token)
    let token = await user.signJWT(user.id)
    console.log(token)
    return token
  }
  catch (err) {
    console.log(err)  
  }
}