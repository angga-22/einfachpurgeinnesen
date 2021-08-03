import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import Section from "../Box";
/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui";

const Card = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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
    <div>
      {data.allPurDataJson.edges.map((item, i) => {
        return (
          <Section>
            <Box>
              <Heading
                variant="heading"
                sx={{
                  fontFamily: "label",
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
                        width="20"
                        src={'../../images/vegetarian.png'}
                      />
                      : null}
                </span>
              </Heading>
              <Text
                sx={{
                  fontFamily: "body",
                  "& > span": {
                    fontWeight: 'bold',
                    color: "red"
                  },
                }}
                dangerouslySetInnerHTML={{ __html: item.node.description }}
              >
              </Text>
              <Text
                sx={{
                  fontFamily: "body",
                }}
              >
                <StaticImage
                  alt="vegan"
                  width="20"
                  src={'../../images/bullet-small.png'}
                />
                {item.node.currentPrice}
              </Text>
              {item.node.nextPrice !== null ?
                <Text
                  sx={{
                    fontFamily: "body",
                  }}
                >
                  <StaticImage
                    alt="vegan"
                    width="20"
                    src={'../../images/bullet-big.png'}
                  />
                  {item.node.nextPrice}
                </Text>
                : ""
              }
            </Box>
          </Section>
        );
      })}
    </div>
  );
};

export default Card;
