import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  data: null, // This will store the movie data

};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadMovie: (state, action) => {
      state.data = action.payload;
    },
    removeMovie: (state, action) => {
      state.data = null; // Clear the movie data array when a new movie is selected
    },
  },
});

export const { loadMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
