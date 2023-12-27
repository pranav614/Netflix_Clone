import { createSlice } from "@reduxjs/toolkit";

const languageState=createSlice({
    name:'language',
    initialState:{
        language:"en",
    },
    reducers:{
        changeInLanguage:(state,action)=>{
            state.language=action.payload;
        },
    },
})
export const {changeInLanguage}=languageState.actions;
export default languageState.reducer;