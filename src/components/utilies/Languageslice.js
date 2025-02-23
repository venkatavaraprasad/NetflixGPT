import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice=createSlice({
    name:"Language",
    initialState:{
        lang:"English"
    },
    reducers:{
        changelanguage:(state,action)=>{
            state.lang=action.payload

        }  
      }
})
export const {changelanguage} = LanguageSlice.actions;
export default LanguageSlice.reducer;