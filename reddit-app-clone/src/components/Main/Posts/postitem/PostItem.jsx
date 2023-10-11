import {BiSolidUpArrow ,BiSolidDownArrow} from 'react-icons/bi'
import './PostItem.css'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'
// import { increment, decrement } from '../../../../features/counter/counterSlice'

// image = preview.images[0].resolutions[0].url
const PostItem = (props) => {
    const {score,url, preview, thumbnail, title, author, subreddit, num_comments, created_utc} = props.post

    const timeAgo = moment.unix(created_utc).fromNow()

    const dispatch = useDispatch();
    // console.log(props.post) 
  return (
    <div className='post'>
        <div className='post--left'>
            <BiSolidUpArrow className='arrow arrow-up'/>
            <span>{score}</span>
            <BiSolidDownArrow className='arrow arrow-down' />
        </div>
        <div className='post--center'>
            <img src={url} alt="" />
        </div>
        <div className='post--right'>
            <h3><a href={`/r/${subreddit}/${title}`}>{title}</a></h3>
            <span className='post--info'>
                submitted {timeAgo} by 
                {' '}<a href={`/u/${author}`}>{author}</a>{' '}
                to  
                {' '}<a href={`/r/${subreddit}`}>{subreddit}</a>{' '}
            </span>
            <p className='post--info'>
                {num_comments} comments | share | save | hide | report
            </p>
        </div>
    </div>
  )
}

export default PostItem