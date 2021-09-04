import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import { Header, Info, ProductShowcase, Banner } from "sections/shopOverview";
import { Box } from "theme-ui";

const ShopOverview = ({ data }) => {
  return (
    <Box
      sx={{
        m: [
          "87px 0 148px 0",
          "126px 0 188px 0",
          "92px 0 150px 0",
          "260px 0 360px 0",
          "169px 0 0 0",
          "160px 0 43px 0",
        ],
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title data-react-helmet="true">einfachpurgeinnesen | Shop</title>
      </Helmet>
      <Header data={data.pageData.header} />
      <Info data={data.pageData.info} />
      <ProductShowcase data={data.pageData.productShowcase} />
      <Banner />
    </Box>
  );
};

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
  }
`;

export default ShopOverview;
