import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};
export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    loadPerson: (state, action) => {
      state.data = action.payload;
    },
    removePerson: (state, action) => {
      state.data = null;
    },
  },
});

export const {loadPerson,removePerson} = personSlice.actions ;
export default personSlice.reducer;
