

import React from 'react'

export const VideoTitle = ({title,overview}) => {
    
  return (
    <div className='W-screen aspect-video pt-[20%] px-8 absolute bg-gradient-to-r from-black'>
         <h1 className='text-3xl font-bold text-white'>{title}</h1>
         <p className=' text-xl py-3 w-1/3 text-white'>{overview}</p>
         <div className='flex gap-2'>
            <button className='bg-white text-black p-4 px-12  font-bold rounded-md hover:bg-opacity-50'>  Play</button>
            <button className='bg-white text-black p-4 px-12  font-bold rounded-md bg-opacity-50'>  More Info</button>
        </div>
    </div>
   
  )
}
