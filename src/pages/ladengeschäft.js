import * as React from "react";
import { graphql } from 'gatsby';
import { Banner, Form, Products, Header, CopyWriter } from "sections/laden";

const Laden = ({ data }) => {

  return (
    <>
      <Header
        label={data.pageData.nodes[0].header.label}
        content={data.pageData.nodes[0].header.content}
      />
      <CopyWriter />
      <Products
        data={data.pageData}
      />
      <Banner />
      <Form />
    </>
  );
};

export const query = graphql`
  query MyQuery {
    pageData: allPurLadenJson {
      nodes {
        header {
          content
          label
        }
        products {
          
          content
          label
        }
      }
    }
  }
  `




export default Laden;
