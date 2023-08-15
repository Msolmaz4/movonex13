
'use client'
import {MdDarkMode} from 'react-icons/md'
import {useTheme } from 'next-themes'
import {BsLightbulb} from 'react-icons/bs'

const ThemeComp = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? 'lgiht' :'dark'}
      </button>
   
    </div>
  )
}

export default ThemeComp