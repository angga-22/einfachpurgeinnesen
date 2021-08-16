import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'theme-ui'
import Section from 'components/Box'
import { StaticImage } from 'gatsby-plugin-image'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'

const MainContent = () => {

  const data = useStaticQuery(graphql`
    query getPurShopOverview {
      allPurShopOverviewJson {
        edges {
          node {
            id
            label
            content
          }
        }
      }
    }
  `)

  return (
    <GridWrapper sx={{
      m: ["87px 0 148px 0", "126px 0 188px 0", "92px 0 150px 0", "260px 0 360px 0", "169px 0 0 0", "160px 0 43px 0"]
    }}>
      {/* // section 1  */}
      <GridItem sx={{
        gridColumn: ["1 / span 12", "1 / span 12", "2 / span 23", "2 / span 24", "2 / span 22", "2 / span 22"],
        position: 'relative',
        mb: ["158px", "173px", "138px", "166px", "161px", "109px"],

      }}>
        <Box
          sx={{
            position: 'absolute',
            top: ["-5", "-6em", "-5", "-6", "-6", "-5",],
            right: ["0", "2", "4", "4"],
            width: ["35px", "35px", "35px", "50px", "35px", "50px"]
          }}
        >
          <StaticImage
            src={'../../images/abstract-img.png'}
            alt="abstract-img" />
        </Box>

        {data.allPurShopOverviewJson.edges.slice(0, 1).map(item => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            key={item.node.id}>
            <Box
              sx={{
                pb: ["24px", "24px", "24px", "57px", "43px", "100px"],
                width: ["100%", "100%", "90%", "100%", "100%", "80%"],
                margin: '0 auto',
              }}
            >
              <Text sx={{
                fontFamily: 'label',
                fontSize: ["40px", "50px", "38px", "50", "67px", "68px"],
                lineHeight: ["125%", "125%", "125%", "110%", "110%", "110%"],
                '&>b': {
                  fontWeight: 'bold'
                }
              }}
                dangerouslySetInnerHTML={{ __html: item.node.label }}
              >
              </Text>
            </Box>
            <Box
              sx={{
                width: ["100%", "82%", "90%", "80%", "63%", "53%"],
                margin: '0 auto',
              }}
            >
              <Text variant="paragraphShopOverview">
                {item.node.content}
              </Text>
            </Box>
          </Box>
        ))}

        <Box
          sx={{
            position: 'relative',
            top: ["8vh", "10vh", "10vh", "14vh", "4vh", "4vh"],
            left: ["-15%", "-12%", "-12%", "-20%", "-15vw", "-9%"],
            width: ["175px", "235px", "208px", "266px", "295px", "334px"]
          }}
        >
          <StaticImage
            src={'../../images/curly-line.png'}
            alt="curly-line" />
        </Box>
      </GridItem>



      {/* // section 2  */}
      <GridItem
        sx={{
          gridColumn: ["1 / span 12", "2 / span 12", "2 / span 24", "9 / span 18", "2 / span 21", "4 / span 17"],
        }}
      >
        {data.allPurShopOverviewJson.edges.slice(1, 2).map(item => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: ["column", "column", "row", "column", "row", "row"],

              justifyContent: 'space-between',
            }}
            key={item.node.id}>
            <Box sx={{
              width: ["100%", "100%", "80em", "85%", "190%", "230%",]
            }}>
              <Text sx={{
                fontFamily: 'label',
                fontSize: ["32px", "42px", "28px", "40px", "40px", "43px"],
                pb: ["16px", "24px", "0", "24px", "0", "0"],
                pr: ["0", "0", "52px", "76px", "0", "124px"],
                lineHeight: '125%'
              }}>
                {item.node.label}
              </Text>
            </Box>
            <Box sx={{
              mt: ["16px", "24px", "0", "24px", "0", "0"],
              ml: ["0", "0", "0", "0", "140px", "100px"],
              // mr: ["0", "0", "0", "180px", "0", "0"]
            }}>
              <Text
                variant="paragraphShopOverview">
                {item.node.content}
              </Text>
            </Box>
          </Box>
        ))}
        {/* // custom line  */}
        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            m: ["64px 0 146px 0", "80px 0 160px 0", "85px 0 149px 0", "120px 0 224px 0", "193px 0 200px 0", "154px 0 235px 0"]
          }}
        >
          <StaticImage
            src={'../../images/line.png'}
            alt="line"
          />
        </Box>
      </GridItem>





      {/* // section 3  */}
      <GridItem sx={{
        gridColumn: ["1 / span 12", "2 / span 10", "2 / span 12", "1 / span 16", " 1 / span 12", "2 / span 9"],

        position: 'static',
        '@media screen and (min-width: 700px) and (max-width: 749px)': {
          position: 'absolute',
          bottom: '-25em',
          zIndex: '2',
          left: '0'
        }
      }}>
        {data.allPurShopOverviewJson.edges.slice(2, 3).map(item => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            key={item.node.id}>
            <Text
              sx={{
                fontFamily: 'label',
                fontWeight: 'bold',
                lineHeight: ["125%", "125%", "125%", "110%", "125%", "110%"],
                fontSize: ["40px", "42px", "38px", "51px", "56px", "55px"],
                pb: '16px'
              }}
              dangerouslySetInnerHTML={{ __html: item.node.label }}
            ></Text>
            <Text variant="paragraphShopOverview">
              {item.node.content}
            </Text>
          </Box>
        ))}
      </GridItem>
    </GridWrapper>
  )
}

export default MainContent


