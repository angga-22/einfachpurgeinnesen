/** @jsx jsx */
import * as React from 'react'
import { jsx, Box, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@theme-ui/components'
import Section from 'components/Box'
import bgBannerLaden from '../../images/bg-banner-laden.svg'
const Banner = () => {
  const [bg1, setBg1] = React.useState(
    window.matchMedia("(max-width: 640px)").matches
  );
  const [minWidth1194, setMinWidth1194] = React.useState(
    window.matchMedia("(min-width: 1194px)").matches
  );

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setBg1(window.matchMedia("(max-width: 640px)").matches);
    });
    window.addEventListener("resize", () => {
      setMinWidth1194(window.matchMedia("(min-width: 1194px)").matches);
    });

  });


  return (
    <Section sx={{
      background: `url(${bgBannerLaden})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      margin: ["100px 0", "100px 0", "226px 0 120px 0", "90px 0", "133px 0 107px 0", "197px 0 120px 0", "152px 0"],
      padding: [
        "10vh 7.5vw",
        "15vh 9.4vw",
        "10vh 7.6vw",
        "13vh 7.6vw",
        "5vh 8.1vw",
        "10vh 9.6vw",
      ],
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: ["column", "column", "column", "column", "row", "row"],
          position: 'relative',
          '@media screen and (min-width: 812px)': {
            flexDirection: 'row',
            height: '380px'
          },
          '@media screen and (min-width: 832px)': {
            flexDirection: 'row',
            height: '900px',
            mt: '-70px'
          },
          '@media screen and (min-width: 1194px)': {
            flexDirection: 'column',
            height: '800px',
          },
        }}
      >
        <Text
          variant="subHeading"
          sx={{
            '@media screen and (min-width: 834px)': {
              position: 'absolute',
              right: '0',
              width: '50%',
              textAlign: 'right',
              top: '3em'
            },
            '@media screen and (min-width: 1194px)': {
              position: 'absolute',
              top: '3.5em',
              left: '0',
              width: '40%',
              textAlign: 'left',
            },
            '@media screen and (min-width: 1440px)': {
              position: 'absolute',
              top: '4em',
              left: '0',
              width: '35%',
              textAlign: 'left',
            },
            position: 'static',
            fontFamily: 'label',
            fontWeight: 'normal',
            fontSize: ["40px", "40px", "50px", "38px", "40px", "40px", "43px"],
            lineHeight: ["50px", "50px", "62px", "47px", "50px", "40px", "53px"]
          }}
        >
          Tu etwas Gutes rein, dann kommt etwas Gutes raus.
        </Text>
        <Box
          sx={{
            width: ["110%", "110%", "100%", "100%", "385px", "454px"],
            margin: ["-4em 0 -4em 0", "-8em 0 -2em 0", "-5em auto -5em auto", "0 0 0 0", "150px auto 200px auto"],
          }}
        >
          {bg1 ?
            <StaticImage
              src={'../../images/header-img-2.png'}
              alt="bottle"
            />
            :
            <StaticImage
              src={'../../images/header-img.png'}
              alt="bottle"
            />
          }
        </Box>
        {/* // button and text  */}
        <Box
          sx={{
            display: 'column',
            position: 'static',
            width: '100%',
            '@media screen and (min-width: 640px)': {
              width: '80%',
              fontSize: '22px'
            },
            '@media screen and (min-width: 812px)': {
              position: 'absolute',
              left: '0',
              bottom: '-5',
              width: '50%'
            },
            '@media screen and (min-width: 834px)': {
              position: 'absolute',
              width: '100%',
              padding: '0 25%',
              bottom: '4',
            },
            '@media screen and (min-width: 1194px)': {
              position: 'absolute',
              padding: '0',
              bottom: '4',
              left: '65%',
              width: '35%',
              textAlign: 'left',
            },
            '@media screen and (min-width: 1440px)': {
              position: 'absolute',
              padding: '0',
              bottom: '5',
              left: '63%',
              width: '35%',
              textAlign: 'left',
            },

          }}>
          <Text
            variant="paragraph"
            sx={{
              fontSize: ["18px", "18px", "22px", "22px", "20px", "20px", "20px"],
            }}
          >
            Eine kleine Karte, oftmals wechselnd und immer saisonal. Wir lieben es, mit den Produkten unserer Partner zu experimentieren und Neues zu entdecken.
          </Text>
          {minWidth1194 ?
            null
            :
            <Box sx={{
              border: '1px solid #2E2E2E',
              borderRadius: '13px',
              position: 'static',
              mt: ["48px", "32px", "32px", "28px", null, null],
              width: ["186px", "186px", "211px", "200px", "211px", null, null],
              height: ["44px", "44px", "57px", "44px", "57px", null, null],
              '@media screen and (min-width: 1194px)': {
                position: 'absolute',
                top: '0',
              },
            }}>
              <Button variant="primaryBlack">Jetzt einkaufen</Button>
            </Box>
          }
        </Box>
        {minWidth1194 ?
          <Box sx={{
            border: '1px solid #2E2E2E',
            borderRadius: '13px',
            position: 'static',
            width: ["186px", "211px", "200px", "211px", null, null],
            height: ["44px", "57px", "44px", "57px", null, null],
            '@media screen and (min-width: 1194px)': {
              position: 'absolute',
              top: '22em',
            },
            '@media screen and (min-width: 1440px)': {
              position: 'absolute',
              top: '23em',
            },
          }}>
            <Button variant="primaryBlack">Jetzt einkaufen</Button>
          </Box> : null}
      </Box>
    </Section >
  )
}

export default Banner
