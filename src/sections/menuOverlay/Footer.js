/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@theme-ui/components'
const Footer = () => {

  return (
    <div>
      <footer
        sx={{
          backgroundColor: 'secondary',
          display: 'flex',
          justifyContent: "space-between",
          flexDirection: ["column-reverse", "column-reverse", "row"],
          maxWidth: ["100%", "80%", "100%", "85%", "85%", "90%"],
          margin: [null, "20px auto", "0 auto", "20px auto", "40px auto", "50px auto"],
          padding: [
            "5vw 7.5vw",
            "5vw 9.4vw",
            "0 7.6vw",
            "2vw 2.6vw",
            "2vw 85px",
            "1vw 15vw",
          ],
          borderTopLeftRadius: ["1em"],
          borderTopRightRadius: ["1em"],
          borderBottomLeftRadius: [null, "1em", "0", "1em", "1em", "1em"],
          borderBottomRightRadius: [null, "1em", "0", "1em", "1em", "1em"],
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: ["100%", "100%", "50%"],
        }}>
          <Text variant="subHeading"
            sx={{
              fontSize: ["20px", "28px", "24px", "26px", "32px", "28px"],
              lineHeight: ["25px", "35px", "30px", "32px", "40px", "35px"],
              fontWeight: '400',
              fontFamily: 'Quincy CF',
              marginTop: '39px',
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
              width: '20em',
              margin: '-30px -35px -40px -20px',
            }}
            src={'../../images/header-img.png'}
            alt="bottle"
          />
        </Box>
      </footer>
    </div>
  )
}

export default Footer
