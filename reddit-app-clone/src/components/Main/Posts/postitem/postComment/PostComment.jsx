import React from 'react'
import './PostComment.css'
import { Link } from 'react-router-dom'
import {BiSolidUpArrow, BiSolidDownArrow, BiReply, BiShareAlt, BiDotsHorizontalRounded} from 'react-icons/bi'
import moment from 'moment'

const PostComment = ({comment}) => {
    // console.log(comment)
    const timeAgo = moment.unix(comment.created_utc).fromNow()
    let showCommentReplies
    if (comment.replies) {
        const commentReplies = comment.replies?.data.children.map(replies => replies.data)
        showCommentReplies = commentReplies.map(comment => <PostComment key={comment.id} comment={comment}/>)
    }
    return (
    <article className='comment'>
        <div className='comment--header'>
            <img src={comment.link_id} />
            <p><Link>{comment.author}</Link> ~ {timeAgo} </p>
        </div>
        <div className='line'>
             <hr />
        </div>
        <div className='comment--body'>
            <p>{comment.body}</p>
        </div>
        <div className='comment--footer'>
            <div className='comment--footer--left'>
                <BiSolidUpArrow className='icon arrow arrow-up'/>
                <p>{comment.score}</p>
                <BiSolidDownArrow className='icon arrow arrow-down' />
            </div>
            <div className='comment--footer--right'>
                <p className='comment--footer--actions'><BiReply className='icon'/>Reply</p>
                <p className='comment--footer--actions'><BiShareAlt className='icon'/>Share</p>
                <p className='comment--footer--actions'><BiDotsHorizontalRounded className='icon'/></p>
            </div>
        </div>

        <div>
            <p> {showCommentReplies}</p>
        </div>
    </article>
  )
}

export default PostComment