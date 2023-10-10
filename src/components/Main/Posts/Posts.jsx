import './Posts.css'
import PostItem from './postitem/PostItem'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts, getPostsStatus, getPostsError, fetchPosts } from '../../../features/posts/postsSlice'
import { useEffect } from 'react'
 

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(getAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)
    useEffect(() => {
      if (postsStatus === 'idle') {
        dispatch(fetchPosts('/r/popular/'))
      }
    },[dispatch, ])
    // console.log(posts)

    let renderedPosts;
    if (postsStatus === 'loading') {
      renderedPosts = <p>Loading...</p>
    } else if (postsStatus === 'succeeded') {
      renderedPosts = posts.map(post => {
        return (
          <PostItem key={post.data.id} post={post.data}/>
        )
      })
    } else if (postsStatus === 'failed') {
      renderedPosts = <p>{error}</p>
    }

  return (
    <div className='posts'>
        {renderedPosts}
    </div>
  )
}

export default Posts