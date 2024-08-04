import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

// Define the async thunk
export const fetchTrending = createAsyncThunk(
  "trending/fetchTrending",
  async ({ category, duration }, thunkAPI) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/${category}/${duration}`);
      console.log(response.data.results); // Log the data
      return response.data.results;
    } catch (error) {
      console.log(error); // Log the error
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Define the initial state
const initialState = {
  data: [], // This will store the movie data
  loading: false, // Added for tracking loading state
  error: null, // Added for tracking error state
};

// Create the slice
export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrending.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Updated to use 'data' from initialState
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message; // Improved error handling
      });
  },
});

export default trendingSlice.reducer;
