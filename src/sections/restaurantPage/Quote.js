import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Text } from "theme-ui";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
const Quote = ({ sx }) => {

  const [coupleTwo, setCoupletwo] = React.useState(
    window.matchMedia("(min-width: 750px)").matches
  );

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setCoupletwo(window.matchMedia("(min-width: 750px)").matches);
    });
  });

  return (
    <GridWrapper sx={sx}>
      {/* // quotes section */}
      <GridItem
        sx={{
          gridColumn: [
            "span 12",
            "2 / span 10",
            "2 / span 23",
            "3 / span 23",
            "3 / span 21",
            "4 / span 18",
          ],
          height: ["auto", "auto", "auto", "280px", "auto", "auto"],
          display: 'flex',
          alignItems: [null, null, "center"],
          flexDirection: ["column", "column", "row-reverse", "row-reverse", "row-reverse"]
        }}
      >
        {/* // couple image  */}
        <Box
          sx={{
            width: ['90%', "70%", "70%", "400px", "475px", "500px"],
            alignSelf: ['flex-end', "flex-end", "center", "flex-start", "center", "center"]

          }}
        >
          {coupleTwo ? (
            <StaticImage
              src={"../../images/couple-two.png"}
              alt="couple"
            />
          ) : (
            <StaticImage
              src={"../../images/quote.png"}
              alt="couple"

            />
          )}
        </Box>

        {/* // quote itself  */}
        <Box sx={{
          alignSelf: ["center", "center", "center", "flex-end", "center", "center"],
          pr: [null, null, null, null, "100px", "300px"],
          width: ["100%", "100%", null, "695px", "100%", "100%"]
        }}>
          <Text
            variant="heading"
            sx={{
              fontSize: ["32px", "42px", "32px", "40px", "40px", "42px"],
              lineHeight: "125%",
            }}
          >
            “Gemeinsam stark. Lokale Produkte von kleinen Unternehmen.”
          </Text>
        </Box>
      </GridItem>
    </GridWrapper >
  );
};

export default Quote;
