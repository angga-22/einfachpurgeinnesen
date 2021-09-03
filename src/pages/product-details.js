import * as React from "react";
import { graphql } from "gatsby";
import { VariantSelection } from "sections/productDetails";

const ProductDetail = ({ data }) => {
  return (
    <>
      <VariantSelection />
    </>
  );
};

export const query = graphql`
  query getVarietyItemData {
    pageData: allPurVarietyItemJson {
      nodes {
        id
        name
        price
        quantity
        isAdded
      }
    }
  }
`;

export default ProductDetail;
