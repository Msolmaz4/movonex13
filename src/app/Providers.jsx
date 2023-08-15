'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
//atribute sonradan ekledim normale oladi bunu tailwind ozelliginden dolayi guncelledim dark modu
//tailwindconfigde darkmosde eekledim
const Providers = ({children}) => {
  return (
    <ThemeProvider attribute='class'>
     {children}
  </ThemeProvider>
  )
}

export default Providers