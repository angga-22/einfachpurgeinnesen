import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'theme-ui'
import Section from 'components/Box'
import { StaticImage } from 'gatsby-plugin-image'
import underline from '../../images/underline-inactive.svg'
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
    <Section
      sx={{
        mt: ["74px", "74px", "50px", "110px", "166px", "119px"],
        padding: [
          "0 7.5vw",
          "0 9.4vw",
          "0 92px",
          "0 93px",
          "0 139px",
          "0 188px",
        ],
      }}>

      <Box sx={{
        pb: ["152px", "120px", "114px", "196px", "228px", "174px"],
        position: 'relative'
      }}>
        <Box
          sx={{
            width: ["43px", "60px", "60px", "60px", "80px", "80px"],
            position: 'absolute',
            top: ["-3", "-4", "-4", "-4", "-5", "-4"],
            left: ["66px", '116px', '116px', '116px', '146px', '275px']
          }}
        >
          <StaticImage
            src={'../../images/wave-line.png'}
            alt="wave-line" />
        </Box>
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
              }}
            >

              <Text sx={{
                fontFamily: 'label',
                fontSize: ["32px", "50px", "40px", "40px", "56px", "68px"],
                lineHeight: ["125%", "62px", "50px", "50px", "70px", "74px"],
                margin: '0 auto'
              }}>{item.node.label}</Text>
            </Box>
            <Text
              sx={{
                maxWidth: ["100%", "100%", "569px", "468px", "538px", "632px"],
                fontSize: ["16px", "22px", "18px", "20px", "20px", "20px"],
                margin: '0 auto',
              }}
              variant="paragraph"
              dangerouslySetInnerHTML={{ __html: item.node.content }}
            ></Text>
            <Box
              sx={{
                width: ["37px", "50px", "50px", "76px", "118px", "118px"],
                position: 'absolute',
                top: ["6", "7", "7", "6", "7"],
                right: ["-2", "-4", "-4", "-4", "-2", "5"]
              }}
            >
              <StaticImage
                src={'../../images/curly-line2.png'}
                alt="curly-line2" />
            </Box>
          </Box>
        ))}

      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: ["column", "column", "row-reverse", "row-reverse", "row-reverse", "row-reverse"],
          justifyContent: 'space-between',
          // alignItems: 'center',
          '@media screen and (max-width: 640px)': {
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
      </Box>
      <Box
        sx={{
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
          width: ["100%", "100%", "100%", "100%", "90%", "70%"],
          margin: '0 auto',
          '@media screen and (max-width: 640px)': {
            gridTemplateColumns: "repeat(4, 1fr)",
            width: '966px',
          },
          '@media screen and (min-width: 812px)': {
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
              '@media screen and (min-width: 1440px)': {
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
      </Box>
    </Section>
  )
}

export default MainContent
