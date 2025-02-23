import React from 'react'
import { poster } from './Constants'
import { Link } from "react-router-dom";

const Moviecard = ({poster_id,movie_id}) => {
 
  if(!poster_id) return null
  
  return (
    <Link to={`/movie/${movie_id}`} >
      <div className='w-36 md:w-48 flex  justify-between mr-7 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:rounded-xl shadow-md  bg-white ' >
          <img  src={poster+poster_id} alt="posterimage" />
      </div>
    </Link>
  )
}

export default Moviecard
