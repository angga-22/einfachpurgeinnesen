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
      <Box>
        <StaticImage
          src={'../../images/leaves.png'}
          alt="leaves"
        />
        <Text
          sx={{
            fontFamily: 'label',
            fontSize: ["32x", "42px", "28px", "40px", "40px", "43px"],
            fontWeight: 'bold',
            lineHeight: ["40px", "52px", "35px", "50px", "50px", "53px"]
          }}
        >Alles für Ihren guten Geschmack. Jetzt auch online.</Text>
      </Box>

    </Section>
  )
}

export default MainContent
