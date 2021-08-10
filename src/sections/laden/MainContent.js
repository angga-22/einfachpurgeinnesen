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
    <Section>

      <Box sx={{

      }}>
        {data.allPurLadenJson.edges.slice(0, 1).map(item => (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Text sx={{
              fontFamily: 'label',
              fontSize: ["32px", "50px", "40px", "40px", "56px", "68px"],
              lineHeight: ["40px", "62px", "50px", "50px", "70px", "74px"]
            }}>{item.node.label}</Text>
            <Text variant="paragraph"
              dangerouslySetInnerHTML={{ __html: item.node.content }}
            ></Text>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: ["column", "column", "row-reverse", "row-reverse"]
        }}
      >
        <Box
          sx={{
            width: [""]
          }}
        >
          <StaticImage
            src={'../../images/leaves.png'}
            alt="leaves"
          />
        </Box>
        <Text
          sx={{
            fontFamily: 'label',
            fontSize: ["32x", "42px", "28px", "40px", "40px", "43px"],
            fontWeight: 'bold',
            lineHeight: ["40px", "52px", "35px", "50px", "50px", "53px"]
          }}
        >Alles für Ihren guten Geschmack. Jetzt auch online.</Text>
      </Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: ["repeat(3, 1fr)"],
        gridGap: '2'
      }}>
        {data.allPurLadenJson.edges.slice(1, 10).map(item => (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Box
              sx={{
                width: '100%',
                backgroundColor: 'red'
              }}
            >
              <StaticImage
                src={'../images/line.png'}
                alt="line"
              />
            </Box>
            <Text sx={{
              fontFamily: 'label',
              fontWeight: '700',
              fontSize: ["28px"],
              color: '#DA3C6E'
            }}>{item.node.label}</Text>
            <Text
              variant="paragraph"
            >{item.node.content}</Text>
          </Box>
        ))}
      </Box>
    </Section>
  )
}

export default MainContent
