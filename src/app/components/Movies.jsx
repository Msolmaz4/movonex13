'use client'
import React from 'react'
import Image from 'next/image'


const Movies = ({dt}) => {
  console.log(dt,'Movies')
  return (
    <div className='min-w-[470px] relative imgContanier cursor-pointer'>
      <div>runnnn</div>
      <div className='absolute bottom-0 p-3 w-full flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'> 
      <div className='text-2xl font-bold'> {dt.title} </div>
      <div > {dt.vote_average} - {dt.release_date} </div>
      </div>

    </div>
  )
}

export default Movies