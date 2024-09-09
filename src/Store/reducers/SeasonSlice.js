import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const seasonSlice =  createSlice({
    name: "season",
    initialState,
    reducers: {
        loadSeason: (state, action) => {
            state.data = action.payload;
        },
        removeSeason: (state, action) => {
            state.data = null;
        },
    },
 });

export const { loadSeason, removeSeason } = seasonSlice.actions;

export default seasonSlice.reducer;