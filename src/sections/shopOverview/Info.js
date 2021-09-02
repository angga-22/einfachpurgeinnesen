import * as React from "react";
import { Box, Heading, Paragraph } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";

const Info = ({ data }) => {
  return (
    <GridWrapper>
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "2 / span 12",
            "2 / span 24",
            "9 / span 18",
            "2 / span 21",
            "4 / span 17",
          ],
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row", "column", "row", "row"],
            justifyContent: "space-between",
          }}
          key={data.id}
        >
          <Box
            sx={{
              width: ["100%", "100%", "80em", "85%", "190%", "230%"],
            }}
          >
            <Heading
              variant="h4"
              dangerouslySetInnerHTML={{ __html: data.label }}
              sx={{
                pb: ["16px", "24px", "0", "24px", "0", "0"],
                pr: ["0", "0", "52px", "76px", "0", "124px"],
                "& > b": {
                  fontWeight: "bold",
                },
              }}
            ></Heading>
          </Box>
          <Box
            sx={{
              mt: ["16px", "24px", "0", "24px", "0", "0"],
              ml: ["0", "0", "0", "0", "140px", "100px"],
            }}
          >
            <Paragraph variant="paragraph">{data.content}</Paragraph>
          </Box>
        </Box>
        {/* // custom line  */}
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            m: [
              "64px 0 146px 0",
              "80px 0 160px 0",
              "85px 0 149px 0",
              "120px 0 224px 0",
              "193px 0 200px 0",
              "154px 0 235px 0",
            ],
          }}
        >
          <StaticImage src={"../../images/line.png"} alt="line" />
        </Box>
      </GridItem>
    </GridWrapper>
  );
};

export default Info;
