import React from 'react'
import { Box, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'
import { Button } from '@theme-ui/components'
import bgToSmall from '../../images/bg-to-small-shopOverview.svg'
import bgToBig from '../../images/bg-to-big-shopOverview.svg'
const Banner = () => {
  const [bgBannerMedium, setBgBannerMedium] = React.useState(
    window.matchMedia("(max-width: 700px)").matches
  );


  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setBgBannerMedium(window.matchMedia("(max-width: 700px)").matches);
    });

  });
  return (
    <GridWrapper
      sx={{
        background: bgBannerMedium ? `url(${bgToSmall})` : `url(${bgToBig})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <GridItem
        sx={{
          gridColumn: ["3/ span 7", "3 / span 4"],
          backgroundColor: 'blue',
          width: ["250px", "350px"],
          m: ["-5em 0 0 0", "-8em 0 0 0"]
        }}
      >
        <StaticImage
          src={"../../images/bottle.png"}
          alt="bottle"
        />
      </GridItem>

      <GridItem
        sx={{
          gridColumn: ["10 / span 11", "10 / span 11", "21 / span 22"],
          position: 'absolute',
          top: ["5em"],
          right: ['-1.5em', "-1.9em", "-.5em"],
          width: ["100px", "130px"]
        }}
      >
        <StaticImage
          src={"../../images/bottle-jam.png"}
          alt="bottle-jam" />
      </GridItem>

      <GridItem
        sx={{
          gridColumn: ["3 / span 5"],
          m: [""],
        }}
      >
        <Box sx={{
          border: '1px solid #2E2E2E',
          borderRadius: '13px',
          width: ["186px", "211px", "200px", "211px", null, null],
          height: ["44px", "57px", "44px", "57px", null, null],
        }}>
          <Button variant="primaryBlack">Jetzt einkaufen</Button>
        </Box>
      </GridItem>
    </GridWrapper>
  )
}

export default Banner
