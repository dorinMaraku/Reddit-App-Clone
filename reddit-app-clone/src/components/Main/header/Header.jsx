import {AiFillBell} from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {RxAvatar} from 'react-icons/rx'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
        <div className="header--left">
            <ul>
                <li><a href={`${window.location.pathname}/best`} className='active'>Best</a></li>
                <li><a href={`${window.location.pathname}/hot`}>Hot</a></li>
                <li><a href={`${window.location.pathname}/rising`}>Rising</a></li>
                <li><a href={`${window.location.pathname}/new`}>New</a></li>
                <li><a href={`${window.location.pathname}/top`}>Top</a></li>
                <li><a href={`${window.location.pathname}/today`}>Today</a></li>
            </ul>
        </div>
        <div className="header--right">
            <AiFillBell className='icon header--right--bell'/>
            <span className='icon--message--counter'>{3}</span>
            <RxAvatar src="" alt="user profile picture" />
            <div className='header--user'>
                <span>{'user Name'}</span>
                <RiArrowDropDownLine className='icon header--user--dropdown'/>
            </div>
        </div>
    </header>
  )
}

export default Header