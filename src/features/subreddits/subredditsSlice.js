import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        url: '/r/popular',
        title: 'Popular',
        name: 'popular'
    },
    {
        id: nanoid(),
        url: '/r/all',
        title: 'All',
        name: 'all'
    },
    {
        id: nanoid(),
        url: '/r/random',
        title: 'Random',
        name: 'random' 
    },
    {
        id: nanoid(),
        url: '/r/askereddit',
        title: 'Askereddit',
        name: 'askereddit' 
    },
    {
        id: nanoid(),
        url: '/r/worldnews',
        title: 'Worldnews',
        name: 'worldnews' 
    },
    {
        id: nanoid(),
        url: '/r/videos',
        title: 'Videos',
        name: 'videos' 
    },
    {
        id: nanoid(),
        url: '/r/funny',
        title: 'funny',
        name: 'funny' 
    },
    {
        id: nanoid(),
        url: '/r/todaylearned',
        title: 'todaylearned',
        name: 'todaylearned' 
    },
    {
        id: nanoid(),
        url: '/r/price',
        title: 'price',
        name: 'price' 
    },
    {
        id: nanoid(),
        url: '/r/gaming',
        title: 'gaming',
        name: 'gaming' 
    },
    {
        id: nanoid(),
        url: '/r/movies',
        title: 'movies',
        name: 'movies' 
    },
    {
        id: nanoid(),
        url: '/r/news',
        title: 'news',
        name: 'news' 
    },
    {
        id: nanoid(),
        url: '/r/gifs',
        title: 'gifs',
        name: 'gifs' 
    },
    {
        id: nanoid(),
        url: '/r/aww',
        title: 'aww',
        name: 'aww' 
    },
    {
        id: nanoid(),
        url: '/r/mildyinteresting',
        title: 'mildyinteresting',
        name: 'mildyinteresting' 
    },
    {
        id: nanoid(),
        url: '/r/showrthoughts',
        title: 'showrthoughts',
        name: 'showrthoughts' 
    },
    {
        id: nanoid(),
        url: '/r/television',
        title: 'television',
        name: 'television' 
    },
    {
        id: nanoid(),
        url: '/r/jokes',
        title: 'jokes',
        name: 'jokes' 
    },
    {
        id: nanoid(),
        url: '/r/science',
        title: 'science',
        name: 'science' 
    },
    {
        id: nanoid(),
        url: '/r/soccer',
        title: 'soccer',
        name: 'soccer' 
    },
    {
        id: nanoid(),
        url: '/r/interenetisbeatutiful',
        title: 'interenetisbeatutiful',
        name: 'interenetisbeatutiful' 
    },
    {
        id: nanoid(),
        url: '/r/dataisbeautiful',
        title: 'dataisbeautiful',
        name: 'dataisbeautiful' 
    },
]

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        
    }
})

export const getAllSubredits = state => state.subreddits
export default subredditsSlice.reducer