import { useEffect } from 'react';
import { API_Options } from '../Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addpopularmovies} from '../utilies/movieslistslice';

const Usepopularmovies = () => {
    const dispatch=useDispatch();
    const popularmovies=useSelector(store=>store.movies.popularmovies);

    const getpopularmovies=async()=>{
      const data=await(fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_Options)) ;
      const json=await data.json();
      
      
      dispatch(addpopularmovies(json.results))
  
    }
    useEffect(()=>{
      (!popularmovies)&&getpopularmovies();
  
    },[])
}

export default Usepopularmovies;