import React from 'react'
import Movies from './components/Movies'


const Page = async ({searchParams}) => {
  console.log(searchParams.genre,'searchparamas')

  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? 'movie/' + searchParams.genre : 'trending/all/day'}?api_key=d134bd074dccd874d554100e00e65278&language=en-US&page=1`,{next : {revalidate:10000}})
    
  const data = await res.json()
  console.log(data)
 

  return (
    <div className='flex items-center justify-center flex-wrap gap-3'>
    { data?.results?.map((op,i)=>(
<Movies dt={op} key={i}/>
     ))
}
    </div>
  )
}



export default Page