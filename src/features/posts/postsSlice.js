import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_ROOT = 'https://www.reddit.com'


const initialState = {
    posts: [],
    status: 'idle', // 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subredditUrl) => {
    try {
        const response = await fetch(`${API_ROOT}${subredditUrl}.json`)
        .then(response => response.json());
        // console.log(response.data.children)
        return response.data.children
    } catch (error) {
        return error.message
    }
})

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.unshift(action.payload)
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

export const { postAdded } = postSlice.actions 
export const getAllPosts = state => state.posts.posts
export const getPostsStatus = state => state.posts.status
export const getPostsError = state => state.posts.error
export default postSlice.reducer