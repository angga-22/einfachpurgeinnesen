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
          flexDirection: ["column-reverse", "column-reverse", "row"],
          maxWidth: ["100%", "95%", "100%", "95%", "92%", "90%"],
          margin: [null, "20px auto", null, "20px auto", "40px auto", "50px auto"],
          padding: [
            "5vw 7.5vw",
            "5vw 9.4vw",
            "5vw 7.6vw",
            "2vw 2.6vw",
            "2vw 2vw",
            "2vw 2vw",
          ],
          borderTopLeftRadius: ["2em"],
          borderTopRightRadius: ["2em"],
          borderBottomLeftRadius: [null, "2em", null, "2em", "2em", "2em"],
          borderBottomRightRadius: [null, "2em", null, "2em", "2em", "2em"],
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Text>
            Für die Schwiegermutter, Kinder, Freude oder für sich selbst, wenn sie einmal nicht vorbei kommen können.
            <span sx={{ fontWeight: 'bold' }}> Unser Onlineshop. </span>
          </Text>
          <Button>Jetzt einkaufen</Button>
        </Box>
        <Box>
          <StaticImage
            src={'../../images/header-img.png'}
            alt="bottle"
          />
        </Box>
      </footer>
    </div>
  )
}

export default Footer
