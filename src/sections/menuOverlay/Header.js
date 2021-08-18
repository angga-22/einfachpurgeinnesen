/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text } from "theme-ui"
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'
const Header = ({ handleClose }) => {
  const data = useStaticQuery(graphql`
    query getOpeningHours {
    allPurHoursJson {
        nodes {
            id
            label
            hours
        }    
    }
    }
  `)

  return (
    <GridWrapper
      sx={{
        '@media screen and (max-width: 750px)': {
          backgroundColor: 'primary',
          boxShadow: [
            "0px 12px 24px rgba(0, 0, 0, 0.15)"
          ]
        }
      }}
    >
      <GridItem
        sx={{
          p: [
            "36px 0",
            "21px 0",
            "16px 0 30px 0",
            "26px 0 31px 0",
            "26px 0",
            "26px 0",
          ],
          gridColumn: [
            "1 / span 12",
            "1 / span 12",
            "1 / span 24 ",
            " 1 / span 24",
            " 1 / span 24",
            " 1 / span 24",
          ],
          backgroundColor: 'primary',
          borderRadius: ["12px"],
          boxShadow: [
            "0px 12px 24px rgba(0, 0, 0, 0.15)",
          ],
          '@media screen and (max-width: 750px)': {
            backgroundColor: 'none',
            borderRadius: ["0"],
            boxShadow: 'none'
          }
        }}>
        <GridItem
          sx={{

            gridColumn: [
              "1 / span 12",
              "1 / span 12",
              "1 / span 24 ",
              " 2 / span 22",
              " 2 / span 22",
              " 4 / span 22",
            ],
            p: ["0", "0", "0", "0 1.9em", "0 2.8em", "0 3.8em"]
          }}
        >
          <Flex
            sx={{
              display: 'flex',
              flexDirection: "column",
              position: 'relative',
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
                flexDirection: ["column", "column", "column", "column", "row", "row"],
                justifyContent: "space-between",
              }}
            >
              <Box>
                {data.allPurHoursJson.nodes.map(item => {
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
                          fontSize: ["16px", "16px", "16px", "18px", "18px", "18px"]
                        }}
                      >{item.label}</Text>
                      <Text
                        variant="subHeading"
                        sx={{
                          lineHeight: "175%",
                          fontWeight: '400',
                          fontSize: ["16px", "16px", "16px", "18px", "18px", "18px"]
                        }}
                      >{item.hours}</Text>
                    </Box>
                  )
                })}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: ["column", "row", "row", "row", "column", "row"],
                  pt: ["24px", "16px", "12px", "12px", null, null],
                  pr: [null, null, "10px", "10px", "5em", "7em"],
                  mt: [null, null, null, "13px", "-3em", "-3em"]
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
                      fontSize: ["16px", "16px", "16px", "18px", "18px", "18px"]
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
                  <Text variant="subHeading"
                    sx={{
                      fontSize: ["16px", "16px", "16px", "18px", "18px", "18px"]
                    }}>
                    Vegatarisch</Text>
                </Box>
              </Box>
            </Box>
            <button
              onClick={handleClose}
              sx={{
                top: [0, 0, 0, 0, "2em", "2.5em"],
                right: [0],
                position: "absolute",
                cursor: "pointer",
                // Reset of default button styles
                border: 'none',
                bg: 'unset'
              }}
            >
              <StaticImage
                sx={{
                  width: ["43px", "43px", "43px", "58px", "58px", "58px"]
                }}
                alt="vegetarian"
                src={'../../images/close.png'}
              />
            </button>

          </Flex>
        </GridItem>
      </GridItem>
    </GridWrapper>
  )
}

export default Header
