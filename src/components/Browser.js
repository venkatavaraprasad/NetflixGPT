import React from 'react'
import Usenowplayingmovies from './hooks/Usenowplayingmovies'
import Maincontainer from './Maincontainer'
import Secondcontainer from './Secondcontainer'
import Usepopularmovies from './hooks/Usepopularmovies'
import Usetopratedmovies from './hooks/Usetopratedmovies'
import Useupcomingmovies from './hooks/Useupcomingmovies'
import { useSelector } from 'react-redux'
import GPTsearch from './GPTsearch'

const Browser = () => {
  const showgptsearch=useSelector(store=>store.GPTsearch?.showgptsearch);
  
  Usenowplayingmovies()
  Usepopularmovies()
  Usetopratedmovies()
  Useupcomingmovies()

  
  return (
    <div >
       
      { (showgptsearch)?<GPTsearch/>:
       <>
          <Maincontainer/>
          <Secondcontainer/>
       </>
      }  
      
    </div>
  )
}

export default Browser
