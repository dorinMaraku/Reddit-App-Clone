import RedditIcon from '@mui/icons-material/Reddit';
import SearchIcon from '@mui/icons-material/Search';
import { getAuthCode } from '../../features/authorization/authorization';
import './Navbar.css'

const Navbar = () => {
  
  return (
    <nav className="nav-container">
        <div className='nav-logo'> 
            <RedditIcon className='reddit-icon'/>
            <h1 className='nav-logo-text' >reddit<span className='nav-clone-text'>Clone</span></h1>
        </div>
        <div className='nav-searchbar'>
            <form className='input-form'>
                <button className='search-btn'><SearchIcon/></button>
                <input className='search-input' type='text' placeholder='Search Reddit' />
            </form>
        </div>
        <div className='login-btn-container'> 
          <button onClick={() => {getAuthCode()}}
            className='login-btn' 
          >Log In</button>
        </div>
    </nav>
  )
}
export default Navbar