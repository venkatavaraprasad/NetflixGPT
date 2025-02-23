import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video px-12 pt-[20%] absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold '>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/3'>{overview}</p>
      <div>
        <button className='mt-2 py-2 md:p-4 mx-2 px-4 md:px-12 bg-white text-black  font-bold rounded-lg hover:bg-slate-300'>▷ Play</button>
        <button className='hidden md:inline-block p-4 mx-2 px-12 bg-slate-300  text-black font-bold rounded-lg opacity-50'>movie</button>
 
      </div>
    </div>
  )
}

export default Videotitle
