import { graphql } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { MainContent, Banner } from 'sections/ShopOverview'

const ShopOverview = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title data-react-helmet="true">einfachpurgeinnesen | Shop</title>
        <link rel="einfachpurgeinnesen" href="https://localhost:8000/" />
      </Helmet>
      <MainContent data={data.mainContent} />
      {/* <Banner /> */}
    </>
  )
}


export const query = graphql`    
  query whyIsThisNotWorking{
    mainContent: allPurShopOverviewJson {
      nodes {
        id
        label
        content
      }
  }
}`

export default ShopOverview