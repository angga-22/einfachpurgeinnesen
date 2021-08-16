import * as React from 'react'
import { graphql } from 'gatsby'
import { Box, Text } from 'theme-ui'
import underline from '../../images/underline-inactive.svg'
import { Breakpoints } from '../../components/Breakpoints'

const ListLocation = ({ label, content }) => {



  return (
    <>
      <Box
        sx={{
          overflowX: 'auto',
          'WebkitOverflowScrolling': 'touch',
          'WebkitScrollbar': {
            display: 'none'
          }
        }}
      >
        <Box sx={{
          backgroundColor: 'blue',
          display: 'grid',
          gridTemplateColumns: ["repeat(2, 1fr)"],
          gridGap: '2',
          width: ["100%", "100%", "100%", "100%", "90%", "70%"],
          margin: '0 auto',
          '@media screen and (max-width: 500px)': {
            gridTemplateColumns: "repeat(4, 1fr)",
            width: '966px',
          },
          [Breakpoints.phoneLandscape]: {
            gridTemplateColumns: ["repeat(3, 1fr)"],
          },

        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            background: `url(${underline})`,
            backgroundPosition: 'top',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            margin: '10px',
            pt: '20px',
            [Breakpoints.desktop]: {
              maxWidth: '254px'
            }
          }}>
            <Text sx={{
              fontFamily: 'label',
              fontWeight: '700',
              fontSize: ["22px", "28px", "22px", "28px", "26px", "28px"],
              color: '#DA3C6E'
            }}>{label}</Text>
            <Text
              sx={{
                fontSize: ["16px", "20px", "16px", "18px", "18px", "18px"],
                fontWeight: 'normal'
              }}
              variant="paragraph"
            >{content}</Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ListLocation