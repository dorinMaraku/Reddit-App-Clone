import { getToken } from "../../features/authorization/authorization"


const FeedList = () => {
  return (
    <div>
        <button onClick={getToken}>LogIn</button>
    </div>
  )
}

export default FeedList