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
            "2 / span 11",
            "2 / span 11",
            "9 / span 15",
            "2 / span 11",
            "5 / span 9",
          ],
          pb: ["16px", "24px", "0", "24px", "0", "0"],
        }}
      >
        <Box>
          <Heading
            variant="h4"
            dangerouslySetInnerHTML={{ __html: data.label }}
            sx={{
              "& > b": {
                fontWeight: "bold",
              },
            }}
          ></Heading>
        </Box>
      </GridItem>

      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "2 / span 11",
            "14 /  26",
            "9 / span 13",
            "15 / span 9",
            "15 / span 7 ",
          ],
        }}
      >
        <Box>
          <Paragraph variant="paragraph">{data.content}</Paragraph>
        </Box>
      </GridItem>

      {/* // custom line  */}
      <GridItem
        sx={{
          gridColumn: [
            " 1 / span 12",
            " 2 / span 11",
            " 2 / span 23",
            " 9 / span 14",
            " 2 / span 22",
            " 5 / span 17",
          ],
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
        <Box>
          <StaticImage src={"../../images/line.png"} alt="line" />
        </Box>
      </GridItem>
    </GridWrapper>
  );
};

export default Info;
