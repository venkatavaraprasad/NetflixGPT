import {configureStore} from '@reduxjs/toolkit';
import  userReducer  from "./userslice";
import movieReducer from "./movieslistslice";
import GPTReducer from "./GPTslice";
import LanguageReducer from "./Languageslice";
import MoviedetailsReducer from "./Moviedetailsslice";


const appstore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        GPTsearch:GPTReducer,
        Language:LanguageReducer,
        Moviedetails:MoviedetailsReducer


    },

})
export default appstore;