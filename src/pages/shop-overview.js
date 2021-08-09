import * as React from 'react'
import Nav from '../components/Nav'
import { Helmet } from 'react-helmet'
import MainContent from '../components/ShopOverview/MainContent'
const ShopOverview = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title data-react-helmet="true">einfachpurgeinnesen | Shop</title>
        <link rel="einfachpurgeinnesen" href="https://localhost:8000/" />
      </Helmet>
      <Nav />
      <MainContent />
    </>
  )
}


export default ShopOverview