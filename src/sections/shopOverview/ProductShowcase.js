import * as React from 'react'
import { Box, Text } from 'theme-ui'
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
          <Text variant="heading"
            sx={{
              pb: '16px',
              fontWeight: 700
            }}
            dangerouslySetInnerHTML={{ __html: data.label }}
          ></Text>
          <Text variant="paragraph">
            {data.content}
          </Text>
        </Box>
      </GridItem>
    </GridWrapper>
  )
}

export default ProductShowcase
