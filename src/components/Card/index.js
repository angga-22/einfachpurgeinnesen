import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import Section from "../Box";
/** @jsx jsx */
import { jsx } from "theme-ui";

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
            <h1
              sx={{
                fontFamily: "label",
                fontSize: [2, 3, 4, 5, 6, 7],
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
            </h1>
            <p
              sx={{
                fontFamily: "body",
                "& > span": {
                  fontWeight: 'bold',
                  color: "red"
                },
              }}
              dangerouslySetInnerHTML={{ __html: item.node.description }}
            >
            </p>
            <p
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
            </p>
            {item.node.nextPrice !== null ?
              <p
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
              </p>
              : ""
            }
          </Section>
        );
      })}
    </div>
  );
};

export default Card;
