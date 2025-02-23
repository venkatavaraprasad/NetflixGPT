import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'
const Secondcontainer = () => {
  const movies=useSelector(store=>store?.movies)

  return (
    movies &&
    <div className='bg-black'>
      <div className='-mt-44 pl-8 relative z-20'>
      <Movielist title={"Now playing"} movies={movies.nowplayingmovies} />
      <Movielist title={"Popular"} movies={movies.popularmovies} />
      <Movielist title={"Upcoming"} movies={movies.upcomingmovies} />
      <Movielist title={"Top Rated"} movies={movies.topratedmovies} />
    </div>
    </div>
  )
}

export default Secondcontainer
