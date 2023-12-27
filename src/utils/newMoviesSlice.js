import { createSlice } from '@reduxjs/toolkit'


const newMoviesSlice =createSlice({
    name:'newMovies',
    initialState:{
        newMovies:null,
        movieKey:null,
    },
    reducers:{
        newMovies:(state,action)=>{
            state.newMovies=action.payload;
        },
        addMovieKey:(state,action)=>{
            state.movieKey=action.payload;
        }
    },

})
export const {newMovies,addMovieKey}=newMoviesSlice.actions;

export default newMoviesSlice.reducer;