import * as React from "react";
import { Box, Heading, Paragraph } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";

const Header = ({ data }) => {
  return (
    <GridWrapper
      sx={{
        mb: ["278px", "328px", "255px", "357px", "346px", "319px"],
        position: "relative",
      }}
    >
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "1 / span 12",
            "3 / span 23",
            "1 / span 24",
            "2 / span 22",
            "4 / span 21",
          ],
          pb: ["24px", "24px", "24px", "57px", "43px", "100px"],
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: ["-4", "-5em", "-5", "-6", "-6", "-5"],
            right: ["0", "3em", "4em", "4", "4", "4em"],
            width: ["35px", "35px", "35px", "50px", "35px", "50px"],
          }}
        >
          <StaticImage
            src={"../../images/abstract-img.png"}
            alt="abstract-img"
          />
        </Box>
        <Box
          sx={{
            width: ["100%", "100%", "90%", "100%", "100%", "80%"],
          }}
        >
          <Heading
            variant="h2"
            sx={{
              "&>b": {
                fontWeight: "bold",
              },
            }}
            dangerouslySetInnerHTML={{ __html: data.label }}
          ></Heading>
        </Box>
      </GridItem>

      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "2 / span 10",
            "3 / span 21",
            "4 / span 18",
            "6 / span 15",
            "7 / span 12",
          ],
        }}
      >
        <Box>
          <Paragraph variant="paragraph">{data.content}</Paragraph>
        </Box>
      </GridItem>
      <Box
        sx={{
          position: "absolute",
          bottom: ["-10em", "-15em", "-12em", "-20em", "-12em", "-14em"],
          width: ["145px", "175px", "190px", "266px", "255px", "334px"],
        }}
      >
        <StaticImage src={"../../images/curly-line.png"} alt="curly-line" />
      </Box>
    </GridWrapper>
  );
};

export default Header;
