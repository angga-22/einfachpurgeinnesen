/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import PrimaryButton from "../../components/PrimaryButton";

const Footer = () => {
  return (
    <GridWrapper
      sx={{
        "@media screen and (max-width: 500px)": {
          backgroundColor: "secondary",
          borderTopLeftRadius: ["1em"],
          borderTopRightRadius: ["1em"],
          borderBottomLeftRadius: [null, "1em", "0", "1em", "1em", "1em"],
          borderBottomRightRadius: [null, "1em", "0", "1em", "1em", "1em"],
        },
        "@media screen and (min-width: 500px) and (max-width: 699px)": {
          backgroundColor: "none",
          borderTopLeftRadius: "none",
          borderTopRightRadius: "none",
          borderBottomLeftRadius: "none",
          borderBottomRightRadius: "none",
        },
        mb: ["0", "30px", "0", "0"],
        "@media screen and (min-width: 700px) and (max-width: 749px)": {
          backgroundColor: "secondary",
          borderTopLeftRadius: ["1em"],
          borderTopRightRadius: ["1em"],
          borderBottomLeftRadius: [null, "1em", "0", "1em", "1em", "1em"],
          borderBottomRightRadius: [null, "1em", "0", "1em", "1em", "1em"],
        },
      }}
    >
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "1 / span 12",
            "1 / span 24",
            "1 / span 24",
            "1 / span 24",
            "1 / span 24",
          ],
          "@media screen and (max-width: 500px)": {
            backgroundColor: "none",
            borderRadius: ["0"],
            borderTopLeftRadius: ["1em"],
            borderTopRightRadius: ["1em"],
            borderBottomLeftRadius: [null, "1em", "0", "1em", "1em", "1em"],
            borderBottomRightRadius: [null, "1em", "0", "1em", "1em", "1em"],
          },
          display: "flex",
          alignItems: "center",
          height: ["auto", "auto", "345px", "392px", "392px", "392px"],
          backgroundColor: "secondary",
          borderTopLeftRadius: ["1em"],
          borderTopRightRadius: ["1em"],
          borderBottomLeftRadius: [null, "1em", "0", "1em", "1em", "1em"],
          borderBottomRightRadius: [null, "1em", "0", "1em", "1em", "1em"],
        }}
      >
        <GridItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: [
              "column-reverse",
              "column-reverse",
              "row",
              "row",
              "row",
              "row",
            ],
            p: [
              "0 0 45px 0",
              "0 3em 51px 3em",
              "0 2em",
              "0 3em",
              "0 5em",
              "0 14.5em",
            ],
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: ["100%", "100%", "60%", "50%"],
            }}
          >
            <Heading
              variant="h5"
              sx={{
                mt: ["40px", "40px", "0", "0"],
                marginBottom: "40px",
              }}
            >
              Für die Schwiegermutter, Kinder, Freude oder für sich selbst, wenn
              sie einmal nicht vorbei kommen können.
              <span sx={{ fontWeight: "bold" }}> Unser Onlineshop. </span>
            </Heading>
            <PrimaryButton
              sx={{
                border: "1px solid #2E2E2E",
              }}
            >
              Jetzt einkaufen
            </PrimaryButton>
          </Box>
          <Box>
            <StaticImage
              sx={{
                width: ["25em", "25em", "15em", "20em", "22em"],
              }}
              src={"../../images/general/beverages.png"}
              alt="bottle"
            />
          </Box>
        </GridItem>
      </GridItem>
    </GridWrapper>
  );
};

export default Footer;
