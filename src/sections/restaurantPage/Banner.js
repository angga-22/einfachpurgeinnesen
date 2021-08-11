import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Text } from 'theme-ui'
import Section from 'components/Box'
import MenuButton from '../../overlays/MenuOverlay/MenuButton'


const Banner = () => {

  const [bg1, setBg1] = React.useState(
    window.matchMedia("(min-width: 376px)").matches
  );
  const [bg2, setBg2] = React.useState(
    window.matchMedia("(min-width: 640px)").matches
  );
  const [bg3, setBg3] = React.useState(
    window.matchMedia("(min-width: 1194px)").matches
  );


  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setBg1(window.matchMedia("(min-width: 376px)").matches);
    });
    window.addEventListener("resize", () => {
      setBg2(window.matchMedia("(min-width: 640px)").matches);
    });
    window.addEventListener("resize", () => {
      setBg3(window.matchMedia("(min-width: 1194px)").matches);
    });
  });

  return (
    <Section
      sx={{
        margin: [
          '120px 0',
          "88px 0",
          "90px 0",
          "120px 0",
          "120px 0",
          "144px 0"
        ],
        padding: [
          "0 7.5vw",
          "0 9.4vw",
          "0 7.6vw",
          "0 7.6vw",
          "0 8.1vw",
          "0 13vw",
        ],
        position: 'relative',
        backgroundColor: 'banner',
      }}
    >
      {/* //section wrapper */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: ["row"],
        }}
      >
        {/* // text section */}
        <Box
          sx={{
            display: 'flex',
            position: ["relative"],
            flexDirection: ["column", "column"],
            m: ["17vh 0"],
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: ["column"],
              marginBottom: ["67px"],
              width: ["100%"]
            }}
          >
            <Text
              sx={{
                color: 'white',
                fontWeight: 'bold',
                lineHeight: [1],
                fontSize: ["72px", "100px", "82px", "100px", "120px"],
                wordWrap: ["break-word"],
                fontFamily: 'label',
                mb: ["24px"]
              }}
            >Bistroküche?!</Text>
            {/* //button wrapper */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: ["column", "column", "row", "column", "column", "row"],
                justifyContent: 'space-between',
                alignItems: ["flex-start", "flex-start", "flex-end", "flex-start", "center"],
                width: ["100%", "100%", "100%", "100%", "70%", "100%"],
              }}
            >
              <Text
                variant="paragraph"
                sx={{
                  fontSize: [3, 4, 2, 4, 4, 4],
                  width: ["100%", "100%", "55%", "100%", "100%", "50%"],
                  mb: ["50px", "50px", "50px"],
                  pl: ["0", "0", "0", "0", "150px", "150px"],
                  color: 'white'
                }}
              >Eine kleine Karte, oftmals wechselnd und immer saisonal. Wir lieben es, mit den Produkten unserer Partner zu experimentieren und Neues zu entdecken.</Text>
              <Box sx={{
                border: '1px solid white',
                borderRadius: '13px',
                width: ["186px", "211px", "200px", "211px", "211px", "211px"],
                height: ["44px", "57px", "44px", "57px", "57px", "57px"]
              }}>
                <MenuButton />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* // shrimp section */}
        <Box
          sx={{
            width: ["50%"],
            position: ["absolute"],
            right: '0',
            top: '0'
          }}
        >
          {/* {mediaQuery && !mediaQuery.matches ? "haha" : "slala"} */}
          <Box
            sx={{
              width: ["150px", "196px", "166px", "198px"],
              m: ["0 auto"],
            }}
          >
            {
              bg1 ?
                <StaticImage
                  src={'../../images/crusta-nova-stripes.png'}
                  alt="crusta-nova" />
                : bg2 ?
                  <StaticImage
                    src={'../../images/crusta-nova-stripes.png'}
                    alt="crusta-nova" />
                  : bg3 ?
                    <StaticImage
                      src={'../../images/crusta-nova-stripes.png'}
                      alt="crusta-nova" />
                    : <StaticImage
                      src={'../../images/crusta-nova.png'}
                      alt="crusta-nova" />
            }
          </Box>
        </Box>
      </Box>
    </Section>
  )
}

export default Banner
