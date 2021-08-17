import { graphql } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Banner } from 'sections/ShopOverview'

const ShopOverview = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title data-react-helmet="true">einfachpurgeinnesen | Shop</title>
      </Helmet>
      <Header data={data.pageDat.header} />
      <Info data={data.pageData.info} />
      <ProductShowcase data={data.pageData.productShowcase} />
      {/* <Banner /> */}
    </>
  )
}


export const query = graphql`
      query getContentOfShopOverviewPage {
        pageData: purShopOverviewJson {
        header {
        label
      content
    }
      info {
        label
      content
    }
      productShowcase {
        label
      content
    }
  }
}`

export default ShopOverview