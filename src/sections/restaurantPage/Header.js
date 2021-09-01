import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Heading, Paragraph } from "theme-ui";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";

const TopContent = () => {
  const [heroImage, setHeroImage] = React.useState(
    window.matchMedia("(min-width: 700px)").matches
  );

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setHeroImage(window.matchMedia("(min-width: 700px)").matches);
    });
  });

  return (
    <GridWrapper
      sx={{
        m: [
          "12px 0 0 0",
          "22px 0 0 0",
          "16px 0 0 0",
          "65px 0 0 0",
          "64px 0 0 0",
          "155px 0 0 0",
        ],
      }}
    >
      {/* //hero section */}
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "1 / span 12",
            "2 / span 22",
            "2 / span 21",
            " 4 / span 17",
            " 4 / span 17",
          ],
        }}
      >
        <Box
          sx={{
            width: ["24px", "30px", "24px", "24px", "24px", "47px"],
          }}
        >
          <StaticImage src={"../../images/quote-left.png"} alt="quote-left" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column"],
          }}
        >
          <Heading
            variant="h2"
            sx={{
              margin: "0 auto",
              mb: ["18px"],
              pl: ["0", "40px", "30px", "30px", "38px", "50px"],
            }}
          >
            <span sx={{ fontWeight: "bold" }}>Tu etwas Gutes rein,</span> dann
            kommt etwas Gutes raus.
          </Heading>
          <Paragraph
            variant="paragraph"
            sx={{
              pl: ["0", "40px", "30px", "30px", "38px", "50px"],
              pb: ["71px", "41px", "48px", "80px", "60px", "35px"],
            }}
          >
            Worte unseres Urgroßvaters
          </Paragraph>
        </Box>
        <Box
          sx={{
            width: ["30px", "30px", "30px", "30px", "30px", "78px"],
            float: "right",
            mr: ["20px", "0", "0"],
            marginTop: [
              "-100px",
              "-100px",
              "-100px",
              "-130px",
              "-100px",
              "-70px",
            ],
          }}
        >
          <StaticImage src={"../../images/quote-right.png"} alt="quote-right" />
        </Box>
      </GridItem>
      {heroImage ? (
        <GridItem
          sx={{
            gridColumn: [
              "1 / span 12",
              "1 / span 12",
              "3 / span 18",
              "1 / span 24",
              "3 / span 20",
              " 6 / span 15",
            ],
            position: ["static"],
          }}
        >
          <StaticImage src={"../../images/hero-img.png"} alt="hero-img" />
        </GridItem>
      ) : (
        <Box
          sx={{
            maxWidth: ["100%"],
            position: ["absolute"],
            left: "0",
            right: "0",
            top: ["18em", ""],
          }}
        >
          <StaticImage src={"../../images/hero-img.png"} alt="hero-img" />
        </Box>
      )}
    </GridWrapper>
  );
};

export default TopContent;
