import * as React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import { Helmet } from 'react-helmet'


// General css reset
import 'reset-css'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title data-react-helmet="true">einfachpurgeinnesen | Home</title>
      <link rel="einfachpurgeinnesen" href="https://localhost:8000/" />
    </Helmet>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
)


export default Layout
