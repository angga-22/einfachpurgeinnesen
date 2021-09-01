import * as React from 'react'
import { Box, Heading } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'

const CopyWriter = () => {
  const [bigLeaves, setBigLeaves] = React.useState(
    window.matchMedia("(min-width: 750px)").matches
  );

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setBigLeaves(window.matchMedia("(min-width: 750px)").matches);
    });

  });

  return (
    <GridWrapper>
      <GridItem
        sx={{
          gridColumn: ["1 / span 12", "1 / span 12", "2 / span 23", "2 / span 22", "2 / span 22", "4 / span 18"],
          display: 'flex',
          flexDirection: ["column", "column", "row-reverse", "row-reverse", "row-reverse", "row-reverse"],
          justifyContent: 'space-between',
          alignItems: 'center',
          '@media screen and (max-width: 700px)': {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
          margin: '0 auto',
          mb: ["48px", "64px", "48px", "64px", "80px", "64px"],
        }}
      >
        <Box
          sx={{
            maxWidth: ["103px", "118px", "108px", "165px", "160px", "239px"],
          }}
        >
          {bigLeaves

            ?
            <StaticImage
              src={'../../images/leaves-big.png'}
              alt="leaves"
            />
            :
            <StaticImage
              src={'../../images/leaves-star.png'}
              width="100"
              alt="leaves"
            />

          }
        </Box>
        <Box sx={{
          width: ["100%", "100%", "70%", "60%", "40%", "40%"],
        }}>
          <Heading variant="h4" sx={{
            fontWeight: 'bold'
          }}>
            Alles für Ihren guten Geschmack. Jetzt auch online.
          </Heading>
        </Box>
      </GridItem>

    </GridWrapper>
  )
}

export default CopyWriter
