import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import newMoviesSlice from "./newMoviesSlice";
import movieCategories from "./movieCategories";
import addList from "./addList";
import searchToggle from "./searchToggle";
import languageState from "./languageState";
import searchedTxt from "./searchedTxt";
 const myStore=configureStore({
    reducer:{
        user:userSlice,
        nowPlayingMovies:newMoviesSlice,
        categories:movieCategories,
        list:addList,
        mySearch:searchToggle,
        languageChange:languageState,
        searchedMovies:searchedTxt,
    },
 })
 export default myStore;
