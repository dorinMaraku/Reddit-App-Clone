import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    {   
        id: nanoid(),
        upvote: 547,
        image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Questions about my portfolio',
        user: 'theindepenedentonline',
        subreddit: 'politics',
        comment_count: 284,
    },
    {
        id: nanoid(),
        upvote: 321,
        image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Questions about my portfolio',
        user: 'theindepenedentonline',
        subreddit: 'politics',
        comment_count: 284,
    },
    {
        id: nanoid(),
        upvote: 558,
        image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Questions about my portfolio',
        user: 'theindepenedentonline',
        subreddit: 'politics',
        comment_count: 284,
    },
    {
        id: nanoid(),
        upvote: 546,
        image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Questions about my portfolio',
        user: 'theindepenedentonline',
        subreddit: 'politics',
        comment_count: 284,
    },
    {
        id: nanoid(),
        upvote: 555,
        image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Questions about my portfolio',
        user: 'theindepenedentonline',
        subreddit: 'politics',
        comment_count: 284,
    },
    {
        id: nanoid(),
        upvote: 964,
        image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Questions about my portfolio',
        user: 'theindepenedentonline',
        subreddit: 'politics',
        comment_count: 284,
    },
    {
        id: nanoid(),
        upvote: 123,
        image:  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Questions about my portfolio',
        user: 'theindepenedentonline',
        subreddit: 'politics',
        comment_count: 284,
    },
]

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.unshift(action.payload)
        }

    }
})

export const { postAdded } = postSlice.actions 
export const selectAllPosts = state => state.posts
export default postSlice.reducer