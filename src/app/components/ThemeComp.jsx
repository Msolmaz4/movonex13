
'use client'
import {MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'

const ThemeComp = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
        {/*<MdDarkMode className='cursor-pointer' size={30}/>**/}
        <button onClick={()=>setTheme(theme === 'dark' ? 'light' :'dark')}>
          {theme === 'dark' ? 'light' :'dark'}
        </button>
      
    </div>
  )
}

export default ThemeComp