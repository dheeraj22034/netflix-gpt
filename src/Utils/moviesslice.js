import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice(
    {

        name: "movies",
        initialState:{
          NowPlayingMovies: null,  
          trailerVideo: null,
            popularMovies: null,
            trendingMovies: null,
            upcomingMovies: null,
        },
        reducers:{
            addNowPlayingMovies: (state,action) => {
                state.NowPlayingMovies =action.payload;
            },
            addPopularMovies: (state,action) => {
                state.popularMovies =action.payload;
            },
            addTrendingMovies: (state,action) => {
                state.trendingMovies =action.payload;
            },
            addUpcomingMovies: (state,action) => {
                state.upcomingMovies =action.payload;
            },
            addTrailerVideo: (state,action) => {
                state.trailerVideo = action.payload;
            },
        },
    }
);
export const {addNowPlayingMovies , addTrailerVideo,addPopularMovies, addTrendingMovies, addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;