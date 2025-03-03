
import React from 'react';
import { useSelector } from 'react-redux';


const Videobackgroundforcard = () => {
  const moviebackground = useSelector((store) => store.Moviedetails.moviebackground);

  if (!moviebackground) return null;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black  md:bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn ">
      
      <iframe
        className="w-[80%] h-[80%] md:w-3/4 lg:w-[65%] aspect-video rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${moviebackground.key}?autoplay=1&mute=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default Videobackgroundforcard;


