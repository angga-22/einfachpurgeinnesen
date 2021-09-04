/** @jsx jsx */
import { jsx, Box, Heading, Paragraph } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
const Dishes = () => {
  const data = useStaticQuery(graphql`
    query getMenuData {
      allPurDataJson {
        edges {
          node {
            id
            label
            description
            currentPrice
            nextPrice
            type
          }
        }
      }
    }
  `);

  return (
    <GridWrapper
      sx={{
        m: [
          "48px 0 0 0",
          "35px 0 0 0",
          "48px 0 0 0",
          "64px 0 0 0",
          "64px 0 0 0",
          "68px 0 0 0",
        ],
      }}
    >
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "2 / span 10",
            "1 /  13",
            "1 /  13",
            "1 /  13",
            "3 / 12",
          ],
          width: "auto",
          height: "fit-content",
        }}
      >
        {data.allPurDataJson.edges.slice(0, 3).map((item) => {
          return (
            <Box
              sx={{
                mb: ["64px", "64px", "64px", "80px", "80px", "80px"],
              }}
            >
              <Heading
                variant="h2"
                sx={{
                  fontSize: ["32px", "42px", "28px", "40px", "40px", "40px"],
                  lineHeight: "125%",
                  fontWeight: "bold",
                }}
              >
                {item.node.label}{" "}
                <span>
                  {item.node.type === "vegan" ? (
                    <StaticImage
                      alt="vegan"
                      width="20"
                      src={"../../images/menu-overlay/opt-mark-yellow.png"}
                    />
                  ) : item.node.type === "vegetarian" ? (
                    <StaticImage
                      alt="vegan"
                      width="12"
                      src={"../../images/menu-overlay/opt-mark-green.png"}
                    />
                  ) : null}
                </span>
              </Heading>
              <Paragraph
                variant="smallParagraph"
                sx={{
                  marginBottom: "30px",
                  "&>b": {
                    fontWeight: "700",
                  },
                }}
                dangerouslySetInnerHTML={{ __html: item.node.description }}
              ></Paragraph>
              <Paragraph
                sx={{
                  fontFamily: "label",
                  fontSize: "22px",
                  lineHeight: "125%",
                  fontWeight: "bold",
                  mt: ["24px"],
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <StaticImage
                  alt="vegan"
                  width="30"
                  sx={{
                    marginRight: "10px",
                  }}
                  src={"../../images/menu-overlay/circle-black-sm.png"}
                />
                {item.node.currentPrice}
              </Paragraph>
              {item.node.nextPrice !== null ? (
                <Paragraph
                  sx={{
                    fontFamily: "label",
                    fontSize: "22px",
                    lineHeight: "125%",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <StaticImage
                    alt="vegan"
                    width="30"
                    sx={{
                      marginRight: "10px",
                    }}
                    src={"../../images/menu-overlay/circle-black-lg.png"}
                  />
                  {item.node.nextPrice}
                </Paragraph>
              ) : (
                ""
              )}
            </Box>
          );
        })}
      </GridItem>
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "2 / span 10",
            "14 /  25",
            "14 /  25",
            "14 /  25",
            "14 / 23",
          ],
          width: "auto",
          height: "fit-content",
        }}
      >
        {data.allPurDataJson.edges.slice(3, 6).map((item) => {
          return (
            <Box
              sx={{
                mb: ["64px", "64px", "64px", "80px", "80px", "80px"],
              }}
            >
              <Heading
                variant="h2"
                sx={{
                  fontSize: ["32px", "42px", "28px", "40px", "40px", "40px"],
                  lineHeight: "125%",
                  fontWeight: "bold",
                }}
              >
                {item.node.label}{" "}
                <span>
                  {item.node.type === "vegan" ? (
                    <StaticImage
                      alt="vegan"
                      width="20"
                      src={"../../images/menu-overlay/opt-mark-yellow.png"}
                    />
                  ) : item.node.type === "vegetarian" ? (
                    <StaticImage
                      alt="vegan"
                      width="12"
                      src={"../../images/menu-overlay/opt-mark-green.png"}
                    />
                  ) : null}
                </span>
              </Heading>
              <Paragraph
                variant="smallParagraph"
                sx={{
                  marginBottom: "30px",
                  "&>b": {
                    fontWeight: "bold",
                  },
                }}
                dangerouslySetInnerHTML={{ __html: item.node.description }}
              ></Paragraph>
              <Paragraph
                sx={{
                  fontFamily: "label",
                  fontSize: "22px",
                  lineHeight: "125%",
                  fontWeight: "bold",
                  marginBottom: "12px",
                  mt: ["24px"],
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <StaticImage
                  alt="vegan"
                  width="30"
                  sx={{
                    marginRight: "10px",
                  }}
                  src={"../../images/menu-overlay/circle-black-sm.png"}
                />
                {item.node.currentPrice}
              </Paragraph>
              {item.node.nextPrice !== null ? (
                <Paragraph
                  sx={{
                    fontFamily: "label",
                    fontSize: "22px",
                    lineHeight: "125%",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <StaticImage
                    alt="vegan"
                    width="30"
                    sx={{
                      marginRight: "10px",
                    }}
                    src={"../../images/menu-overlay/circle-black-lg.png"}
                  />
                  {item.node.nextPrice}
                </Paragraph>
              ) : (
                ""
              )}
            </Box>
          );
        })}
      </GridItem>
    </GridWrapper>
  );
};

export default Dishes;
