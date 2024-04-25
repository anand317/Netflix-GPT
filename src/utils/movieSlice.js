import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice ({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        trailer:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailer=action.payload;
        }
    }
})

export const {addNowPlayingMovie,addTrailerVideo} =movieSlice.actions;
export default movieSlice.reducer;