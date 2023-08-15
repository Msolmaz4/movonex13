
'use client'
import {MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'
import {BsLightbulb} from 'react-icons/bs'

const ThemeComp = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
        {/*<MdDarkMode className='cursor-pointer' size={30}/>**/}
        <button onClick={()=>setTheme(theme === 'dark' ? 'light' :'dark')}>
          {theme === 'dark' ? (<MdDarkMode/>) :(<BsLightbulb/>)}
        </button>
      
    </div>
  )
}

export default ThemeComp