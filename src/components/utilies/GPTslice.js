import { createSlice } from "@reduxjs/toolkit";

const GPTslice=createSlice({
    name:"GPTsearch",
    initialState:{
     showgptsearch:false,
     Movienames:null,
     Movieresults:null,
     
    },
    reducers:
    {
        toggelgptsearch:(state)=>{
            state.showgptsearch=!(state.showgptsearch);

        },
        addgptMovies:(state,action)=>{
            const {Movienames,Movieresults}=action.payload
            state.Movienames=Movienames
            state.Movieresults=Movieresults
            

        }
       
    }
})
export const {toggelgptsearch,addgptMovies} = GPTslice.actions;
export default GPTslice.reducer;