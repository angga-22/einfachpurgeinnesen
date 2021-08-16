import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'theme-ui'
import Section from 'components/Box'
import { StaticImage } from 'gatsby-plugin-image'
import underline from '../../images/underline-inactive.svg'
import { Breakpoints } from '../../components/Breakpoints'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'
// import { Breakpoints } from '../../components/Breakpoints'


const MainContent = () => {


  const [bigLeaves, setBigLeaves] = React.useState(
    window.matchMedia("(min-width: 1440px)").matches
  );


  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setBigLeaves(window.matchMedia("(min-width: 1440px)").matches);
    });

  });


  const data = useStaticQuery(graphql`
    query LadenDataPage {
      allPurLadenJson {
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
      mt: ["74px", "74px", "50px", "110px", "166px", "119px"],
    }}>
      {/* // section 1 */}
      <GridItem sx={{
        gridColumn: ["1 / span 12", "1 / span 12", "3 / span 21", "3 / span 21"],
        pb: ["152px", "120px", "114px", "196px", "228px", "174px"],
        position: 'relative'
      }}>

        {data.allPurLadenJson.edges.slice(0, 1).map(item => (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Box
              sx={{
                maxWidth: ["100%", "100%", "569px", "588px", "916px", "1064px"],
                margin: '0 auto',
                mb: ["40px", "0", "40px", "48px", "64px", "150px"],
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  width: ["43px", "60px", "60px", "60px", "80px", "80px"],
                  position: 'absolute',
                  top: ["-1.5em", "-4", "-4", "-4", "-2.6em", "-2.7em"],
                  left: ["5", "6em", "6em", "5em", "7em", "10em"]
                }}
              >
                <StaticImage
                  src={'../../images/wave-line.png'}
                  alt="wave-line" />
              </Box>

              <Text sx={{
                fontFamily: 'label',
                fontSize: ["32px", "50px", "40px", "40px", "56px", "68px"],
                lineHeight: ["125%", "62px", "50px", "50px", "70px", "74px"],
                margin: '0 auto'
              }}>{item.node.label}</Text>
            </Box>
            <Box
              sx={{
                width: ["37px", "50px", "50px", "76px", "118px", "118px"],
                position: 'absolute',
                top: ["10em", "20em", "12em", "6", "7", "7"],
                right: ["-2", "-4", "-4", "-4", "-2", "5"]
              }}
            >
              <StaticImage
                src={'../../images/curly-line2.png'}
                alt="curly-line2" />
            </Box>
            <Text
              sx={{
                maxWidth: ["100%", "100%", "90%", "88%", "538px", "632px"],
                fontSize: ["16px", "22px", "18px", "20px", "20px", "20px"],
                margin: ["0", "0", "0", "0 auto"]
              }}
              variant="paragraph"
              dangerouslySetInnerHTML={{ __html: item.node.content }}
            ></Text>
          </Box>
        ))}
      </GridItem>

      {/* // section 2 */}
      <GridItem
        sx={{
          gridColumn: ["1 / span 12", "1 / span 12", "2 / span 23", "2 / span 23"],
          display: 'flex',
          flexDirection: ["column", "column", "row-reverse", "row-reverse", "row-reverse", "row-reverse"],
          justifyContent: 'space-between',
          // alignItems: 'center',
          '@media screen and (max-width: 500px)': {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
          margin: '0 auto',
          mb: ["48px", "64px", "48px", "64px", "80px", "64px"],
          width: ["100%", "100%", "100%", "100%", "100%", "80%"],
        }}
      >
        <Box
          sx={{
            maxWidth: ["103px", "118px", "108px", "165px", "160px", "239px"],
          }}
        >
          {bigLeaves

            ?
            <StaticImage
              src={'../../images/leaves-big.png'}
              alt="leaves"
            />
            :
            <StaticImage
              src={'../../images/leaves-star.png'}
              alt="leaves"
            />

          }

        </Box>
        <Box sx={{
          width: ["100%", "100%", "70%", "50%", "40%", "40%"],
        }}>
          <Text
            sx={{
              fontFamily: 'label',
              fontSize: ["32px", "42px", "28px", "40px", "40px", "43px"],
              fontWeight: 'bold',
              lineHeight: ["40px", "52px", "35px", "50px", "50px", "53px"]
            }}
          >Alles für Ihren guten Geschmack. Jetzt auch online.</Text>
        </Box>
      </GridItem>


      {/* // section 3 slider */}
      <GridItem
        sx={{
          gridColumn: ["1 / span 12", "1 / span 12", "2 / span 23", , "2 / span 23"],
          overflowX: 'auto',
          'WebkitOverflowScrolling': 'touch',
          'WebkitScrollbar': {
            display: 'none'
          }
        }}
      >
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: ["repeat(2, 1fr)"],
          gridGap: '2',
          width: ["100%", "100%", "100%", "650px", "916px", "956px"],
          margin: '0 auto',
          '@media screen and (max-width: 500px)': {
            gridTemplateColumns: "repeat(4, 1fr)",
            width: '966px',
          },
          [Breakpoints.phoneLandscape]: {
            gridTemplateColumns: ["repeat(3, 1fr)"],
          },
          [Breakpoints.tabletPortrait]: {
            gridTemplateColumns: ["repeat(3, 1fr)"],
          },

        }}>
          {data.allPurLadenJson.edges.slice(1, 9).map(item => (
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              background: `url(${underline})`,
              backgroundPosition: 'top',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              margin: '10px',
              pt: '20px',
              [Breakpoints.tabletPortrait]: {
                maxWidth: '200px'
              },
              [Breakpoints.tabletLandscape]: {
                maxWidth: '254px'
              }
            }}>
              <Text sx={{
                fontFamily: 'label',
                fontWeight: '700',
                fontSize: ["22px", "28px", "22px", "28px", "26px", "28px"],
                color: '#DA3C6E'
              }}>{item.node.label}</Text>
              <Text
                sx={{
                  fontSize: ["16px", "20px", "16px", "18px", "18px", "18px"],
                  fontWeight: 'normal'
                }}
                variant="paragraph"
              >{item.node.content}</Text>
            </Box>
          ))}
        </Box>
      </GridItem>


    </GridWrapper>
  )
}

export default MainContent
