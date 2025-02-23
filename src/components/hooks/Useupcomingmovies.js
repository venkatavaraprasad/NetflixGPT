import { useEffect } from 'react';
import { API_Options } from '../Constants';
import { useDispatch } from 'react-redux';
import { addupcomingmovies} from '../utilies/movieslistslice';

const Useupcomingmovies = () => {
    const dispatch=useDispatch();

    const getpopularmovies=async()=>{
      const data=await(fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options)) ;
      const json=await data.json();
 
      
      dispatch(addupcomingmovies(json.results))
  
    }
    useEffect(()=>{
      getpopularmovies();
  
    },[])
}

export default Useupcomingmovies;