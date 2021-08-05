import * as React from 'react'
import Footer from '../Footer'
import FooterInfo from '../FooterInfo'
import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FooterInfo />
    </>
  )
}

export default Layout
