
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_Options, poster } from "./Constants";
import { FaHeart, FaList, FaPlay } from "react-icons/fa";
import Shimmer from "./Shimmer";
import GPTmoviesuggestion from "./GPTmoviesuggestion";
import Videobackgroundforcard from "./Videobackgroundforcard";
import Usegetbackgroundvideoforcard from "./hooks/Usegetbackgroundvideoforcard";
import { useDispatch, useSelector } from "react-redux";


import { addmoviebackground } from "./utilies/Moviedetailsslice";
 

const Moviedetails = () => {
  const dispatch=useDispatch();
  const moviebackground = useSelector((store) => store.Moviedetails.moviebackground);
  const { movieid } = useParams(); // Get movie ID from URL
  const [movieDetails, setMovieDetails] = useState(null); // Local state
  const [playtrailer,setplayertailer]=useState(false);
  const handleclick=()=>{
    setplayertailer(!playtrailer)
  }
  
  
  
  Usegetbackgroundvideoforcard({movie_id:movieid});
  const fetchMovieDetails = async () => {
    try {
      setMovieDetails(null); 
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`,
        API_Options
      );
      const json = await response.json();
      setMovieDetails(json);
      console.log(json) //
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };
  
  

  

  useEffect(() => {
     fetchMovieDetails();
     return ()=>{
      dispatch(addmoviebackground(null));

    }
    
}, [movieid]); 

  if (!movieDetails) return <Shimmer/>;
  const {original_title,overview,tagline,id,genres,release_date,poster_path, backdrop_path} =movieDetails// ✅ Prevents stale data display

  return (
    <div className="w-screen">
      <div className="relative w-screen min-h-screen pt-16  ">
         <div className="absolute inset-0 -z-10">
                <img
                  className="w-full h-full object-cover blur-sm"
                  src={poster + backdrop_path}
                  alt="Background"
                />
                <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
              
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 py-16 items-center">
                
                <div className="mx-auto md:col-span-1">
                  <img className="w-full max-w-xs rounded-lg shadow-2xl" src={poster + poster_path} alt="Movie Poster" />
                </div>

                {/* Movie Details */}
                <div className="md:col-span-2 text-white">
                  <h1 className="text-4xl font-bold">{original_title} <span className="text-gray-400">({release_date?.split("-")[0]})</span></h1>
                  <p className="text-lg italic text-gray-300 mt-1">{tagline}</p>

                  
                  <div className="flex items-center mt-4 space-x-4">
                    <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full text-black font-bold">
                      {Math.round(movieDetails.vote_average * 10)}%
                    </div>
                    <FaHeart className="text-gray-400 text-2xl cursor-pointer hover:text-red-500" />
                    <FaList className="text-gray-400 text-2xl cursor-pointer hover:text-white" />
                    
                    {(moviebackground)&&
                      <button className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700">
                         <FaPlay /> <span onClick={handleclick}>{(playtrailer)?<Videobackgroundforcard movie_id={id}/>:"Play Trailer"}</span>
                      </button>
                    }
                    
                  </div>

              
                  <p className="text-md text-gray-300 mt-4">{overview}</p>

                  
                  <div className="">
                    {genres?.map((genre) => (
                      <span key={genre.id} className=" rounded-lg text-center  mr-5">
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
          </div>
          <GPTmoviesuggestion/>
    </div>
  );
};

export default Moviedetails;
