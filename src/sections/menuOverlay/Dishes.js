/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import Section from "components/Box";

const Dishes = () => {
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
        <Section
            sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(1fr, 1fr))`,
                '@media screen and (min-width: 812px)': {
                    gridTemplateColumns: 'repeat(2, 1fr)'
                },
                padding: [
                    "0 7.5vw",
                    "0 9.4vw",
                    "0 7.6vw",
                    "0 7.6vw",
                    "0 8.1vw",
                    "0 9vw",
                ],
                marginTop: ["48px", "35px", "48px", "64px", "64px", "68px"]
            }}
        >
            {data.allPurDataJson.edges.map(item => {
                return (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: 'auto',
                            height: 'fit-content',
                            marginBottom: ["64px", "64px", "64px", "80px", "80px", "80px"],
                            marginRight: '0',
                            '@media screen and (min-width: 812px)': {
                                marginRight: '40px',
                            },
                        }}
                    >
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
                            variant="paragraph"
                            sx={{
                                marginBottom: '30px',

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
        </Section >
    );
};

export default Dishes;
