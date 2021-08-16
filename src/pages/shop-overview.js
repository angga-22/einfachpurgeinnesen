import * as React from 'react'
import { Helmet } from 'react-helmet'
import { MainContent, Banner } from 'sections/ShopOverview'

const ShopOverview = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title data-react-helmet="true">einfachpurgeinnesen | Shop</title>
        <link rel="einfachpurgeinnesen" href="https://localhost:8000/" />
      </Helmet>
      <MainContent />
      {/* <Banner /> */}
    </>
  )
}


export default ShopOverview