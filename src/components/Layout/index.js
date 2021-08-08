import * as React from 'react'
import FooterInfo from '../FooterInfo'

// General css reset
import 'reset-css'

const Layout = ({ children }) => {
  return (
    <main>
      {children}
      <FooterInfo />
    </main>
  )
}


export default Layout
