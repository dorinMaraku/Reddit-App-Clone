import React from 'react'
import './PostComment.css'
import {BiSolidUpArrow, BiSolidDownArrow, BiReply, BiShareAlt, BiDotsHorizontalRounded} from 'react-icons/bi'
import moment from 'moment'

const PostComment = ({comment}) => {
    // console.log(comment)
    const timeAgo = moment.unix(comment.created_utc).fromNow()
    let commentReplies
    if (comment.replies) {
        commentReplies = comment.replies?.data.children.map(replies => replies.data)
        // console.log(commentReplies)
    }
  return (
    <div className='comment'>
        <div className='comment--header'>
            <img src={comment.link_id} />
            <p><span>{comment.author}</span> ~ {timeAgo} </p>
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
            {comment.replies && commentReplies.body}
        </div>
    </div>
  )
}

export default PostComment