import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'theme-ui'
import Section from 'components/Box'
import { StaticImage } from 'gatsby-plugin-image'
import BottomContent from './BottomContent'


const MainContent = () => {

  const data = useStaticQuery(graphql`
    query PurShopOverview {
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
      <Box sx={{
        padding: [
          "0 7.5vw",
          "0 9.4vw",
          "0 7.6vw",
          "0 7.6vw",
          "0 8.1vw",
          "0 5.6vw",
        ],
        position: 'absolute',
        top: ["7em", "10em", "6em", "11em"],
        right: ["3", "0", "4", "2"],
      }}>
        <StaticImage
          src={'../../images/abstract-img.png'}
          alt="art"
          width="36"
        />
      </Box>
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
          margin: [
            "87px 0 148px 0",
            "126px 0 188px 0",
            "92px 0 149px 0",
            "260px 0 340px 0",
            "169px 0 0 0",
            "160px 0 43px 0",
          ],
        }}
      >
        {/* // section 1  */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
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
                justifyContent: 'space-between',
                width: ["100%", "85%", "100%", "60%", "100%", "80%"],
                margin: '0 auto',
              }}
              key={item.node.id}>
              <Text sx={{
                fontFamily: 'label',
                fontSize: ["32px", "42px", "28px", "40px", "40px", "43px"],
                pb: ["16px", "24px", "0", "24px", "0", "0"],
                pr: ["0", "0", "52px", "76px", "0", "124px"],
                width: ["100%", "100%", "50%", "45%", "50%", "55%"],
                lineHeight: '125%'
              }}>
                {item.node.label}
              </Text>
              <Text
                sx={{
                  width: ["100%", "100%", "50%", "55%", "45%", "40%"],

                }}
                variant="paragraphShopOverview">
                {item.node.content}
              </Text>
            </Box>
          ))}
        </Box>
        {/* // custom line  */}
        <Box
          sx={{
            width: '100%',
            margin: [
              "64px 0 146px 0",
              "80px 0 160px 0",
              "85px 0 0 0",
              "120px 0 224px 0",
              "193px 0 200px 0",
              "154px 0 235px 0",
            ],
            textAlign: 'center'
          }}
        >
          <StaticImage
            src={'../../images/line.png'}
            alt="line"
          />
        </Box>
        {/* // section 3  */}
        <Box sx={{
          '@media screen and (min-width: 640px)': {
            position: 'absolute',
            bottom: '-38em',
            zIndex: '1'
          },
          '@media screen and (min-width: 834px)': {
            position: 'static'
          }
        }}>
          {data.allPurShopOverviewJson.edges.slice(2, 3).map(item => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: ["100%", "90%", "55%", "65%", "50%", "40%"],
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
        </Box>
      </Section>
      {/* // footer section */}
      <BottomContent />
    </div >
  )
}

export default MainContent


