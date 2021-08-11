import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'theme-ui'
import Section from 'components/Box'
import { StaticImage } from 'gatsby-plugin-image'
const MainContent = () => {

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
        mt: ["74px", "74px", "50px", "110px", "166px", "119px"]
      }}

    >
      <Box sx={{
        pb: ["152px", "120px", "114px", "196px", "228px", "174px"]
      }}>
        {data.allPurLadenJson.edges.slice(0, 1).map(item => (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Text sx={{
              fontFamily: 'label',
              fontSize: ["32px", "50px", "40px", "40px", "56px", "68px"],
              lineHeight: ["40px", "62px", "50px", "50px", "70px", "74px"],
              pb: ["40px", "0", "40px", "48px", "64px", "150px"],
              width: ["100%", "100%", "90%", "90%", "95%", "90%"],
              margin: '0 auto'
            }}>{item.node.label}</Text>

            <Text
              sx={{
                width: ["100%", "100%", "90%", "70%", "65%", "50%"],
                fontSize: ["16px", "22px", "18px", "20px", "20px", "20px"],
                margin: '0 auto'
              }}
              variant="paragraph"
              dangerouslySetInnerHTML={{ __html: item.node.content }}
            ></Text>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: ["column", "column", "row-reverse", "row-reverse"],
          justifyContent: 'space-between',
          alignItems: 'center',
          '@media screen and (max-width: 640px)': {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
          margin: '0 auto',
          width: ["100%", "100%", "100%", "100%", "100%", "80%"],
          pb: ["48px", "64px", "48px", "64px", "80px"]
        }}
      >
        <Box
          sx={{
            maxWidth: ["103px", "118px", "108px", "165px", "160px", "239px"],
          }}
        >
          <StaticImage
            src={'../../images/leaves-star.png'}
            alt="leaves"
          />
        </Box>
        <Box sx={{
          width: ["100%", "80%", "70%", "50%", "50%", "40%"],
        }}>
          <Text
            sx={{
              fontFamily: 'label',
              fontSize: ["32x", "42px", "28px", "40px", "40px", "43px"],
              fontWeight: 'bold',
              lineHeight: ["40px", "52px", "35px", "50px", "50px", "53px"]
            }}
          >Alles für Ihren guten Geschmack. Jetzt auch online.</Text>
        </Box>
      </Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: ["repeat(2, 1fr)"],
        gridGap: '2',
        width: ["100%", "100%", "100%", "100%", "90%", "80%"],
        margin: '0 auto',
        '@media screen and (max-width: 640px)': {
          gridTemplateRows: "repeat(2, 1fr)"
        },
        '@media screen and (min-width: 812px)': {
          gridTemplateColumns: ["repeat(3, 1fr)"],
        },
      }}>
        {data.allPurLadenJson.edges.slice(1, 9).map(item => (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            pb: ["40px"],
          }}>

            <Text sx={{
              fontFamily: 'label',
              fontWeight: '700',
              fontSize: ["22px", "28px", "22px", "28px", "26px", "28px"],
              color: '#DA3C6E'
            }}>{item.node.label}</Text>
            <Text
              sx={{
                fontSize: ["16px", "20px", "16px", "18px", "18px", "18px"]
              }}
              variant="paragraph"
            >{item.node.content}</Text>
          </Box>
        ))}
      </Box>
    </Section>
  )
}

export default MainContent
