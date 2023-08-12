import React from 'react'
import './globals.css'

const Layout = ({children}) => {
  return (
   <html>
    <body>
        {children}
    </body>
   </html>
  )
}


export const metadata = {
  title: 'MoviApp',
}
export default Layout