import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_ROOT = 'https://www.reddit.com'


const initialState = {
    posts: [],
    status: 'idle', // 'loading' | 'succeeded' | 'failed'
    error: null,
    searchTerm: '',
    subredditUrl: '/r/home'
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subredditUrl) => {
    try {
        const response = await fetch(`${API_ROOT}${subredditUrl}.json`)
        .then(response => response.json());
        // console.log(response.data.children)
        return response.data.children.map(post => post.data)
    } catch (error) {
        return error.message
    }
})

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        setSubredditUrl: (state, action) => {
            state.subredditUrl = action.payload;
            console.log(action.payload)
            state.searchTerm = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.posts = action.payload
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const { setSearchTerm, setSubredditUrl } = postSlice.actions 
export const getSubredditUrl = state => state.posts.subredditUrl
export const getAllPosts = state => state.posts.posts
export const getPostsStatus = state => state.posts.status
export const getPostsError = state => state.posts.error 

export default postSlice.reducer