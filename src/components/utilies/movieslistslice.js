import { createSlice } from "@reduxjs/toolkit";
const movieslistslice=createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        trailervideo:null,
        popularmovies:null,
        topratedmovies:null,
        upcomingmovies:null,
        carddetails:null,
    },
    reducers:{
        addnowplayingmovies:(state,action)=>{
            state.nowplayingmovies=action.payload;
        },
        addtrailervideo:(state,action)=>{
            state.trailervideo=action.payload;

        },
        addpopularmovies:(state,action)=>{
            state.popularmovies=action.payload;
        },
        addtopratedmovies:(state,action)=>{
            state.topratedmovies=action.payload;

        },
        addupcomingmovies:(state,action)=>{
            state.upcomingmovies=action.payload;
        },
        addcarddetails:(state,action)=>{
            state.carddetails=action.payload;
        }
        

        
    }
}) 
export const {addnowplayingmovies,addtrailervideo,addpopularmovies,addtopratedmovies,addupcomingmovies,addcarddetails}=movieslistslice.actions;
export default movieslistslice.reducer;


