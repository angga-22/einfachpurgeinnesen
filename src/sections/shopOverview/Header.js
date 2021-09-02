import * as React from "react";
import { Box, Heading, Paragraph } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";

const Header = ({ data }) => {
  return (
    <GridWrapper>
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "1 / span 12",
            "2 / span 23",
            "2 / span 24",
            "2 / span 22",
            "2 / span 22",
          ],
          position: "relative",
          mb: ["158px", "173px", "138px", "166px", "161px", "109px"],
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: ["-5", "-6em", "-5", "-6", "-6", "-5"],
            right: ["0", "2", "4", "4"],
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
            display: "flex",
            flexDirection: "column",
          }}
          key={data.id}
        >
          <Box
            sx={{
              pb: ["24px", "24px", "24px", "57px", "43px", "100px"],
              width: ["100%", "100%", "90%", "100%", "100%", "80%"],
              margin: "0 auto",
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
          <Box
            sx={{
              width: ["100%", "82%", "90%", "80%", "63%", "53%"],
              margin: "0 auto",
            }}
          >
            <Paragraph variant="paragraph">{data.content}</Paragraph>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            top: ["8vh", "10vh", "10vh", "14vh", "4vh", "4vh"],
            left: ["-15%", "-12%", "-12%", "-20%", "-15vw", "-9%"],
            width: ["175px", "235px", "208px", "266px", "295px", "334px"],
          }}
        >
          <StaticImage src={"../../images/curly-line.png"} alt="curly-line" />
        </Box>
      </GridItem>
    </GridWrapper>
  );
};

export default Header;
