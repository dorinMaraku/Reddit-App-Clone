import { FiSearch }  from 'react-icons/fi'
import { FaRedditAlien } from 'react-icons/fa6'
import './SidebarNav.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSubredits, getSubreditsStatus, getSubreditsError, fetchSubreddits } from '../../features/subreddits/subredditsSlice'
import { useEffect } from 'react'


const SidebarNav = () => {
    const dispatch = useDispatch()
    const subreddits = useSelector(getAllSubredits)
    const subredditsStatus = useSelector(getSubreditsStatus)
    const error = useSelector(getSubreditsError)

    useEffect(() => {
        if (subredditsStatus === 'idle'){
            dispatch(fetchSubreddits())
        }
    }, [subredditsStatus, dispatch])

    // console.log(subreddits)
    const renderedSubreddits = subreddits.map(subreddit => { 
        return (
            <li key={subreddit.data.id}><a href={subreddit.data.url} >{subreddit.data.display_name}</a></li>
        )
    })
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

  return (
    <div className='sidenav'>
        <div className='sidenav--logo'>
            <FaRedditAlien className='sidenav--reddit--icon'/>
            <h1 className='sidenav--logo--text' >reddit<span className='sidenav--span-text'>Clone</span></h1>
        </div>
        <div className='sidenav--search'>
            <input id='serachbar' className='sidenav--search--input' type='text' placeholder='Search Reddit...' />
            <FiSearch className='sidenav--search--btn' />
        </div>
        <div className='sidenav--links'>
            <ul className='sidenav--menu'> 
                {menus.map(menu => {
                    return (
                    <li key={menu.to}><a href={menu.to}>{menu.text}</a></li>
                    )
                })}
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