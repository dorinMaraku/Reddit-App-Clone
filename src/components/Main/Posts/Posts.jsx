import './Posts.css'
import PostItem from './postitem/PostItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts } from '../../../features/posts/postsSlice'

 

const Posts = () => {

    const posts = useSelector(selectAllPosts)
    const renderedPosts = posts.map(post => {
        return (
            <PostItem key={post.id} post={post}/>
        )
    })

  return (
    <div className='posts'>
        {renderedPosts}
    </div>
  )
}

export default Posts