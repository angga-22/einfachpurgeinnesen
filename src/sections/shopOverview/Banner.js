import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import bgToSmall from "../../images/bg-to-small-shopOverview.svg";
import bgToBig from "../../images/bg-to-big-shopOverview.svg";
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
          width: ["250px", "350px", "350px", "400px"],
          m: ["-5em 0 0 0", "-8em 0 0 0", "0"],
        }}
      >
        <StaticImage src={"../../images/bottle.png"} alt="bottle" />
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
          right: ["-1.5em", "-1.9em", "-2em"],
          width: ["100px", "130px", "1"],
        }}
      >
        <StaticImage src={"../../images/bottle-jam.png"} alt="bottle-jam" />
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
