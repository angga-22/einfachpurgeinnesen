/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces';
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
  `)

  return (
    <GridWrapper sx={{
      m: ["48px 0 0 0", "35px 0 0 0", "48px 0 0 0", "64px 0 0 0", "64px 0 0 0", "68px 0 0 0"]
    }}>
      <GridItem
        sx={{
          gridColumn: ["1 / span 12", "2 / span 10", "1 /  13", "1 /  13", "1 /  13", "3 / 12"],
          width: 'auto',
          height: 'fit-content',
        }}
      >
        {data.allPurDataJson.edges.slice(0, 3).map(item => {
          return (
            <Box sx={{
              mb: ["64px", "64px", "64px", "80px", "80px", "80px"],
            }}>
              <Heading
                variant="heading"
                sx={{
                  fontSize: ["32px", "35px", "32px", "35px", "35px", "35px"],
                  lineHeight: "125%",
                }}
              >
                {item.node.label}{" "}
                <span >
                  {item.node.type === "vegan"
                    ? <StaticImage
                      alt="vegan"
                      width="20"
                      src={'../../images/vegan.png'}
                    />
                    : item.node.type === "vegetarian"
                      ? <StaticImage
                        alt="vegan"
                        width="12"
                        src={'../../images/vegetarian.png'}
                      />
                      : null}
                </span>
              </Heading>
              <Text
                variant="smallParagraph"
                sx={{
                  marginBottom: '30px',
                  '&>b': {
                    fontWeight: '700'
                  }
                }}
                dangerouslySetInnerHTML={{ __html: item.node.description }}
              >
              </Text>
              <Text
                sx={{
                  fontFamily: "label",
                  fontSize: "18px",
                  lineHeight: "100%",
                  mt: ["24px"],
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <StaticImage
                  alt="vegan"
                  width="30"
                  sx={{
                    marginRight: "10px"
                  }}
                  src={'../../images/bullet-small.png'}
                />
                {item.node.currentPrice}
              </Text>
              {
                item.node.nextPrice !== null ?
                  <Text
                    sx={{
                      fontFamily: "label",
                      fontSize: "18px",
                      lineHeight: "100%",
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <StaticImage
                      alt="vegan"
                      width="30"
                      sx={{
                        marginRight: "10px"
                      }}
                      src={'../../images/bullet-big.png'}
                    />
                    {item.node.nextPrice}
                  </Text>
                  : ""
              }
            </Box>
          );
        })}
      </GridItem>
      <GridItem
        sx={{
          gridColumn: ["1 / span 12", "2 / span 10", "14 /  25", "14 /  25", "14 /  25", "14 / 23"],
          width: 'auto',
          height: 'fit-content',
        }}
      >
        {data.allPurDataJson.edges.slice(3, 6).map(item => {
          return (
            <Box sx={{
              mb: ["64px", "64px", "64px", "80px", "80px", "80px"],
            }}>
              <Heading
                variant="heading"
                sx={{
                  fontSize: ["32px", "35px", "32px", "35px", "35px", "35px"],
                  lineHeight: "125%"
                }}
              >
                {item.node.label}{" "}
                <span >
                  {item.node.type === "vegan"
                    ? <StaticImage
                      alt="vegan"
                      width="20"
                      src={'../../images/vegan.png'}
                    />
                    : item.node.type === "vegetarian"
                      ? <StaticImage
                        alt="vegan"
                        width="12"
                        src={'../../images/vegetarian.png'}
                      />
                      : null}
                </span>
              </Heading>
              <Text
                variant="smallParagraph"
                sx={{
                  marginBottom: '30px',
                  '&>b': {
                    fontWeight: 'bold'
                  }
                }}
                dangerouslySetInnerHTML={{ __html: item.node.description }}
              >
              </Text>
              <Text
                sx={{
                  fontFamily: "label",
                  fontSize: "18px",
                  lineHeight: "100%",
                  marginBottom: '12px',
                  mt: ["24px"],
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <StaticImage
                  alt="vegan"
                  width="30"
                  sx={{
                    marginRight: "10px"
                  }}
                  src={'../../images/bullet-small.png'}
                />
                {item.node.currentPrice}
              </Text>
              {
                item.node.nextPrice !== null ?
                  <Text
                    sx={{
                      fontFamily: "label",
                      fontSize: "18px",
                      lineHeight: "100%",
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <StaticImage
                      alt="vegan"
                      width="30"
                      sx={{
                        marginRight: "10px"
                      }}
                      src={'../../images/bullet-big.png'}
                    />
                    {item.node.nextPrice}
                  </Text>
                  : ""
              }
            </Box>
          );
        })}
      </GridItem>
    </GridWrapper >
  );
};

export default Dishes;
