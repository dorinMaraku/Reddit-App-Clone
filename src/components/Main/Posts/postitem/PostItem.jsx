import {BiSolidUpArrow ,BiSolidDownArrow} from 'react-icons/bi'
import './PostItem.css'
import {useDispatch, useSelector} from 'react-redux'
import { increment, decrement } from '../../../../features/counter/counterSlice'


const PostItem = (props) => {
    const {upvote, image, title, user, subreddit, comment_count} = props.post
    const count = useSelector((state) => state.counter.count)
    console.log(count)
    const dispatch = useDispatch();

  return (
    <div className='post'>
        <div className='post--left'>
            <button onClick={() => dispatch(increment())}>+</button>
            <BiSolidUpArrow className='arrow arrow-up' />
            <span>{upvote}{count}</span>
            <button onClick={() => dispatch(decrement())}>-</button>
            <BiSolidDownArrow className='arrow arrow-down'/>
        </div>
        <div className='post--center'>
            <img src={image} alt="" />
        </div>
        <div className='post--right'>
            <h3><a href={`/r/${subreddit}/${title}`}>{title}</a></h3>
            <span className='post--info'>
                submitted an hour by 
                {' '}<a href={`/u/${user}`}>{user}</a>{' '}
                to 
                {' '}<a href={`/r/${subreddit}`}>{subreddit}</a>{' '}
            </span>
            <p className='post--info'>
                {comment_count} comments | share | save | hide | report
            </p>
        </div>
    </div>
  )
}

export default PostItem