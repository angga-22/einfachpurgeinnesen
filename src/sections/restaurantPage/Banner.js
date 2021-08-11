import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Text } from 'theme-ui'
import Section from 'components/Box'
import MenuButton from '../../overlays/MenuOverlay/MenuButton'
import bgBannerRestaurant from '../../images/bg-banner-restaurant.svg'
import bgBannerRestaurantSmall from '../../images/bg-banner-restaurant-small.svg'
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
        background: bg2 ? `url(${bgBannerRestaurant})` : `url(${bgBannerRestaurantSmall})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
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
              // marginBottom: ["67px"],
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
                mt: ["0", "50px"],
                mb: ["24px"]
              }}
            >Bistroküche?!</Text>
            {/* //button & paragraph wrapper */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: ["column", "column", "row", "column", "column", "row"],
                justifyContent: 'space-between',
                alignItems: ["flex-start", "flex-start", "center", "flex-start", "center", "center"],
                width: ["100%", "100%", "100%", "100%", "70%", "100%"],
              }}
            >
              <Text
                variant="paragraph"
                sx={{
                  fontSize: [3, 4, 2, 4, 4, 4],
                  width: ["100%", "100%", "55%", "100%", "100%", "60%"],
                  mb: ["50px", "50px", "50px", null, null, null],
                  pl: ["0", "0", "0", "0", "150px", "150px"],
                  color: 'white'
                }}
              >Eine kleine Karte, oftmals wechselnd und immer saisonal. Wir lieben es, mit den Produkten unserer Partner zu experimentieren und Neues zu entdecken.</Text>
              <Box sx={{
                border: '1px solid white',
                borderRadius: '13px',
                width: ["186px", "211px", "200px", "211px", "211px", "211px"],
                height: ["44px", "57px", "44px", "57px", "57px", "57px"],
                mb: ["-4em", "-4em", "0", null, null, null]
              }}>
                <MenuButton />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* // shrimp section */}

        {/* {mediaQuery && !mediaQuery.matches ? "haha" : "slala"} */}
        <Box
          sx={{
            width: ["151px", "198px", "166px", "198px", "198px", "198px"],
            position: 'absolute',
            top: ["0", "4"],
            right: ["0", "0", "5", "6"],
          }}
        >
          {
            bg1 ?
              <StaticImage
                src={'../../images/crusta-nova-stripes.png'}
                width="100%"
                alt="crusta-nova" />
              : bg2 ?
                <StaticImage
                  src={'../../images/crusta-nova-stripes.png'}
                  alt="crusta-nova"
                  width="100%"
                />

                : bg3 ?
                  <StaticImage
                    src={'../../images/crusta-nova-stripes.png'}
                    alt="crusta-nova"
                    width="100%"
                  />

                  : <StaticImage
                    src={'../../images/crusta-nova.png'}
                    width="100%"
                    alt="crusta-nova" />
          }
        </Box>
      </Box>
    </Section>
  )
}

export default Banner
