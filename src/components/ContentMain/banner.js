import * as React from 'react'
import Section from '../Box'
import Button from '../Button'
import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Text } from 'theme-ui'
const Banner = () => {
  const [buttonMenuClicked, setButtonMenuClicked] = React.useState('')

  // const [isMobile, setIsMobile] = React.useState(
  //   window.matchMedia("(max-width: 768px)").matches
  // );

  // React.useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  //   });
  // });

  const [bp376, setBp376] = React.useState({
    matches: window.innerWidth < 376 ? true : false
  })
  const [bp640, setBp640] = React.useState({
    matches: window.innerWidth < 640 ? true : false
  })
  const [bp1194, setBp1194] = React.useState({
    matches: window.innerWidth < 1194 ? true : false
  })

  React.useEffect(() => {
    let bp376 = window.matchMedia("(min-width: 376px)")
    bp376.addListener(setBp376)
    return () => bp376.removeListener(setBp376)
  }, [])

  React.useEffect(() => {
    let bp640 = window.matchMedia("(min-width: 640px)")
    bp640.addListener(setBp640)
    return () => bp640.removeListener(setBp640)
  }, [])
  React.useEffect(() => {
    let bp1194 = window.matchMedia("(min-width: 1194px)")
    bp1194.addListener(setBp1194)
    return () => bp1194.removeListener(setBp1194)
  }, [])

  const handleMenuClicked = (event) => {
    event.preventDefault();
    setButtonMenuClicked(navigate('/menu'))
  }


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
                flexDirection: ["column", "column", "row", "column", "row", "row"],
                justifyContent: 'space-between',
                alignItems: ["flex-start", "flex-start", "flex-end", "flex-start", "center"],
                width: ["100%", "100%", "100%"],
              }}
            >
              <Text
                variant="paragraph"
                sx={{
                  fontSize: [3, 4, 2, 4],
                  mb: ["50px", "50px", "0"],
                  pr: ["0", "0", "100px", "200px", "300px", "400px"],
                  color: 'white'
                }}
              >Eine kleine Karte, oftmals wechselnd und immer saisonal. Wir lieben es, mit den Produkten unserer Partner zu experimentieren und Neues zu entdecken.</Text>

              <Button
                variant="primary"
                className="btn-container-home btn-home"
                clickHandler={handleMenuClicked}
                sx={{
                  color: 'text',
                  '&:hover': {
                    bg: '#FFFCF9;',
                  },
                }}
              >Menü anzeigen</Button>
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
              bp376 && !bp376.matches ?
                <StaticImage
                  src={'../../images/crusta-nova.png'}
                  alt="crusta-nova" />
                : bp640 && !bp640.matches ?
                  <StaticImage
                    src={'../../images/crusta-nova-stripes.png'}
                    alt="crusta-nova" />
                  : bp1194 && !bp1194.matches ?
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
