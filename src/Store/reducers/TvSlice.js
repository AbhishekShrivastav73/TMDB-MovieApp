import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    data : null,
}

export const tvSlice = createSlice({
    name : "tv",
    initialState,
    reducers : {
        loadTv : (state,action)=>{
            state.data = action.payload;
        },
        removeTv : (state,action)=>{
            state.data = null;
        }
    }
});


export const {loadTv,removeTv} = tvSlice.actions;
export default tvSlice.reducer