/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { Button, Grid } from '@theme-ui/components'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'

const Footer = () => {

  return (
    <GridWrapper
      sx={{
        '@media screen and (max-width: 500px)': {
          backgroundColor: 'secondary',
          borderTopLeftRadius: ["1em"],
          borderTopRightRadius: ["1em"],
          borderBottomLeftRadius: [null, "1em", "0", "1em", "1em", "1em"],
          borderBottomRightRadius: [null, "1em", "0", "1em", "1em", "1em"],
        },
        '@media screen and (min-width: 500px) and (max-width: 699px)': {
          backgroundColor: 'none',
          borderTopLeftRadius: "none",
          borderTopRightRadius: "none",
          borderBottomLeftRadius: "none",
          borderBottomRightRadius: "none",
        },
        mb: ["0", "30px", "0", "0"],
        '@media screen and (min-width: 700px) and (max-width: 749px)': {
          backgroundColor: 'secondary',
          borderTopLeftRadius: ["1em"],
          borderTopRightRadius: ["1em"],
          borderBottomLeftRadius: [null, "1em", "0", "1em", "1em", "1em"],
          borderBottomRightRadius: [null, "1em", "0", "1em", "1em", "1em"],
        }
      }}
    >
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "1 / span 12",
            "1 / span 24",
            "1 / span 24",
            "1 / span 24",
            "1 / span 24",
          ],
          '@media screen and (max-width: 500px)': {
            backgroundColor: 'none',
            borderRadius: ["0"],
            borderTopLeftRadius: ["1em"],
            borderTopRightRadius: ["1em"],
            borderBottomLeftRadius: [null, "1em", "0", "1em", "1em", "1em"],
            borderBottomRightRadius: [null, "1em", "0", "1em", "1em", "1em"],
          },
          display: 'flex',
          alignItems: 'center',
          height: ["auto", "auto", "345px", "392px", "392px", "392px"],
          backgroundColor: 'secondary',
          borderTopLeftRadius: ["1em"],
          borderTopRightRadius: ["1em"],
          borderBottomLeftRadius: [null, "1em", "0", "1em", "1em", "1em"],
          borderBottomRightRadius: [null, "1em", "0", "1em", "1em", "1em"],
        }}
      >
        <GridItem
          sx={{
            display: 'flex',
            justifyContent: "space-between",
            alignItems: 'center',
            flexDirection: ["column-reverse", "column-reverse", "row", "row", "row", "row"],
            p: ["0 0 45px 0", "0 3em 51px 3em", "0 2em", "0 3em", "0 5em", "0 14.5em"],
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: ["100%", "100%", "60%", "50%"],
          }}>
            <Text variant="subHeading"
              sx={{
                fontSize: ["20px", "28px", "24px", "26px", "32px", "28px"],
                lineHeight: ["25px", "35px", "30px", "32px", "40px", "35px"],
                fontWeight: '400',
                fontFamily: 'Quincy CF',
                mt: ["40px", "40px", "0", "0"],
                marginBottom: '40px'
              }}
            >
              Für die Schwiegermutter, Kinder, Freude oder für sich selbst, wenn sie einmal nicht vorbei kommen können.
              <span sx={{ fontWeight: 'bold' }}> Unser Onlineshop. </span>
            </Text>
            <Box sx={{
              border: '1px solid #2E2E2E',
              borderRadius: '13px',
              width: ["186px", "211px", "200px", "211px", null, null],
              height: ["44px", "57px", "44px", "57px", null, null]
            }}>
              <Button variant="primaryBlack">Jetzt einkaufen</Button>
            </Box>
          </Box>
          <Box sx={{
            margin: ['0 auto', '0 auto', '0', null, null, null],
            overflow: 'hidden',
          }}>
            <StaticImage
              sx={{
                width: ['25em', '25em', "15em", "20em", "22em"],
                margin: '-30px -35px -40px -20px',
              }}
              src={'../../images/header-img.png'}
              alt="bottle"
            />
          </Box>
        </GridItem>
      </GridItem>
    </GridWrapper>
  )
}

export default Footer
