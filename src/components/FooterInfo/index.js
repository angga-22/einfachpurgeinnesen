import * as React from 'react'

import Section from '../Box'
import { Text, Box } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import Content from './content';

const FooterInfo = () => {

  return (
    <Section
      sx={{
        position: 'relative',
        display: ["flex"],
        flexDirection: ["column", "column", "column", "row", "row"],
        justifyContent: 'space-between',
        backgroundColor: 'footer',
        padding: [
          "0 7.5vw 48px 7.5vw",
          "0 9.4vw 81px 9.4vw",
          "60px 7.6vw 81px 7.6vw",
          "0 7.6vw 81px 7.6vw",
          // "0 9.4vw",
          // "0 7.6vw",
          // "0 7.6vw",
          // "0 8.1vw",
          // "0 5.6vw",
        ],
      }}
    >

      {/* //logo & seiten wrapper */}
      <Box
        sx={{
          display: ["flex"], // the rest would be define later
          flexDirection: ["column", "column", "row", "row", "row", "column-reverse"],
          justifyContent: 'space-between',
          textAlign: ["center", "center", "left"],
          marginTop: ["0", "0", "0", "62px"],
          width: ["100%", "100%", "100%", "100%", "52%", "60%"]
        }}
      >
        {/* //logo */}
        <Box
          sx={{
            margin: ["56px auto", "80px auto", "0", "0"],
            width: ["100%", "100%", "20%", "30%", "40%"],
          }}
        >
          <Box
            sx={{
              textAlign: ["center"],
              width: ["100px", "129px", "80px", "113px", "140px"],
              margin: ['0 auto', "0 auto", "0"]
            }}
          >
            <StaticImage
              src={'../../images/logo-pur.png'}
              alt="logo-pur" />
          </Box>
          <Text
            variant="paragraph"
            sx={{
              textAlign: ["center", "center", "left"],
              fontSize: ["14px", "20px", "16px", "18px"]
            }}
          >Ganz bewusst, gewusst was.</Text>
        </Box>
        {/* //seitan */}
        <Box
          sx={{
            display: ["flex"],
            flexDirection: ["column", "column", "column"],
            textAlign: ["center"],
            padding: ["0 0 56px 0", "0 0 81px 0", "0", "0 5vw ", "0 5vw 0 0"],
            width: ["100%", "100%", "75%", "45%", "40%", "100%"],
          }}
        >
          <Text
            variant="paragraph"
            sx={{
              marginBottom: ["16px", "16px", "0"],
              fontSize: ["16px", "20px", "16px", "20px", "18px"],
              textAlign: ["center", "center", "left"],
              fontWeight: 'bold'
            }}
          >Seiten</Text>
          <Text
            variant="paragraph"
            sx={{
              textAlign: ["center", "center", "left"],
              wordSpacing: ["1rem", "4rem", "1px", "0", "0", "10px"],
              lineHeight: ["2.5", "2.5", "1.5", "2.5"],
              fontSize: ["16px", "20px", "16px", "20px", "18px"]
            }}
          >Startseite Speisekarte Restaurant Ladengeschäft OnlineShop</Text>
        </Box>
      </Box>
      {/* //content wrapper */}
      <Box>
        <Content />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: "0",
          bottom: "0",
          width: ["250px", "350px", "220px", "220px", "270px"],
          height: 'auto'
        }}
      >
        <StaticImage
          src={'../../images/art-paint.png'}
          alt="art-paint"
        />
      </Box>

    </Section>
  )
}

export default FooterInfo
