import { useEffect } from 'react';
import { API_Options } from '../Constants';
import { useDispatch } from 'react-redux';
import { addtopratedmovies} from '../utilies/movieslistslice';

const Usetopratedmovies = () => {
    const dispatch=useDispatch();

    const getpopularmovies=async()=>{
      const data=await(fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_Options)) ;
      const json=await data.json();
      
      
      dispatch(addtopratedmovies(json.results))
  
    }
    useEffect(()=>{
      getpopularmovies();
  
    },[])
}

export default Usetopratedmovies;