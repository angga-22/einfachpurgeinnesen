import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Heading, Paragraph } from "theme-ui";
import MenuButton from "../../overlays/MenuOverlay/MenuButton";
import bgBannerRestaurant from "../../images/restaurant-page/banner/bg-banner-lg.svg";
import bgBannerRestaurantSmall from "../../images/restaurant-page/banner/bg-banner-sm.svg";
import { useMediaQuery } from "../../helper/CustomQuery";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import PrimaryButton from "components/PrimaryButton";

const Banner = () => {
  const isMaxPhonePortraitXl = useMediaQuery("(max-width: 500px)"); // for handling shrimp image
  const isMinPhoneLandscape = useMediaQuery("(min-width: 700px)"); // for handling BISTRO typography
  const isMinDesktop = useMediaQuery("(min-width: 1400px)"); // for handling shrimp image
  const isBetweenPhonePortraitXlAndDesktop = useMediaQuery(
    "(min-width: 500px) and (max-width: 1400px)"
  ); // for handling shrimp image

  return (
    <GridWrapper
      sx={{
        background: isBetweenPhonePortraitXlAndDesktop
          ? `url(${bgBannerRestaurant})`
          : `url(${bgBannerRestaurantSmall})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        mt: ["130px", "88px", "34px", "120px", "120px", "237px"],
        mb: ["150px", "88px", "90px", "120px", "120px", "144px"],
        pt: ["195px", "206px", "192px", "232px", "268px", "281px"],
        pb: ["80px", "96px", "167px", "131px", "177px", "204px"],
      }}
    >
      {/* // shrimp image section */}
      <GridItem
        sx={{
          position: "absolute",
          top: ["3em", "3em", "6em", "5em", "7em", "10em"],
          gridColumn: [
            "6 / span 7",
            "7 / span 8",
            "19 / span 19",
            "14 / span 14",
            "18 / span 18",
            "20 / span 20",
          ],
        }}
      >
        <Box
          sx={{
            width: ["199px", "250px", "180px", "240px", "250px", "198px"],
          }}
        >
          {isMaxPhonePortraitXl && (
            <StaticImage
              src={"../../images/restaurant-page/banner/small-shrimp.png"}
              width="100%"
              alt="crusta-nova"
            />
          )}
          {isBetweenPhonePortraitXlAndDesktop && (
            <StaticImage
              src={"../../images/restaurant-page/banner/big-shrimp.png"}
              width="100%"
              alt="crusta-nova"
            />
          )}
          {isMinDesktop && (
            <StaticImage
              src={"../../images/restaurant-page/banner/small-shrimp.png"}
              width="100%"
              alt="crusta-nova"
            />
          )}
        </Box>
      </GridItem>
      {/* wording bistro  */}
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "2 / span 12",
            "1 / span 20",
            "2 / span 22",
            "1 / span 22",
            " 4 / span 22",
          ],
          pb: ["24px", "16px", "16px", "45px", "50px", "46px"],
        }}
      >
        <Heading
          sx={{
            color: "white",
            fontWeight: "500",
            lineHeight: ["90%"],
            fontSize: ["72px", "100px", "80px", "100px", "120px", "120px"],
            wordWrap: ["break-word"],
            fontFamily: "label",
          }}
        >
          {isMinPhoneLandscape ? "Bistroküche ?!" : "Bistro -  küche ?!"}
        </Heading>
      </GridItem>
      {/* // paragraph wrapper */}
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 11",
            "2 / span 10",
            "1 / span 14",
            "9 / span 15",
            "5 / span 10",
            " 6 / span 7",
          ],
          pb: ["64px", "32px", null, "48px", null, null],
        }}
      >
        <Paragraph
          variant="paragraph"
          sx={{
            color: "white",
          }}
        >
          Eine kleine Karte, oftmals wechselnd und immer saisonal. Wir lieben
          es, mit den Produkten unserer Partner zu experimentieren und Neues zu
          entdecken.
        </Paragraph>
      </GridItem>

      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "2 / span 12",
            "17 / span 10",
            "9 / span 15",
            "19 / span 15",
            " 18 / 22",
          ],
          display: "flex",
          alignItems: "center",
        }}
      >
        <PrimaryButton
          sx={{
            border: "1px solid white",
          }}
          buttonTheme="primaryWhite"
        >
          <MenuButton />
        </PrimaryButton>
      </GridItem>
    </GridWrapper>
  );
};

export default Banner;
