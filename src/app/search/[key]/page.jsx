
import React from 'react'
import Movies from '../../components/Movies'

const Page =async ({params}) => {

  console.log(params.key,'ooooooooooooo')

  const keyword = params.key
  console.log(keyword,'pppppppppppppp')

  const  data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d134bd074dccd874d554100e00e65278&query=${keyword}?language=en-US&page=1
  `)
  const res = await data.json()
  console.log(res , 'ressssssssssssssssssss')

  return (
    <div>
      {
        !data.results
         ? <div> Aranilan sayfa bulunnalmadi</div>
         :
         <div className='flex items-center flex-wrap-gap'> 
          { data?.results?.map((op,i)=>(
          <Movies dt={op} key={i}/>
               ))
          }
         </div>
          
       
      }


    </div>
  )
}

export default Page