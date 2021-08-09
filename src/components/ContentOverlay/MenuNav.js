/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text } from "theme-ui"
// import Section from '../Box'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
const MenuNav = () => {


  const datas = useStaticQuery(graphql`
    query getHours {
      allPurHoursJson {
        edges {
          node {
            id
            label
            hours
          }
        }
      }
    }
  `)

  return (
    <div
      sx={{
        maxWidth: ["100%", "100%", "100%", "85%", "85%", "90%"],
        margin: [null, null, null, "20px auto", "40px auto", "50px auto"],
        padding: [
          "5vw 7.5vw",
          "5vw 9.4vw",
          "5vw 7.6vw",
          "2vw 2.6vw",
          "2vw 2vw",
          "2vw 2vw",
        ],
        borderRadius: ["12px"],
        boxShadow: [
          "0px 12px 24px rgba(0, 0, 0, 0.15)"
        ]
      }}
    >
      <Flex
        sx={{
          display: 'flex',
          flexDirection: "column",
          position: 'relative'
        }}
      >
        <Heading sx={{
          mb: ["24px", "8px", "12px", "12px", "12px", "12px"],
          fontSize: ["32px", "42px", "38px", "40px", "40px", "43px"],
          lineHeight: "125%"
        }}>Bistrokuche?!</Heading>
        <Box
          sx={{
            display: 'flex',
            flexDirection: ["column", "column", "column", "column", "column", "row"],
            justifyContent: "space-between"
          }}
        >
          <Box>
            {datas.allPurHoursJson.edges.map(item => {
              return (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: ["column", "row", "row", "row", "row", "row"],
                  }}
                >
                  <Text
                    variant="subHeading"
                    sx={{
                      mr: "1em",
                      lineHeight: "175%",
                      fontSize: [2, 2, 2, 3, 3, 3,]
                    }}
                  >{item.node.label}</Text>
                  <Text
                    variant="subHeading"
                    sx={{
                      lineHeight: "175%",
                      fontWeight: '400',
                      fontSize: [2, 2, 2, 3, 3, 3,]

                    }}
                  >{item.node.hours}</Text>
                </Box>
              )
            })}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: ["column", "row", "row", "row", "row", "column", "row"],
              pt: ["24px", "16px", "12px", "12px", null, null],
              pr: [null, null, "10px", "10px", "5em", "7em"],
              mt: [null, null, null, null, "13px", "-3em", "-3em"]
            }}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: "row",
              alignItems: 'center',
              pb: ["1em"]
            }}>
              <StaticImage
                alt="vegan"
                width="17"
                sx={{
                  mr: '10px'
                }}
                src={'../../images/vegan.png'}
              />
              <Text
                variant="subHeading"
                sx={{
                  pr: "48px",
                  fontSize: [2, 2, 2, 3, 3, 3,]
                }}
              >Vegan oder vegane Option</Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: "row",
                alignItems: 'center',
                pb: ["1em"]
              }}
            >
              <StaticImage
                width="10"
                alt="vegetarian"
                sx={{
                  mr: '17px'
                }}
                src={'../../images/vegetarian.png'}
              />
              <Text variant="subHeading" sx={{
                fontSize: [2, 2, 2, 3, 3, 3,]
              }}>
                Vegatarisch</Text>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            top: [0, 0, 0, 0, 0, "2em", "2.5em"],
            right: [0],
            position: "absolute"
          }}
        >
          <StaticImage
            sx={{
              width: ["43px", "43px", "43px", "58px", "58px", "58px"]
            }}
            alt="vegetarian"
            src={'../../images/close.png'}
          />
        </Box>

      </Flex>

    </div>
  )
}

export default MenuNav
