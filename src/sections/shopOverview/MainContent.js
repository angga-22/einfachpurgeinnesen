import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'theme-ui'
import Section from 'components/Box'
import { StaticImage } from 'gatsby-plugin-image'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'

const MainContent = () => {

  const data = useStaticQuery(graphql`
    query getPurShopOverviews{
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
    <GridWrapper>
      {/* // section 1  */}
      <GridItem sx={{
        gridColumn: ["1 / span 12", "1 / span 12", "3 / span 22", "2 / span 29", "3 / span 23", "3 / span 20"],
        position: 'relative',
        mb: ["119px", "169px", "154px", "163px", "119px", "108px"]
      }}>
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
                width: ["100%", "85%", "90%", "80%", "70%", "60%"],
                margin: '0 auto'
              }}
            >
              <Text variant="paragraphShopOverview">
                {item.node.content}
              </Text>
            </Box>
          </Box>
        ))}

        {/* <Box
            sx={{
              position: 'relative',
              top: ["4vh", "10vh", "10vh", "10vh", "4vh", "4vh"],
              left: ["-15%", "-12%", "-12%", "-12%", "-10%", "-8%"],
              width: ["167px", "235px", "208px", "266px", "295px", "334px"]
            }}
          >
            <StaticImage
              src={'../../images/curly-line.png'}
              alt="curly-line" />
          </Box> */}
      </GridItem>



      {/* // section 2  */}
      <GridItem
        sx={{
          gridColumn: ["1 / span 12", "1 / span 12", "3 / span 22", "9 / span 22", "2 / span 23", "4 / span 20"],

        }}
      >
        {data.allPurShopOverviewJson.edges.slice(1, 2).map(item => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: ["column", "column", "row", "column", "row", "row"],
              backgroundColor: 'blue',
              justifyContent: 'space-between',
            }}
            key={item.node.id}>
            <Text sx={{
              fontFamily: 'label',
              fontSize: ["32px", "42px", "28px", "40px", "40px", "43px"],
              pb: ["16px", "24px", "0", "24px", "0", "0"],
              pr: ["0", "0", "52px", "76px", "0", "124px"],
              lineHeight: '125%'
            }}>
              {item.node.label}
            </Text>
            <Text
              sx={{

              }}
              variant="paragraphShopOverview">
              {item.node.content}
            </Text>
          </Box>
        ))}
        {/* // custom line  */}
        <Box
          sx={{
            width: '100%',
            textAlign: 'center'
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
        backgroundColor: 'red'
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


