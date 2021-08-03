/** @jsx jsx */
import { jsx, Box, Text, Button } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
  return (
    <div>
      <footer
        sx={{
          backgroundColor: 'secondary',
          display: 'flex',
          justifyContent: "space-between",
          flexDirection: ["column-reverse", "column-reverse", "row"],
          maxWidth: ["100%", "95%", "100%", "95%", "92%", "90%"],
          margin: [null, "20px auto", null, "20px auto", "40px auto", "50px auto"],
          padding: [
            "5vw 7.5vw",
            "5vw 9.4vw",
            "0 7.6vw",
            "2vw 2.6vw",
            "2vw 2vw",
            "2vw 2vw",
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
          justifyContent: 'center',
          maxWidth: ["100%", "100%", "50%"],
        }}>
          <Text variant="subHeading">
            Für die Schwiegermutter, Kinder, Freude oder für sich selbst, wenn sie einmal nicht vorbei kommen können.
            <span sx={{ fontWeight: 'bold' }}> Unser Onlineshop. </span>
          </Text>
          <Button>Jetzt einkaufen</Button>
        </Box>
        <Box sx={{
          margin: '0 auto',
        }}>
          <StaticImage
            sx={{
              maxWidth: ["20em", "20em", "40em", "20em"],
              marginTop: '-3em',
              marginBottom: '-3em'
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
