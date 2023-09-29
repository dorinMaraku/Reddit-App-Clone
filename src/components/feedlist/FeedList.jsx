import { unstable_createMuiStrictModeTheme } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"

const FeedList = () => {

    const CLIENT_ID = 'wBLyfWMtGXvUCrqxDqxVgA'
    const TYPE = 'code'
    const RANDOM_STRING = 'dorin'
    const URI = 'http://localhost:5173/'
    const DURATION = 'permanent'
    const SCOPE_STRING = 'identity'//'"identity": {"description": "Access my reddit username and signup date.", "id": "identity", "name": "My Identity"}'

    useEffect(()=> {
        const getAuth = axios.get(`https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`)
        .then(data => console.log(data))
    })

  return (
    <div>
        <button onClick={() => {getAuth}}></button>
    </div>
  )
}

export default FeedList