import * as React from "react";
import { Text, Box, Paragraph } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import Content from "./Content";
import { Breakpoints } from "../Breakpoints";
const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "footer",
        display: ["flex"],
        flexDirection: ["column", "column", "column", "row", "row", "row"],
        justifyContent: "space-between",
        padding: [
          "0 7.5vw 48px 7.5vw",
          "0 9.4vw 81px 9.4vw",
          "60px 7.6vw 81px 7.6vw",
          "0 7.6vw 81px 7.6vw",
          "0 7.6vw 81px 7.6vw",
          "0 7.6vw 81px 7.6vw",
        ],
      }}
    >
      {/* //logo & seiten wrapper */}
      <Box
        sx={{
          display: ["flex"],
          flexDirection: [
            "column",
            "column",
            "row",
            "row",
            "row",
            "column-reverse",
          ],
          justifyContent: "space-between",
          textAlign: ["center", "center", "left"],
          marginTop: ["0", "0", "0", "62px"],
          width: ["100%", "100%", "100%", "100%", "50%", "60%"],
        }}
      >
        {/* //logo */}
        <Box
          sx={{
            margin: ["56px auto", "80px auto", "0", "0"],
            width: ["100%", "100%", "24%", "33%", "30%", "40%"],
          }}
        >
          <Box
            sx={{
              textAlign: ["center"],
              width: ["100px", "129px", "80px", "113px", "140px", "140px"],
              margin: [
                "0 auto",
                "0 auto",
                "0 0 14px 0",
                "0 0 12px 0",
                "0 0 16px 0",
                "0 0 8px 0",
              ],
            }}
          >
            <StaticImage src={"../../images/general/logo.png"} alt="logo-pur" />
          </Box>
          <Paragraph
            variant="paragraph"
            sx={{
              textAlign: ["center", "center", "left"],
              fontSize: ["14px", "20px", "16px", "18px", "18px", "18px"],
            }}
          >
            Ganz <Text sx={{ fontWeight: "ceraBold" }}> bewusst, gewusst </Text>{" "}
            was.
          </Paragraph>
        </Box>

        {/* //seitan */}
        <Box
          sx={{
            display: ["flex"],
            flexDirection: ["column", "column", "column"],
            textAlign: ["center"],
            padding: [
              "0 0 56px 0",
              "0 0 81px 0",
              "0 60px 0 0",
              "0 30px 0 30px ",
              "0 5vw 0 0",
              "0 5vw 0 0",
            ],
            maxWidth: ["300px", "500px", "100%", "100px", "40%", "100%"],
            "@media screen and (max-width: 1000px)": {
              margin: "0 auto",
            },
          }}
        >
          <Text
            variant="footerText"
            sx={{
              marginBottom: ["16px", "16px", "0"],
              textAlign: ["center", "center", "left", "left"],
              fontWeight: "bold",
            }}
          >
            Seiten
          </Text>
          <Paragraph
            variant="footerText"
            sx={{
              textAlign: ["center", "center", "left", "left"],
              [Breakpoints.tabletPortrait]: {
                lineHeight: "300%",
                whiteSpace: "normal",
                textAlign: "left",
              },
              wordSpacing: ["1rem", "2.5rem", ".8rem", "0", "0", "42px"],
            }}
          >
            Startseite Speisekarte Restaurant Ladengesch??ft OnlineShop
          </Paragraph>
        </Box>
      </Box>
      {/* //content wrapper */}
      <Box>
        <Content />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "0",
          bottom: "0",
          width: ["250px", "450px", "220px", "220px", "270px", "270px"],
          height: "auto",
        }}
      >
        <StaticImage
          src={"../../images/general/yellow-rain.png"}
          alt="yellow-rain"
        />
      </Box>
    </Box>
  );
};

export default Footer;
