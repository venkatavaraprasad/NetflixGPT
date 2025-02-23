import React from 'react';
import Videotitle from './Videotitle';
import Videobackground from './videobackground';
import { useSelector } from 'react-redux';


const Maincontainer = () => {
    const movies=useSelector(store=>store.movies?.nowplayingmovies);
    if(!movies) return ;
    const mainmovie=movies[0];
    const {original_title,overview,id}=mainmovie;
    
  return (
   <div>
      <Videotitle title={original_title} overview={overview}/>
      <Videobackground  movie_id={id}/>
    </div>
  )
}

export default Maincontainer
