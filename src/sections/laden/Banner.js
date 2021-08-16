/** @jsx jsx */
import * as React from 'react'
import { jsx, Box, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@theme-ui/components'
import bgBannerLaden from '../../images/bg-banner-laden.svg'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'

const Banner = () => {
  const [beverages, setBeverages] = React.useState(
    window.matchMedia("(max-width: 500px)").matches
  );
  const [buttonPosition, setButtonPosition] = React.useState(
    window.matchMedia("(min-width: 1194px)").matches
  );

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setBeverages(window.matchMedia("(max-width: 500px)").matches);
    });
    window.addEventListener("resize", () => {
      setButtonPosition(window.matchMedia("(min-width: 1194px)").matches);
    });

  });


  return (
    <GridWrapper sx={{
      background: `url(${bgBannerLaden})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      m: ["100px 0", "220px 0 120px 0", "90px 0 85px 0", "133px 0 107px 0", "197px 0 120px 0", "152px 0"]
    }}>
      {/* //pemisah  */}
      <GridItem sx={{
        gridColumn: ["1 / span 11", "1 / span 12", "2 / span 13", "12 / 24", "1 / 10", "2 / 9"],
        m: ["130px 0 0 0", "115px 0 0 0", "82px 0 0 0", "92px 0 0 0", "10em 0 -5em 0", "10em 0 -10em 0"],
      }}>
        <Text
          variant="subHeading"
          sx={{
            fontFamily: 'label',
            fontWeight: 'normal',
            fontSize: ["40px", "50px", "38px", "40px", "40px", "43px"],
            lineHeight: ["50px", "62px", "47px", "50px", "40px", "53px"],
          }}
        >
          Tu etwas Gutes rein, dann kommt etwas Gutes raus.
        </Text>
        {buttonPosition ?

          <Box sx={{
            border: '1px solid #2E2E2E',
            borderRadius: '13px',
            position: 'static',
            mt: ["48px", "32px", "20px", "28px", null, null],
            width: ["186px", "211px", "200px", "211px", null, null],
            height: ["44px", "57px", "44px", "57px", null, null],
          }}>
            <Button variant="primaryBlack">Jetzt einkaufen</Button>
          </Box>
          : null
        }
      </GridItem>

      {/* //pemisah  */}
      <GridItem sx={{
        gridColumn: ["1 / span  12", "1 / span 12", "13 / span  14", "1 / span 13", "7 / span 14"],
        m: ["2em 0 0 0", " 0", "-10em 0 0 0", "-3em 0 0 0", "-6em 0 0 0", "-7em 0 0 0"],
        overflow: ["hidden"],
      }}>

        {beverages ?
          <StaticImage
            sx={{
              m: ['-6em 0 -4em 0', "-5em 0", "-6em 0", "0"],
              width: '100%'
            }}
            src={'../../images/header-img-2.png'}
            alt="bottle"
          />

          :

          <StaticImage
            sx={{
              m: ['0', "-5em 0 -3em 0", "-3.8em 0 -3.5em 0", "-5em 0 -3em -3em", "-7em 0 -5em -3em", "0"],
              width: [null, "117%", "110%", "125%", "100%", "80%"]
            }}
            src={'../../images/header-img.png'}
            alt="bottle"
          />
        }

      </GridItem>

      {/* //pemisah  */}

      <GridItem sx={{
        gridColumn: ["1 / span 11", "1 / span 11", "2 / span 11", "8 /  20", "17 / span 8", "18 / span 6"],
        m: ["0 0 80px 0", "0 0 110px 0", "-14em 0 125px 0", "0 0 0 115px 0", "-5em 0 120px 0", "-21em 0 236px 0"]
      }}>
        <Text
          variant="paragraph"
          sx={{
            fontSize: ["18px", "22px", "16px", "20px", "20px", "20px"],
          }}
        >
          Eine kleine Karte, oftmals wechselnd und immer saisonal. Wir lieben es, mit den Produkten unserer Partner zu experimentieren und Neues zu entdecken.
        </Text>
        {buttonPosition ?
          null :
          <Box sx={{
            border: '1px solid #2E2E2E',
            borderRadius: '13px',
            position: 'static',
            mt: ["48px", "32px", "20px", "28px", null, null],
            width: ["186px", "211px", "200px", "211px", null, null],
            height: ["44px", "57px", "44px", "57px", null, null],
          }}>
            <Button variant="primaryBlack">Jetzt einkaufen</Button>
          </Box>
        }

      </GridItem>

    </GridWrapper >
  )
}

export default Banner
