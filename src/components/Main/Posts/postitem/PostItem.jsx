import {BiSolidUpArrow, BiSolidDownArrow, BiComment, BiShareAlt, BiSave, BiDotsHorizontalRounded} from 'react-icons/bi'
import './PostItem.css'
import PostComment from './postComment/PostComment'
import moment from 'moment'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import {setCommentsTogle, fetchComments } from '../../../../features/posts/postsSlice'


const PostItem = (props) => {
    const {score, url, id, permalink, title, author, subreddit, num_comments, created_utc, selftext, showingComments, status, comments, errorComments} = props.post
    const timeAgo = moment.unix(created_utc).fromNow()

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCommentsTogle(id))
        dispatch(fetchComments({permalink, id}))
    }

    let renderComments; 
    if (status === 'loading') {
        renderComments = <p>Loading...</p>
    } else if (status === 'succeeded' && comments.length > 0) {
        renderComments = comments.map(comment => <PostComment key={comment.id} comment={comment}/>)
    } else if (status === 'succeeded' && comments.length === 0) {
        renderComments = <p className='no--comments'>There are no comments for this post</p>
    } else if (status === 'failed') {
        renderComments = <p className='comments--error'>Cannot retrieve comments from this post.
            <br/>
            Error: {errorComments}</p>
    }
    // console.log(renderComments)
    // console.log(props.post) 
  return (
    <div className='post'>
        <div className='post--left'>
            <BiSolidUpArrow className='arrow arrow-up'/>
            <p className='score'>{score}</p>
            <BiSolidDownArrow className='arrow arrow-down' />
        </div>
        <div className='post--right'>
            <div className='post--info'>  
                <div className='subreddit--info'>
                    <img src={subreddit}/>
                    <Link to={`/r/${subreddit}`}>{subreddit}</Link>
                </div>
                <p> ~ Posted by <Link to={`/u/${author}`}>{author}</Link> {timeAgo}</p>
            </div>
            <h3><Link to={`/r/${subreddit}/${title}`}>{title}</Link></h3> 
            <img src={url} alt={''} />
            <div className='post--right--bottom'>
                <p className='post--bottom--actions'
                    onClick={handleClick}><BiComment />{num_comments} Comments</p>
                <p className='post--bottom--actions'><BiShareAlt />Share</p>
                <p className='post--bottom--actions'><BiSave /> Save</p>
                <p className='post--bottom--actions'><BiDotsHorizontalRounded /></p>
                {showingComments && 
                    <button 
                        className='comments--toggle--button' 
                        onClick={() => dispatch(setCommentsTogle(id))}
                    >Close X</button>}
            </div>
            {showingComments && <p className='selftext'>{selftext}</p>}
            {showingComments && renderComments}
        </div>
    </div>
  )
}

export default PostItem