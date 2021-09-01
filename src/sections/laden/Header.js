import * as React from 'react'
import { Box, Heading, Paragraph } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'

const Header = ({ label, content }) => {

  return (
    <GridWrapper sx={{
      mt: ["54px", "74px", "50px", "110px", "166px", "119px"],
    }}>

      <GridItem sx={{
        gridColumn: ["1 / span 12", "1 / span 12", "3 / span 21", "3 / span 21", "2 / span 22", "3 / span 21"],
        position: 'relative'
      }}>
        <Box
          sx={{
            margin: '0 auto',
            mb: ["40px", "64px", "40px", "48px", "64px", "150px"],
            position: 'relative'
          }}
        >
          <Box
            sx={{
              width: ["43px", "60px", "60px", "60px", "80px", "80px"],
              position: 'absolute',
              top: ["-1.5em", "-4", "-4", "-4", "-2.6em", "-2.7em"],
              left: ["5", "6em", "6em", "5em", "7em", "10em"]
            }}
          >
            <StaticImage
              src={'../../images/wave-line.png'}
              alt="wave-line" />
          </Box>
          <Heading variant="h3" sx={{
            margin: '0 auto',
          }}>
            {label}
          </Heading>
          <Box
            sx={{
              width: ["37px", "50px", "70px", "76px", "118px", "118px"],
              position: 'absolute',
              top: ["15em", "20em", "9em", "10em", "13em", "7"],
              right: ["-2", "-1", "-4", "-4", "2", "5"],
            }}
          >
            <StaticImage
              src={'../../images/curly-line2.png'}
              alt="curly-line2" />
          </Box>
        </Box>
      </GridItem>


      <GridItem sx={{
        gridColumn: ["1 / span 12", "1 / span 11", "3 / span 19", "5 /  22", "7 /  21", "7 /  19"],
        pb: ["152px", "120px", "114px", "196px", "228px", "174px"],
      }}>
        <Paragraph
          variant="paragraph"
          dangerouslySetInnerHTML={{ __html: content }}>
        </Paragraph>
      </GridItem>

    </GridWrapper>
  )
}

export default Header
