/** @jsx jsx */
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Text } from 'theme-ui'

import Section from 'components/Box'
import { TextContainer } from './components'
import { GridWrapper } from '@thepuzzlers/pieces'

const TopContent = () => {
  const data = useStaticQuery(graphql`
   query PurArticle {
    allPurArticleJson {
      edges {
        node {
          article
          id
        }
      }
    }
  }
  `);

  return (
    <>
      <Section
        sx={{
          marginTop: ["40px", "40px", "32px", "16px", "65px", "64px", "155px"]

        }}
      >
        {/* //hero section */}
        <Box>
          <Box
            sx={{
              margin: '0 auto',
              maxWidth: ["319px", "517px", "658px", "659px", "706px", "956px"]
            }}
          >
            <Box
              sx={{
                width: ["24px", "24px", "24px", "24px", "24px", "60px"],
              }}
            >
              <StaticImage
                src={'../../images/quote-left.png'}
                alt="quote-left" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: ["column"]
              }}
            >
              <Text
                variant="heading"
                sx={{
                  fontSize: ["40px", "50px", "50px", "50px", "56px", "68px"],
                  fontWeight: 'normal',
                  lineHeight: "110%",
                  fontFamily: 'label',
                  margin: '0 auto',
                  mb: ["18px"],
                  pl: ["0", "25px", "30px", "35px", "30px", "50px"],
                }}
              > <Text sx={{ fontWeight: 'bold' }}>Tu etwas Gutes rein,</Text> dann kommt etwas Gutes raus.</Text>
              <Text
                variant="parapraph"
                sx={{
                  fontWeight: 'normal',
                  lineHeight: '125%',
                  fontSize: ["18px", "22px", "18px", "20px", "18px", "22px"],
                  fontFamily: 'body',
                  pl: ["0", "25px", "30px", "35px", "30px", "50px"],
                  pb: ["71px", "41px", "48px", "80px", "60px", "35px"]
                }}
              >Worte unseres Urgroßvaters</Text>
            </Box>
            <Box
              sx={{
                width: ["24px", "24px", "24px", "24px", "24px", "78px"],
                float: 'right',
                marginTop: '-100px'
              }}
            >
              <StaticImage
                src={'../../images/quote-right.png'}
                alt="quote-right" />
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: ["100%", "100%", "514px", "708px", "832px", "794px"],
              position: ["absolute", "absolute", "static"],
              left: '0',
              right: '0',
              margin: '0 auto'
            }}
          >
            <StaticImage
              src={'../../images/hero-img.png'}
              alt="hero-img"
            />
          </Box>

        </Box>
      </Section>

      {/* //article section */}
      <GridWrapper>
        <TextContainer
          sx={{ pt: ["100%", "100%", "63px", "48px", "80px", "54px"] }}
        >
          {data.allPurArticleJson.edges.slice(0, 1).map(item => {
            return (
              <div key={item.node.id}
                sx={{
                  pr: ["0", "0", "37px", "0", "0", "0"],
                  pb: ["20px", "20px", "0", "20px", "20px", "20px"]
                }}
              >
                <Text
                  variant="mainArticle"
                >{item.node.article}</Text>
              </div>
            )
          })}
          {data.allPurArticleJson.edges.slice(1, 2).map(item => {
            return (
              <div key={item.node.id}>
                <Text
                  variant="mainArticle"
                >{item.node.article}</Text>
              </div>
            )
          })}
        </TextContainer>
      </GridWrapper>
    </>
  )
}

export default TopContent
