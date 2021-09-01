import * as React from 'react'
import { Box, Heading, Paragraph } from 'theme-ui'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'


const ProductShowcase = ({ data }) => {
  return (
    <GridWrapper>

      <GridItem sx={{
        gridColumn: ["1 / span 12", "2 / span 10", "2 / span 12", "1 / span 16", " 1 / span 12", "2 / span 9"],
        position: 'static',
        '@media screen and (min-width: 700px) and (max-width: 749px)': {
          position: 'absolute',
          bottom: '-25em',
          zIndex: '2',
          left: '0'
        }
      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
          key={data.id}
        >
          <Heading variant="h2"
            sx={{
              pb: '16px',
              fontWeight: 700
            }}
            dangerouslySetInnerHTML={{ __html: data.label }}
          ></Heading>
          <Paragraph variant="paragraph">
            {data.content}
          </Paragraph>
        </Box>
      </GridItem>
    </GridWrapper>
  )
}

export default ProductShowcase
