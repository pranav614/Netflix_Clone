import { createSlice } from "@reduxjs/toolkit";

const searchToggle = createSlice({
  name: 'search',
  initialState: {
    mySearchComp: false,
  },
  reducers: {
    mySearchCompChange: (state, action) => {
      state.mySearchComp = !state.mySearchComp;
    },
  },
});

export const { mySearchCompChange } = searchToggle.actions;
export default searchToggle.reducer;
