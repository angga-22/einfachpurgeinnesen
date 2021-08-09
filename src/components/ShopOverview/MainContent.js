import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'theme-ui'
import Section from '../Box'

const MainContent = () => {


  const data = useStaticQuery(graphql`
    query ShopOverview {
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

  console.log(data.allPurShopOverviewJson.edges)
  return (
    <div>
      {/* //content wrapper */}
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
        }}
      >
        {/* // section 1  */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          {data.allPurShopOverviewJson.edges.slice(0, 1).map(item => (
            <Box>
              <Text sx={{
                fontFamily: 'label',
                fontSize: ["40px", "50px", "38px", "50", "67px", "68px"]
              }}
                dangerouslySetInnerHTML={{ __html: item.node.label }}
              >
              </Text>
              <Text variant="paragraphShopOverview">
                {item.node.content}
              </Text>
            </Box>
          ))}

        </Box>

        {/* // section 2  */}
        <Box sx={{
          display: 'flex',
          flexDirection: ["column", "column", "row", "column", "row", "row"]
        }}>

        </Box>

        {/* // section 3  */}
        <Box sx={{
          display: 'flex',
          flexDirection: "column",
          width: ["100%", "95%", "50%", "50%", "40%", "40%"]
        }}>

        </Box>
      </Section>
    </div>
  )
}

export default MainContent


