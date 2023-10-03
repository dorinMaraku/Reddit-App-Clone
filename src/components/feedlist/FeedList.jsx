import { getToken, getUserInfo } from "../../features/authorization/authorization"


const FeedList = () => {
  return (
    <div>
        <button onClick={getToken}>LogIn</button>
        <br/>
    </div>
  )
}

export default FeedList