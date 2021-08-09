/** @jsx jsx */
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Text } from 'theme-ui'

import Section from 'components/Box'

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
    <Section
      sx={{
        marginTop: ["40px", "32px", "16px", "65px", "64px", "155px"]

      }}
    >
      {/* // section wrapper */}
      <Box>
        {/* //hero section */}
        <Box>
          <Box
            sx={{
              margin: '0 auto',
              width: ["100%", "90%", "90%", "80%", "80%", "70%"]
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
                  mb: ["18px"]
                }}
              > <b>Tu etwas Gutes rein,</b> dann kommt etwas Gutes raus.</Text>
              <Text
                variant="parapraph"
                sx={{
                  fontWeight: 'normal',
                  lineHeight: '125%',
                  fontSize: ["18px", "22px", "18px", "20px", "18px", "22px"],
                  fontFamily: 'body',
                  paddingBottom: ["71px", "41px", "48px", "80px", "60px", "35px"]
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
              maxWidth: ["374px", "640px", "514px", "708px", "832px", "794px"],
              height: 'auto',
              margin: '0 auto'
            }}
          >
            <StaticImage
              src={'../../images/hero-img.png'}
              alt="hero-img"
            />
          </Box>

        </Box>

        {/* //article section */}
        <Box
          sx={{
            display: 'flex',
            paddingTop: ["48px", "71px", "63px", "48px", "80px", "54px"],
            flexDirection: ["column", "column", "row", "column", "column", "column"],
            width: ["100%", "100%", "90%", "80%", "80%", "60%"],
            m: ["0 auto"]
          }}
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
        </Box>
      </Box>
    </Section>
  )
}

export default TopContent
