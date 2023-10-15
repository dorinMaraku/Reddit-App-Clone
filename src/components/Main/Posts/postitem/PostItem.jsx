import {BiSolidUpArrow, BiSolidDownArrow, BiComment, BiShareAlt, BiSave, BiDotsHorizontalRounded} from 'react-icons/bi'
import './PostItem.css'
import PostComment from './postComments/PostComment'
import moment from 'moment'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import {setCommentsTogle, fetchComments } from '../../../../features/posts/postsSlice'


const PostItem = (props) => {
    const {score, url, id, permalink, title, author, subreddit, num_comments, created_utc, showingComments, status, comments} = props.post
    const timeAgo = moment.unix(created_utc).fromNow()

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCommentsTogle(id))
        dispatch(fetchComments(permalink))
    }

    let renderComments; 
    if (status === 'loading') {
        renderComments = <p>Loading...</p>
    } else if (status === 'succeeded') {
        renderComments = comments.map(comment => <PostComment key={comment.id} comment={comment}/>)
    } else if (status === 'failed') {
        renderComments = <p>{error}</p>
    }

    // console.log(renderComments)
    console.log(props.post) 
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
                <p className='post--bottom--actions'
                    onClick={handleClick}><BiComment />{num_comments} Comments</p>
                <p className='post--bottom--actions'><BiShareAlt />Share</p>
                <p className='post--bottom--actions'><BiSave /> Save</p>
                <p className='post--bottom--actions'><BiDotsHorizontalRounded /></p>
            </div>
            {showingComments && renderComments}
        </div>
    </div>
  )
}

export default PostItem