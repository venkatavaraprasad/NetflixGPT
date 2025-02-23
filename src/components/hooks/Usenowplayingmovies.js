import { useEffect } from 'react';
import { API_Options } from '../Constants';
import { useDispatch } from 'react-redux';
import { addnowplayingmovies } from '../utilies/movieslistslice';

const Usenowplayingmovies = () => {
    const dispatch=useDispatch();

    const getnowplayingmovies=async()=>{
      const data=await(fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)) ;
      const json=await data.json();
      console.log("IAM in Nowplaying"+API_Options.Authorization);
      
      dispatch(addnowplayingmovies(json.results))
  
    }
    useEffect(()=>{
      getnowplayingmovies();
  
    },[])
}

export default Usenowplayingmovies;
