import { useState, useEffect} from "react"
import { getSubreddits } from "../../features/api/api"


const Home = () => {
  const [subredditsUrls, setSubredditUrls] = useState([])
  useEffect(() => {
    getSubreddits().then(data => {
      console.log(data)
      const urls = data.map(subreddit => subreddit.url)
      setSubredditUrls(urls)
    })
  }, [])
  
  return (
    <div>Home
      {subredditsUrls.map(url => {
        <p key={url}>{url} </p>
      })}
    </div>
  )
}

export default Home