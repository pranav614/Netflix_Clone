import { createSlice } from "@reduxjs/toolkit";

const addList=createSlice({
    name: "list",
    initialState:{
        myList:[],
    },
    reducers:{
        addToList:(state,action)=>{
            state.myList.push(action.payload);
        },
        removeListItem: (state, action) => {
            state.myList = state.myList.filter(item => item.id !== action.payload);
        },
        removeList:(state,action)=>{
            state.myList.length=0;
        }
    }
})
export const {addToList,removeList} =addList.actions;
export default addList.reducer;