import { useDispatch, useSelector } from "react-redux";
 import { addtrailervideo } from "../utilies/movieslistslice";
 import { useEffect } from "react";
 import { API_Options } from "../Constants";
 const Usegetbackgroundvideo=(movie_id)=>{
    const trailervideo=useSelector(store=>store.movies?.trailervideo);
    
     const dispatch=useDispatch();
     const getbackgroundvideo=async()=>{

        const data=await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US", API_Options);
        const json=await data.json();
        
        
        const backgroundvideo=json.results.filter((x)=>x.type==="Trailer")
        const trailer=backgroundvideo.length ? backgroundvideo[0]:json.results[0];
      

       
        dispatch(addtrailervideo(trailer));
    }

    
    useEffect(()=>{
      (!trailervideo)&&getbackgroundvideo();

      },[]);
}
export default Usegetbackgroundvideo;