import { createSlice } from "@reduxjs/toolkit";

const movieCategories= createSlice({
    name:'Movies',
    initialState: {
        topRated:null,
        popular:null,
        series:null,
    },
    reducers:{
        addTopRated:(state,action)=>{
            state.topRated=action.payload;
        },
        addPopular:(state,action)=>{
            state.popular=action.payload;
        },
        addSeries:(state,action)=>{
            state.series=action.payload;
        },
    },
})
export const {addTopRated, addPopular, addSeries}=movieCategories.actions;

export default movieCategories.reducer;