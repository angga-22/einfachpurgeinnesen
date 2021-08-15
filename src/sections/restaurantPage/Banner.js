import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Text } from 'theme-ui'
import Section from 'components/Box'
import MenuButton from '../../overlays/MenuOverlay/MenuButton'
import bgBannerRestaurant from '../../images/bg-banner-restaurant.svg'
import bgBannerRestaurantSmall from '../../images/bg-banner-restaurant-small.svg'
const Banner = () => {

  const [shrimpSmall, setShrimpSmall] = React.useState(
    window.matchMedia("(max-width: 500px)").matches
  );
  const [labelBanner, setLabelBanner] = React.useState(
    window.matchMedia("(min-width: 700px)").matches
  );
  const [shrimpBig, setShrimpBig] = React.useState(
    window.matchMedia("(min-width: 500px) and (max-width: 1439px)").matches
  );
  const [shrimpSmallDesktop, setShrimSmallDesktop] = React.useState(
    window.matchMedia("(min-width: 1440px)").matches
  );


  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setShrimpSmall(window.matchMedia("(max-width: 500px)").matches);
    });
    window.addEventListener("resize", () => {
      setShrimpBig(window.matchMedia("(min-width: 500px) and (max-width: 1439px)").matches);
    });
    window.addEventListener("resize", () => {
      setShrimSmallDesktop(window.matchMedia("(min-width: 1440px)").matches);
    });
    window.addEventListener("resize", () => {
      setLabelBanner(window.matchMedia("(min-width: 700px)").matches);
    });
  });

  return (
    <Section
      sx={{
        background: shrimpBig ? `url(${bgBannerRestaurant})` : `url(${bgBannerRestaurantSmall})`,
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
          "0 12.5vw",
          "0 7.6vw",
          "0 100px",
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
            m: ["22vh 0"],
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: ["column"],
              // marginBottom: ["67px"],
              width: ["100%", "100%"]
            }}
          >
            {labelBanner ?
              <Text
                sx={{
                  color: 'white',
                  fontWeight: '500',
                  lineHeight: [1],
                  fontSize: ["72px", "100px", "80px", "100px", "120px"],
                  wordWrap: ["break-word"],
                  fontFamily: 'label',
                  mt: ["0", "20px", "0", "0", "50px"],
                  mb: ["24px", "24px", "5px", "45px"],
                }}
                dangerouslySetInnerHTML={{ __html: ' Bistroküche?! ' }}
              >

              </Text>
              :
              <Text
                sx={{
                  color: 'white',
                  fontWeight: '500',
                  lineHeight: [1],
                  fontSize: ["72px", "100px", "82px", "100px", "120px"],
                  wordWrap: ["break-word"],
                  fontFamily: 'label',
                  mt: ["0", "20px"],
                  mb: ["24px"],
                }}
                dangerouslySetInnerHTML={{ __html: ' Bistro- <br />küche?! ' }}
              >
              </Text>
            }

            {/* //button & paragraph wrapper */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: ["column", "column", "row", "column", "row", "row"],
                justifyContent: 'space-between',
                alignItems: ["flex-start", "flex-start", "center", "flex-start", "center", "center"],
                width: ["100%", "100%", "100%", "408px", "100%", "100%"],
                ml: ["0", "0", "0", "29%", "0"],
                mb: ["0", "0", "0", "-13%", "0"]
              }}
            >
              <Text
                variant="paragraph"
                sx={{
                  fontSize: [3, 4, 2, 4, 4, 4],
                  width: ["90%", "100%", "55%", "100%", "55%", "60%"],
                  mb: ["55px", "50px", "50px", null, null, null],
                  pl: ["0", "0", "0", "0", "150px", "0"],
                  color: 'white'
                }}
              >Eine kleine Karte, oftmals wechselnd und immer saisonal. Wir lieben es, mit den Produkten unserer Partner zu experimentieren und Neues zu entdecken.</Text>
              <Box sx={{
                border: '1px solid white',
                borderRadius: '13px',
                width: ["211px", "211px", "199px", "211px", "211px", "211px"],
                height: ["57px", "57px", "44px", "57px", "57px", "57px"],
                mb: ["-6em", "-4em", "0", null, null, null]
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
            width: ["199px", "250px", "200px", "240px", "250px", "198px"],
            position: 'absolute',
            top: ["5", "5", "6em", "4", "10em"],
            right: ["4", "6", "5", "150px"],
          }}
        >
          {
            shrimpSmall ?
              <StaticImage
                src={'../../images/crusta-nova.png'}
                width="100%"
                alt="crusta-nova" />
              : shrimpBig ?
                <StaticImage
                  src={'../../images/crusta-nova-stripes.png'}
                  alt="crusta-nova"
                  width="100%"
                />

                : shrimpSmallDesktop ?
                  <StaticImage
                    src={'../../images/crusta-nova.png'}
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
