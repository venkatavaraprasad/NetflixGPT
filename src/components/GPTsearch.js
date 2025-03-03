import React from 'react'
import GPTsearchbar from './GPTsearchbar'
import { BG_Image } from './Constants'

const GPTsearch = () => {
  return (
    <div classname="w-screen border-2 border-red-600 ">
      <div className='fixed -z-10'>
       <img className="w-screen h-screen object-cover"src={BG_Image} alt="BG_image" />
      </div>
      <div className=''>
       <GPTsearchbar/>
      </div>
      
     
       
    </div>
  )
}

export default GPTsearch
