/** @jsx jsx */
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Text } from 'theme-ui'
import { GridWrapper } from '@thepuzzlers/pieces'

import Section from 'components/Box'
import { TextContainer } from './components'

const BottomContent = () => {


  const [coupleTwo, setCoupletwo] = React.useState(
    window.matchMedia("(min-width: 832px)").matches
  );


  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setCoupletwo(window.matchMedia("(min-width: 832px)").matches);
    });

  });


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
    <>
      <GridWrapper>
        {/* //content section */}
        <TextContainer
          sx={{ pb: ["120px", "190px", "160px", "117px", "200px", "100px"] }}
        >
          {data.allPurArticleJson.edges.slice(2, 3).map(item => {
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
          {data.allPurArticleJson.edges.slice(3, 4).map(item => {
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
      <Section>
        {/* // quotes section */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: [
              "column",
              "column",
              "row-reverse",
              "row-reverse",
              "row-reverse",
              "row-reverse"
            ],
            width: ["100%", "80%", "90%", "80%", "95%", "90%"],
            position: 'relative',
            margin: [
              "0 auto 126px auto",
              "281px auto 400px auto",
              "50px auto 102px auto",
              "100px auto 100px auto",
              "0 auto 80px auto",
              "-5em auto 485px auto"
            ]
          }}
        >
          <Box
            sx={{
              position: ['static', "absolute", "relative"],
              right: ["0", "-5em", "-2em", "-2em"],
              top: ["-15em", "-20em", "0", "-10em", "-1em"],
              maxWidth: ["250px", "350px", "350px"],
            }}
          >
            {coupleTwo ?
              <StaticImage
                src={'../../images/couple-two.png'}
                alt="quote" />
              :
              <StaticImage
                src={'../../images/quote.png'}
                alt="quote" />

            }

          </Box>
          <Box
            sx={{
              maxWidth: ["300px", "100%", "99%", "100%", "100%", "65%"],
              pr: ["0", "0", "0", "0", "20em", "20em"]
            }}
          >
            <Text
              variant="heading"
              sx={{
                fontSize: ["32px", "42px", "32px", "40px", "40px", "42px"],
                fontFamily: 'label',
                lineHeight: '125%'
              }}
            >
              “Gemeinsam stark. Lokale Produkte von kleinen Unternehmen.”
            </Text>
          </Box>
        </Box>
      </Section >
    </>
  )
}

export default BottomContent
