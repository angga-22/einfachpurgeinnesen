import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'theme-ui'
import Section from '../Box'
import { StaticImage } from 'gatsby-plugin-image'
const MainContent = () => {

  const data = useStaticQuery(graphql`
    query ShopOverview {
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
    <div>
      {/* //content wrapper */}
      <Section
        sx={{
          display: 'flex',
          flexDirection: "column",
          padding: [
            "0 7.5vw",
            "0 9.4vw",
            "0 7.6vw",
            "0 7.6vw",
            "0 8.1vw",
            "0 5.6vw",
          ],
        }}
      >
        {/* // section 1  */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          margin: [
            "87px 0 119px 0",
            "126px 0 169px 0",
            "92px 0 154px 0",
            "260px 0 163px 0",
            "169px 0 119px 0",
            "169px 0 108px  0"
          ]
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
                  width: ["100%", "100%", "100%", "100%", "80%", "80%"],
                  margin: '0 auto',
                  backgroundColor: 'red'
                }}
              >
                <Text sx={{
                  fontFamily: 'label',
                  fontSize: ["40px", "50px", "38px", "50", "67px", "68px"],
                  lineHeight: ["125%", "125%", "125%", "110%", "110%", "110%"],
                }}
                  dangerouslySetInnerHTML={{ __html: item.node.label }}
                >
                </Text>
              </Box>
              <Box
                sx={{
                  width: ["100%", "90%", "100%", "80%", "70%", "60%"],
                  margin: '0 auto'
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
              top: ["4vh", "10vh", "10vh", "10vh", "4vh", "4vh"],
              left: ["-15%", "-12%", "-12%", "-12%", "-10%", "-8%"],
              width: ["167px", "235px", "208px", "266px", "295px", "334px"]
            }}
          >
            <StaticImage
              src={'../../images/curly-line.png'}
              alt="curly-line" />
          </Box>
        </Box>



        {/* // section 2  */}
        <Box >
          {data.allPurShopOverviewJson.edges.slice(1, 2).map(item => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: ["column", "column", "row", "column", "row", "row"],
                width: ["100%", "90%", "100%", "60%", "80%", "80%"],
                margin: '0 auto'
              }}
              key={item.node.id}>
              <Text sx={{
                fontFamily: 'label',
                fontSize: ["32px", "42px", "42px", "28px", "40px", "43px"],
                lineHeight: '125%'
              }}>
                {item.node.label}
              </Text>
              <Text variant="paragraphShopOverview">
                {item.node.content}
              </Text>
            </Box>
          ))}
        </Box>
        {/* // section 3  */}
        <Box sx={{
          display: 'flex',
          flexDirection: "column",
          width: ["100%", "95%", "50%", "50%", "40%", "40%"]
        }}>
          {data.allPurShopOverviewJson.edges.slice(2, 3).map(item => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
              key={item.node.id}>
              <Text
                sx={{
                  fontFamily: 'label',
                  lineHeight: ["125%", "125%", "125%", "110%", "125%", "110%"],
                  fontSize: ["40px", "42px", "38px", "51px", "56px", "55px"]
                }}
                dangerouslySetInnerHTML={{ __html: item.node.label }}
              ></Text>
              <Text variant="paragraphShopOverview">
                {item.node.content}
              </Text>
            </Box>
          ))}
        </Box>
      </Section>
      {/* // footer section */}

    </div >
  )
}

export default MainContent


