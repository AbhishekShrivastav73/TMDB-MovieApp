import { configureStore } from "@reduxjs/toolkit";
import trendingReducer from "./reducers/trendingSlice";
import movieReducer, { movieSlice } from "./reducers/MovieSlice";
import tvReducer from "./reducers/TvSlice";
import personReducer from "./reducers/PersonSlice";

export const store = configureStore({
  reducer: {
    trending: trendingReducer,
    movie: movieReducer,
    tv: tvReducer,
    person: personReducer, 
  },
});
