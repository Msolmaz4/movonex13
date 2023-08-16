'use client'

import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'
import Image from 'next/image'

const Tabs = () => {
 
    const searchParams = useSearchParams()
    const gerne = searchParams.get('genre')
    console.log(gerne,'gerne')

    const tab =[
        {
            name:'Popular',
            url:'popular'
        },
        {
            name:'En Son',
            url:'latest'
        },
        {
            name:'Yakinda Gelecekler',
            url:'upcoming'
        }
    ]
  return (
    <div className='p-5 m-5 bg-gray-100 dark:bg-gray-800 flex items-center justify-center gap-7'>
        {
            tab.map((er)=>(
              <Link className={`
              cursor-pointer hover:opacity-75 transition-opacity
              ${er.url === gerne ? ' underline underline-offset-8 text-amber-600': '' }
              `}
              
              href={`/?genre=${er.url}`}> {er.name }</Link>
            ))
        }


    </div>
  )
}

export default Tabs