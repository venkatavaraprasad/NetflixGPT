import { createSlice } from "@reduxjs/toolkit";
const Moviedetails=createSlice({
    name:"Moviedetail",
    initialState:{
        moviebackground:null,
    },
    reducers:
    {  addmoviebackground:(state,action)=>{
        state.moviebackground=action.payload},
    }


    
})
export const {addmoviebackground} = Moviedetails.actions;
export default Moviedetails.reducer
