import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'theme-ui'
import Section from '../Box'


const BottomContent = () => {

  const data = useStaticQuery(graphql`
   query PurArticles{
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
    <Section>
      {/* //content section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: ["column", "column", "row", "column", "column", "column"],
          width: ["100%", "100%", "90%", "80%", "80%", "60%"],
          pb: ["120px", "190px", "160px", "117px", "200px", "100px"],
          m: ["0 auto"]
        }}
      >
        {data.allPurArticleJson.edges.slice(2, 3).map(item => {
          return (
            <>
              <Text key={item.node.id}
                variant="mainArticle"
                sx={{
                  pr: ["0", "0", "37px", "0", "0", "0"],
                  pb: ["20px", "20px", "0", "20px", "20px", "20px"]
                }}
              >{item.node.article}</Text>
            </>
          )
        })}
        {data.allPurArticleJson.edges.slice(3, 4).map(item => {
          return (
            <>
              <Text key={item.node.id}
                variant="mainArticle"
              >{item.node.article}</Text>
            </>
          )
        })}
      </Box>




      {/* // quotes section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          pb: ["126px", "505px", "102px", "179px", "83px", "480px"],
          flexDirection: [
            "column",
            "column",
            "row-reverse",
            "row-reverse",
            "row-reverse",
            "row-reverse"
          ],
          width: ["100%", "100%", "95%", "90%", "80%", "70%"],
          m: '0 auto'
        }}
      >
        <Box
          sx={{
            width: [""]
          }}
        >
          <StaticImage
            src={'../../images/quote.png'}
            alt="quote" />
        </Box>
        <Box
          sx={{
            width: ["100%", "100%", "80%", "80%", "70%", "65%"]
          }}
        >
          <Text
            variant="heading"
            sx={{
              fontSize: ["32px", "42px", "32px", "40px", "40px", "42px"],
              fontFamily: 'label',
            }}
          >
            “Gemeinsam stark. Lokale Produkte von kleinen Unternehmen.”
          </Text>
        </Box>
      </Box>

    </Section>
  )
}

export default BottomContent