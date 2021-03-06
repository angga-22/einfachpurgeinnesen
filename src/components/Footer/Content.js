import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Paragraph } from "theme-ui";

const Content = () => {
  const data = useStaticQuery(graphql`
    query FooterInfo {
      allPurFooterJson {
        edges {
          node {
            id
            label
            content
          }
        }
      }
    }
  `);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: [
          "column",
          "column",
          "row",
          "column-reverse",
          "column",
          "column",
        ],
        alignItems: [null, null, "flex-end"],
        margin: ["0 auto"],
        maxWidth: ["220px", "300px", "100%", "100%", "100%", "100%"],
        marginTop: ["0", "0", "40px", "62px"],
      }}
    >
      {/* //label */}
      <Box
        sx={{
          paddingBottom: ["24px", "40px", "0", "0"],
          paddingRight: ["0", "0", "5vw", "0"],
          textAlign: ["center", "center", "left", "Left"],
        }}
      >
        <Paragraph
          variant="footerText"
          sx={{
            fontWeight: "ceraBold",
          }}
        >
          Restaurant{" "}
        </Paragraph>
        {data.allPurFooterJson.edges.slice(0, 2).map((item) => {
          return (
            <Box key={item.node.id}>
              <Paragraph variant="footerText">
                {item.node.label + " " + item.node.content}
              </Paragraph>
            </Box>
          );
        })}
      </Box>
      {/* //label */}
      <Box
        sx={{
          padding: ["0 0 24px 0", "0 0 40px 0", "0 5vw 0 0", "0 0 77px 0", "0"],
          textAlign: ["center", "center", "left", "left"],
          margin: ["0", "0", "0", "0", "32px 0", "32px 0"],
          width: ["100%", "100%", "50%", "100%"],
        }}
      >
        <Paragraph
          variant="footerText"
          sx={{
            fontWeight: "ceraBold",
          }}
        >
          Ladengeschäft{" "}
        </Paragraph>
        {data.allPurFooterJson.edges.slice(2, 3).map((item) => {
          return (
            <Box key={item.node.id}>
              <Paragraph variant="footerText">
                {item.node.label + " " + item.node.content}
              </Paragraph>
            </Box>
          );
        })}
      </Box>
      {/* //label */}
      <Box
        sx={{
          textAlign: ["center", "center", "left", "left"],
          position: ["static", "static", "static", "absolute", "static"],
          bottom: "81px",
          left: "7.6vw",
          width: ["100%", "100%", "50%", "25%", "100%"],
        }}
      >
        <Paragraph
          variant="footerText"
          sx={{
            fontWeight: "ceraBold",
          }}
        >
          Kontakt & Anfahrt{" "}
        </Paragraph>
        {data.allPurFooterJson.edges.slice(3, 5).map((item) => {
          return (
            <Box key={item.node.id}>
              <Paragraph variant="footerText">
                {item.node.label + " " + item.node.content}
              </Paragraph>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Content;
