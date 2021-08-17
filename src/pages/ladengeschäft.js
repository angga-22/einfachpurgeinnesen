import * as React from "react";
import { graphql } from 'gatsby';
import { MainContent, Banner, Form, ListCafe } from "sections/laden";

const Laden = ({ data: { allPurLadenJson } }) => {
  console.log(data, 'data')
  return (
    <>
      <MainContent />
      {/* <ListCafe
        label={allPurLadenJson.nodes.slice(1, 9).map(item => item.label)}
        content={allPurLadenJson.nodes.slice(1, 9).map(item => item.content)}
      /> */}
      <Banner />
      <Form />
    </>
  );
};

export const data = graphql`
    query LadenDataPageAndLadenDataPage {
     allPurLadenJson {
        nodes {
          id
          label
          content
        }
      }
    }
  `



export default Laden;
