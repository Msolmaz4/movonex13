'use client'

import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import MenuItem from './MenuItem'

import ThemeCop from './ThemeComp'
import { useRouter } from 'next/navigation'

const Header = () => {
 
   const [key ,setKey] =useState('')
   const router = useRouter()

    const men =[
        {
            name:'About',
            url:'/about'
        },
        {
            name:'Sign',
            url:'/login'
        }
    ]
    

  const searchfunc =(e)=>{
    if(e.key === 'Enter' && key.length >=3){
      router.push(`/search/${key}`)
      setKey('')
    }

  }


  return (
    <div className='flex items-center gap-7 h-20 p-5'>
        <div className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>MoviApp</div>
        <div className='flex flex-1 gap-2 border p-3 rounded-lg'>
            <input value={key} onKeyDown={searchfunc} onClick={(e)=>setKey(e.target.value)} type="text" className='outline-none flex-1 bg-transparent '  placeholder='Arama yapiniz'/>
            <BsSearch size={25}/>
        </div>
        <ThemeCop/>
      { men.map((er)=>(
        <MenuItem mn={er}/>
       ))}
    </div>
  )
}

export default Header