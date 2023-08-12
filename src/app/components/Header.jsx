import React from 'react'
import {BsSearch} from 'react-icons/bs'
import MenuItem from './MenuItem'
import Thema from './ThemeComp'
import ThemeCop from './ThemeComp'

const Header = () => {
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
  return (
    <div className='flex items-center gap-7 h-20 p-5'>
        <div className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>MoviApp</div>
        <div className='flex flex-1 gap-2 border p-3 rounded-lg'>
            <input type="text" className='outline-none flex-1'  placeholder='Arama yapiniz'/>
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