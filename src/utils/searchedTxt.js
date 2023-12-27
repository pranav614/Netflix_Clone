import { createSlice } from "@reduxjs/toolkit";

const searchedTxt=createSlice({
    name:'searchedText',
    initialState: {
        changedTxt:null,
    },
    reducers:{
        addChangedTxt:(state,action)=>{
            state.changedTxt =action.payload;
        },
    },

})
export const {addChangedTxt}=searchedTxt.actions;
export default searchedTxt.reducer;
