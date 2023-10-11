import { FiSearch }  from 'react-icons/fi'
import { FaRedditAlien } from 'react-icons/fa6'
import './SidebarNav.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSubredits, getSubreditsStatus, getSubreditsError, fetchSubreddits } from '../../features/subreddits/subredditsSlice'
import { useState, useEffect } from 'react'


const SidebarNav = () => {
    const dispatch = useDispatch()
    const subreddits = useSelector(getAllSubredits)
    const subredditsStatus = useSelector(getSubreditsStatus)
    const error = useSelector(getSubreditsError)
    const [searchTerm, setSearchTerm] = useState('') 

    useEffect(() => {
        if (subredditsStatus === 'idle'){
            dispatch(fetchSubreddits())
        }
    }, [subredditsStatus, dispatch])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    // console.log(subreddits)
    let renderedSubreddits;
    if (subredditsStatus === 'loading') {
        renderedSubreddits = <p>Loading...</p>
    } else if (subredditsStatus === 'succeeded') {
        renderedSubreddits = subreddits.map(subreddit => { 
            return (
                <li key={subreddit.id}>
                    <img 
                        src={subreddit.icon_img} 
                        className='subreddit--icon--image' 
                        alt='reddit icon image'
                        style={{border: `2px solid ${subreddit.primary_color}` }}/>
                    <a href={subreddit.url}>{subreddit.display_name}</a>
                </li>
            )
        })
    } else if (subredditsStatus === 'failed') {
        renderedSubreddits = <p>{error}</p>
    }

 

    const menus = [
        {
            to: '/r/popular',
            text: 'Popular' 
        },
        {
            to: '/r/all',
            text: 'All' 
        },
        {
            to: '/r/random',
            text: 'Random' 
        }
    ]
    const renderedMenu = menus.map(menu => {
        return (
        <li key={menu.to}><a href={menu.to}>{menu.text}</a></li>
        )
    })

  return (
    <div className='sidenav'>
        <div className='sidenav--logo'>
            <FaRedditAlien className='sidenav--reddit--icon'/>
            <h1 className='sidenav--logo--text' >reddit<span className='sidenav--span-text'>Clone</span></h1>
        </div>
        <div className='sidenav--search'>
            <input 
                id='searchbar' 
                className='sidenav--search--input' 
                type='text' 
                placeholder='Search Reddit...' 
                onChange={handleChange}/>
            <FiSearch className='sidenav--search--btn' />
        </div>
        <div className='sidenav--links'>
            <ul className='sidenav--menu'> 
                {renderedMenu}
            </ul>
            <hr/>
            <ul className='sidenav--subreddit'>
                {renderedSubreddits}
            </ul>
        </div>
    </div>
  )
}

export default SidebarNav