import { API_Options } from "../Constants";
import { useEffect } from "react";
import { addmoviebackground } from "../utilies/Moviedetailsslice";
import { useDispatch } from "react-redux";
const Usegetbackgroundvideoforcard=({movie_id})=>
{  
    const dispatch=useDispatch();
    const getbackgroundvideo=async()=>{
                const data=await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US", API_Options);
                const json=await data.json();
                console.log(json)
                const backgroundvideo=json.results.filter((x)=>x.type==="Trailer")
                const trailer=backgroundvideo.length ? backgroundvideo[0]:json.results[0];
                dispatch(addmoviebackground(trailer));

   }
   console.log("IN USEGETBACKGROUND FORCARD");
        
    useEffect(()=>{
       getbackgroundvideo();
       
    },[])
    

}
export default Usegetbackgroundvideoforcard;