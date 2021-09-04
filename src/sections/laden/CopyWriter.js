import * as React from "react";
import { Box, Heading } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import { useMediaQuery } from "../../helper/CustomQuery";

const CopyWriter = () => {
  const isMinTabletPortrait = useMediaQuery("(min-width: 750px)"); // for handling changing leaves image

  return (
    <GridWrapper>
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "1 / span 12",
            "2 / span 23",
            "2 / span 22",
            "2 / span 22",
            "4 / span 18",
          ],
          display: "flex",
          flexDirection: [
            "column",
            "column",
            "row-reverse",
            "row-reverse",
            "row-reverse",
            "row-reverse",
          ],
          justifyContent: "space-between",
          alignItems: "center",
          "@media screen and (max-width: 700px)": {
            alignItems: "flex-start",
            justifyContent: "flex-start",
          },
          margin: "0 auto",
          mb: ["48px", "64px", "48px", "64px", "80px", "64px"],
        }}
      >
        <Box>
          {isMinTabletPortrait ? (
            <StaticImage
              src={"../../images/laden-page/big-leaves.png"}
              width="150"
              alt="leaves"
            />
          ) : (
            <StaticImage
              src={"../../images/laden-page/leaves.png"}
              width="100"
              alt="leaves"
            />
          )}
        </Box>
        <Box
          sx={{
            width: ["100%", "100%", "70%", "60%", "40%", "40%"],
          }}
        >
          <Heading
            variant="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            Alles für Ihren guten Geschmack. Jetzt auch online.
          </Heading>
        </Box>
      </GridItem>
    </GridWrapper>
  );
};

export default CopyWriter;
