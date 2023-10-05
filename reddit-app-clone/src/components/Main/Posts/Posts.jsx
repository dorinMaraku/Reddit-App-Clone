import './Posts.css'
import PostItem from './postitem/PostItem'
 

const Posts = () => {
    const posts = [
        {
            upvote: 547,
            image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Questions about my portfolio',
            user: 'theindepenedentonline',
            subreddit: 'politics',
            comment_count: 284,
        },
        {
            upvote: 547,
            image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Questions about my portfolio',
            user: 'theindepenedentonline',
            subreddit: 'politics',
            comment_count: 284,
        },
        {
            upvote: 547,
            image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Questions about my portfolio',
            user: 'theindepenedentonline',
            subreddit: 'politics',
            comment_count: 284,
        },
        {
            upvote: 547,
            image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Questions about my portfolio',
            user: 'theindepenedentonline',
            subreddit: 'politics',
            comment_count: 284,
        },
        {
            upvote: 547,
            image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Questions about my portfolio',
            user: 'theindepenedentonline',
            subreddit: 'politics',
            comment_count: 284,
        },
        {
            upvote: 547,
            image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Questions about my portfolio',
            user: 'theindepenedentonline',
            subreddit: 'politics',
            comment_count: 284,
        },
        {
            upvote: 547,
            image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Questions about my portfolio',
            user: 'theindepenedentonline',
            subreddit: 'politics',
            comment_count: 284,
        },
    ]

  return (
    <div className='posts'>
        {posts.map(post => 
            <PostItem key={post.upvote} post={post}/>
            )}
    </div>
  )
}

export default Posts