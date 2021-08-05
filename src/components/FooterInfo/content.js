import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'theme-ui'
const Content = () => {
  const data = useStaticQuery(graphql`
    query FooterInfo {
      allPurFooterJson {
        edges {
          node {
            id
            label
            content
          }
        }
      }
    }
  `);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: ["column", "column", "row", "column-reverse", "column"],
        alignItems: [null, null, 'flex-end'],
        margin: ["0 auto"],
        width: ["80%", "70%", "100%", "100%", "100%"],
        marginTop: ["0", "0", "40px", "62px"]
      }}
    >
      {/* //label */}
      <Box
        sx={{
          paddingBottom: ["24px", "40px", "0"],
          paddingRight: ["0", "0", "5vw"],
          textAlign: ["center", "center", "left"],
        }}
      >
        <Text
          variant="subHeading"
          sx={{
            fontSize: ["16px", "20px", "16px", "18px"]
          }}
        >Restaurant </Text>
        {data.allPurFooterJson.edges.slice(0, 2).map(item => {
          return (
            <Box key={item.node.id}>
              <Text
                variant="paragraph"
                sx={{
                  fontSize: ["16px", "20px", "16px", "18px"]
                }}
              >{item.node.label + " " + item.node.content}</Text>
            </Box>
          )
        })}
      </Box>
      {/* //label */}
      <Box
        sx={{
          padding: ["0 0 24px 0", "0 0 40px 0", "0 5vw 0 0"],
          textAlign: ["center", "center", "left"],
          marginBottom: ["0", "0", "0", "77px"],
          margin: ["0", "0", "0", "0 0 77px 0", "32px 0"],
          width: ["100%", "100%", "50%", "100%"]
        }}
      >
        <Text
          variant="subHeading"
          sx={{
            fontSize: ["16px", "20px", "16px", "18px"]
          }}
        >Ladengeschäft </Text>
        {data.allPurFooterJson.edges.slice(2, 3).map(item => {
          return (
            <Box key={item.node.id}>
              <Text
                variant="paragraph"
                sx={{
                  fontSize: ["16px", "20px", "16px", "18px"]
                }}
              >{item.node.label + " " + item.node.content}</Text>
            </Box>
          )
        })}
      </Box>
      {/* //label */}
      <Box
        sx={{
          textAlign: ["center", "center", "left"],
          position: ["static", "static", "static", "absolute", "static"],
          bottom: '81px',
          left: "7.6vw",
          width: ["100%", "100%", "50%", "25%", "100%"]
        }}
      >
        <Text
          variant="subHeading"
          sx={{
            fontSize: ["16px", "20px", "16px", "18px"]
          }}
        >Kontakt & Anfahrt </Text>
        {data.allPurFooterJson.edges.slice(3, 5).map(item => {
          return (
            <Box key={item.node.id}>
              <Text
                variant="paragraph"
                sx={{
                  fontSize: ["16px", "20px", "16px", "18px"]
                }}
              >{item.node.label + " " + item.node.content}</Text>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Content
