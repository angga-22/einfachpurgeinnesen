import * as React from 'react'
import { Box, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'

const Header = ({ label, content }) => {

  return (
    <GridWrapper sx={{
      mt: ["54px", "74px", "50px", "110px", "166px", "119px"],
    }}>
      <GridItem sx={{
        gridColumn: ["1 / span 12", "1 / span 12", "3 / span 21", "3 / span 20", "2 / span 21", "3 / span 21"],
        pb: ["152px", "120px", "114px", "196px", "228px", "174px"],
        position: 'relative'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Box
            sx={{
              margin: '0 auto',
              mb: ["40px", "0", "40px", "48px", "64px", "150px"],
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

            <Text variant="heading" sx={{
              fontSize: ["32px", "50px", "40px", "40px", "56px", "68px"],
              margin: '0 auto'
            }}>
              {label}
            </Text>
          </Box>
          <Box
            sx={{
              width: ["37px", "50px", "70px", "76px", "118px", "118px"],
              position: 'absolute',
              top: ["10em", "20em", "12em", "10em", "7", "7"],
              right: ["-2", "-4", "-4", "-4", "-2", "5"],
            }}
          >
            <StaticImage
              src={'../../images/curly-line2.png'}
              alt="curly-line2" />
          </Box>
          <Text
            sx={{
              p: ["0", "0", "0 2em 0 0", "0 2em  0 3em", "0 8em 0 11em", "0 14em 0 11.5em"],
              margin: ["0", "0", "0", "0 auto"]
            }}
            variant="paragraph"
            dangerouslySetInnerHTML={{ __html: content }}
          >
          </Text>
        </Box>
      </GridItem>
    </GridWrapper>
  )
}

export default Header
