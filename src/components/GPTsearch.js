import React from 'react'
import GPTsearchbar from './GPTsearchbar'
import { BG_Image } from './Constants'

const GPTsearch = () => {
  return (
    <div>
      <img src={BG_Image} alt="BG_image" className='fixed -z-20'/>
      <GPTsearchbar/>
     
       
    </div>
  )
}

export default GPTsearch
