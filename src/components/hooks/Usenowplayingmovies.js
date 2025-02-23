import { useEffect } from 'react';
import { API_Options } from '../Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addnowplayingmovies } from '../utilies/movieslistslice';

const Usenowplayingmovies = () => {
    const dispatch=useDispatch();
    const nowplayingmovies=useSelector(store=>store.movies.nowplayingmovies)

    const getnowplayingmovies=async()=>{
      const data=await(fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)) ;
      const json=await data.json();
      console.log("IAM in Nowplaying"+API_Options.Authorization);
      
      dispatch(addnowplayingmovies(json.results))
  
    }
    useEffect(()=>{
      (!nowplayingmovies) && getnowplayingmovies();
  
    },[])
}

export default Usenowplayingmovies;
