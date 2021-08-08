import * as React from 'react'
import BannerOverlay from '../ContentOverlay/BannerOverlay'
import Footer from '../Footer'
import MenuNav from '../ContentOverlay/MenuNav'
import { Helmet } from 'react-helmet'

const LayoutOverlay = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title data-react-helmet="true">einfachpurgeinnesen | Menu</title>
      <link rel="einfachpurgeinnesen" href="https://localhost:8000/" />
    </Helmet>
    <MenuNav />
    <main> {children} </main>
    <BannerOverlay />
    <Footer />
  </div>
)


export default LayoutOverlay
