import {BiSolidUpArrow, BiSolidDownArrow, BiComment, BiShareAlt, BiSave, BiDotsHorizontalRounded} from 'react-icons/bi'

// import {TfiComment} from 'react-icons/tfi'
import './PostItem.css'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'
// import { increment, decrement } from '../../../../features/counter/counterSlice'

// image = preview.images[0].resolutions[0].url
const PostItem = (props) => {
    const {score,url, permalink, thumbnail, title, author, subreddit, num_comments, created_utc} = props.post

    const timeAgo = moment.unix(created_utc).fromNow()

    const dispatch = useDispatch();
    // console.log(props.post) 
  return (
    <div className='post'>
        <div className='post--left'>
            <BiSolidUpArrow className='arrow arrow-up'/>
            <p>{score}</p>
            <BiSolidDownArrow className='arrow arrow-down' />
        </div>
        <div className='post--right'>
            <div className='post--info'>  
                <div className='subreddit--info'>
                    <img src={subreddit}/>
                    <a href={`/r/${subreddit}`}>{subreddit}</a>
                </div>
                <p> ~ Posted by <a href={`/u/${author}`}>{author}</a> {timeAgo}</p>
            </div>
            <h3><a href={`/r/${subreddit}/${title}`}>{title}</a></h3>
            <img src={url} alt={''} />
            <div className='post--right--bottom'>
                <p className='post--bottom--actions'><BiComment />{num_comments} Comments</p>
                <p className='post--bottom--actions'><BiShareAlt />Share</p>
                <p className='post--bottom--actions'><BiSave /> Save</p>
                <p className='post--bottom--actions'><BiDotsHorizontalRounded /></p>
            </div>
        </div>
    </div>
  )
}

export default PostItem