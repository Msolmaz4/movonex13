import Image from 'next/image'
import React from 'react'


const getMovie = async (id)=>{
   const rees = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d134bd074dccd874d554100e00e65278`)


   return await rees.json()
}

const Page =async ( {params} ) => {

    const id = params.id
    console.log(id,'paramsdaki aid')
  
     const movieDetail = await getMovie(id)
     console.log(movieDetail,'mpviedetail')

  return (
    <div className='relative p-7 min-h-screen ' >
 {/**  <Image
     src={`https://api.themoviedb.org/3/movie/${movieDetail?.backdeop_path ||movieDetail?.poster_path }`}
     width={500}
     height={500}
  />*/ }
  <div className='absolute'>
    <div className='text-4xl font-bold my-3'> {movieDetail?.title}</div>
    <div className='w-1/2'> {movieDetail?.overview}</div>


  </div>



    </div>
  )
}

export default Page