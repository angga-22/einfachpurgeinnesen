import * as React from "react";
import { graphql } from "gatsby";
import { Banner, Form, Products, Header, CopyWriter } from "sections/laden";
import ItemLists from "../components/CardItem/ItemLists";

const Laden = ({ data }) => {
  return (
    <>
      <Header
        label={data.pageData.header.label}
        content={data.pageData.header.content}
      />
      <CopyWriter />
      <Products data={data.pageData} />
      <Banner />
      <Form />
      {/* <ItemLists /> */}
    </>
  );
};

export const query = graphql`
  query getLadenData {
    pageData: purLadenJson {
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
`;

export default Laden;
