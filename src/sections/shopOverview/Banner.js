import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import bgToSmall from "../../images/shop-overview/banner/bg-banner-small.svg";
import bgToBig from "../../images/shop-overview/banner/bg-banner-big.svg";
import { useMediaQuery } from "../../helper/CustomQuery";
import PrimaryButton from "../../components/PrimaryButton";

const Banner = () => {
  const isMaxPhoneLandscape = useMediaQuery("(max-width: 700px)"); // for handling background banner

  return (
    <GridWrapper
      sx={{
        background: isMaxPhoneLandscape
          ? `url(${bgToSmall})`
          : `url(${bgToBig})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GridItem
        sx={{
          gridColumn: [
            "3/ span 7",
            "3 / span 4",
            "12 / span 12",
            "6 / span 12 ",
          ],
          backgroundColor: "blue",
        }}
      >
        <StaticImage
          src={"../../images/shop-overview/banner/single-bottle.png"}
          width="100"
          alt="bottle"
        />
      </GridItem>
      <GridItem
        sx={{
          gridColumn: [
            "10 / span 11",
            "10 / span 11",
            "21 / span 22",
            "21 / span 22",
          ],
          position: "absolute",
          top: ["5em", "5em", "9em", "1px"],
          backgroundColor: "green",
        }}
      >
        <StaticImage src={"../../images/general/jam.png"} alt="bottle-jam" />
      </GridItem>
      <GridItem
        sx={{
          gridColumn: ["3 / span 5"],
        }}
      >
        <PrimaryButton
          sx={{
            border: "1px solid #2E2E2E",
          }}
        >
          Jetzt einkaufen
        </PrimaryButton>
      </GridItem>
    </GridWrapper>
  );
};

export default Banner;
