import { getAuthCode } from '../../features/authorization/authorization';
import './Login.css'

const Login = () => {
  return (
    <div className="signInForm">
        <button onClick={() => {getAuthCode()}} 
            className="signIn-btn">Click here to Sign In with Reddit</button>
    </div>
  )
}

export default Login