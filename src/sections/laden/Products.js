import * as React from 'react'
import { Box, Heading, Paragraph } from 'theme-ui'
import underline from '../../images/underline-inactive.svg'
import { Breakpoints } from '../../components/Breakpoints'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'


const ListCafe = ({ data }) => {

  return (
    <GridWrapper>
      <GridItem
        sx={{
          gridColumn: ["1 / span 12", "1 / span 12", "2 / span 22", "2 / span 22", "2 / span 23", "4 / span 20"],
          overflowX: 'auto',
          'WebkitOverflowScrolling': 'touch',
          'WebkitScrollbar': {
            display: 'none'
          }
        }}
      >
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: ["repeat(2, 1fr)"],
          gridGap: '2',
          margin: '0 auto',
          '@media screen and (max-width: 500px)': {
            gridTemplateColumns: "repeat(5, 1fr)",
            width: '1036px',
          },
          [Breakpoints.phoneLandscape]: {
            gridTemplateColumns: ["repeat(3, 1fr)"],
          },
          [Breakpoints.tabletPortrait]: {
            width: '100%',
            gridTemplateColumns: ["repeat(3, 1fr)"],
          },

        }}>
          {data.products.map(item => (
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              background: `url(${underline})`,
              backgroundPosition: 'top',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              margin: '10px',
              pt: '20px',
              [Breakpoints.tabletPortrait]: {
                maxWidth: '200px'
              },
              [Breakpoints.tabletLandscape]: {
                maxWidth: '254px'
              }
            }}>
              <Heading
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: '#DA3C6E'
                }}>
                {item.label}
              </Heading>
              <Paragraph
                variant="paragraph"
                sx={{
                  fontSize: ["16px", "20px", "16px", "18px", "18px", "18px"],
                }}
              >
                {item.content}
              </Paragraph>
            </Box>
          ))}
        </Box>
      </GridItem>
    </GridWrapper >
  )
}

export default ListCafe