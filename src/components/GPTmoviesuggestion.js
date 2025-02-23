import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';


const GPTmoviesuggestion = () => {
  const {Movienames,Movieresults}=useSelector(store=>store.GPTsearch);
  if (!Movieresults) return null;
  
 return (
    
    <div className='px-10 w-full bg-black text-white'>
      {Movienames.map( (movie,index)=> <Movielist title={movie} movies={Movieresults[index]}/> )  }
      
    </div>
  )
}

export default GPTmoviesuggestion
