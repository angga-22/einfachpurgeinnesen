import React from "react";
import { graphql } from "gatsby";
// Sections
import { Banner, Article, Header, Quote } from "sections/restaurantPage";

const RestaurantPage = ({ data: { articles } }) => {
  return (
    <>
      <Header />
      <Article
        sx={{ pt: ["100%", "90%", "63px", "48px", "80px", "54px"] }}
        firstParagraph={articles.nodes[0].article}
        secondParagraph={articles.nodes[1].article}
      />
      <Banner />
      <Article
        sx={{ pb: ["120px", "190px", "160px", "117px", "200px", "100px"] }}
        firstParagraph={articles.nodes[2].article}
        secondParagraph={articles.nodes[3].article}
      />
      <Quote
        sx={{ pb: ["126px", "505px", "102px", "179px", "83px", "484px"] }}
      />
    </>
  );
};

export const query = graphql`
  query getRestaurantArticles {
    articles: allPurArticleJson {
      nodes {
        article
        id
      }
    }
  }
`;

export default RestaurantPage;
