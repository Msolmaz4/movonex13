
'use client'

import {useTheme } from 'next-themes'


const ThemeComp = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? 'light' :'dark'}
      </button>
   
    </div>
  )
}

export default ThemeComp