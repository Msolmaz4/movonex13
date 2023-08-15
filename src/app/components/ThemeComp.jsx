
'use client'
import {MdDarkMode} from 'react-icons/md'
import {useTheme } from 'next-themes'
import {BsLightbulb} from 'react-icons/bs'

const ThemeComp = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}

export default ThemeComp