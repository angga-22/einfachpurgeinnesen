import React from 'react'
import { Helmet } from 'react-helmet'

import Footer from '../Footer'
import Nav from '../Nav'

// General css reset
import 'reset-css'


// General css reset
import 'reset-css'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title data-react-helmet="true">PUR</title>
    </Helmet>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
