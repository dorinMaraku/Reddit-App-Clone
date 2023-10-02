import axios from "axios"

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
//const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET
const TYPE = 'code'
const RANDOM_STRING = 'authorized'
const URI = import.meta.env.VITE_URI
const DURATION = 'permanent'
const SCOPE_STRING = 'identity edit flair history modconfig modflair modlog modposts modwiki mysubreddits privatemessages read report save submit subscribe vote wikiedit wikiread'//'"identity": {"description": "Access my reddit username and signup date.", "id": "identity", "name": "My Identity"}'


// authenticates and generates the auth code required when generating access_token
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
  //send post request to the reddit api to generate access_token 
  try {
    let response = await axios.post('https://www.reddit.com/api/v1/access_token', 
    params.toString(), 
    {
      headers: {
        Authorization: `Basic ${window.btoa(`${CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)}`,
        "Content-Type": 'application/x-www-form-urlencoded'
      }
    })
    console.log(response)
    const data = await response.data
    if (response.status == 200) {
      const access_token = data.access_token
      const refresh_token = data.refresh_token
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('refresh_token', refresh_token)
    }

    console.log(data)

    const refreshToken = localStorage.getItem('refresh_token')
    const postParams = new URLSearchParams()
    postParams.append('grant_type', 'refresh_token')
    postParams.append('refresh_token', refreshToken) 

    let freshResponse = await axios.post('https://www.reddit.com/api/v1/access_token', 
    postParams.toString(), 
    {
      headers: {
        Authorization: `Basic ${window.btoa(`${CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)}`,
        "Content-Type": 'application/x-www-form-urlencoded'
      }
    })
    const newData = freshResponse
    console.log(newData)

    const userData = await axios.get('https://oauth.reddit.com/api/v1/me', 
      {headers: {'Authorization': 'bearer ' + access_token}})
    const user = userData;
    console.log(user)
    
    
  }
  catch (err) {
    console.log(err)  
  }
}