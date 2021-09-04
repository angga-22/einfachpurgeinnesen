import * as React from "react";
import { Paragraph, Heading } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import bgBannerLaden from "../../images/laden-page/banner-laden/bg-banner.svg";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import { useMediaQuery } from "../../helper/CustomQuery";
import PrimaryButton from "../../components/PrimaryButton";

const Banner = () => {
  const isMaxPhonePortraitXl = useMediaQuery("(max-width: 500px)"); // for handling foods&drink image position
  const isMinTabletLandscape = useMediaQuery("(min-width: 1000px)"); // for handling responsive button position

  return (
    <GridWrapper
      sx={{
        background: `url(${bgBannerLaden})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        m: [
          "100px 0",
          "220px 0 120px 0",
          "90px 0 85px 0",
          "133px 0 107px 0",
          "197px 0 120px 0",
          "152px 0",
        ],
      }}
    >
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 11",
            "1 / span 12",
            "2 / span 13",
            "12 / 24",
            "1 / 10",
            "2 / 9",
          ],
          m: [
            "130px 0 0 0",
            "115px 0 0 0",
            "82px 0 0 0",
            "92px 0 0 0",
            "10em 0 -5em 0",
            "10em 0 -10em 0",
          ],
        }}
      >
        <Heading variant="h4">
          Tu etwas Gutes rein, dann kommt etwas Gutes raus.
        </Heading>
        {isMinTabletLandscape ? (
          <PrimaryButton
            sx={{
              border: "1px solid #2E2E2E",
              position: "static",
              mt: ["48px", "32px", "20px", "28px", null, null],
            }}
          >
            Jetzt einkaufen
          </PrimaryButton>
        ) : null}
      </GridItem>
      <GridItem
        sx={{
          gridColumn: [
            "1 / span  12",
            "1 / span 12",
            "13 / span  14",
            "1 / span 13",
            "7 / span 14",
          ],
          m: [
            "2em 0 0 0",
            " 0",
            "-10em 0 0 0",
            "-3em 0 0 0",
            "-6em 0 0 0",
            "-7em 0 0 0",
          ],
          overflow: ["hidden"],
        }}
      >
        {isMaxPhonePortraitXl ? (
          <StaticImage
            width="100"
            src={"../../images/laden-page/banner-laden/beverages-2.png"}
            alt="beverages"
          />
        ) : (
          <StaticImage
            width="100"
            src={"../../images/general/beverages.png"}
            alt="beverages"
          />
        )}
      </GridItem>
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 11",
            "1 / span 11",
            "2 / span 11",
            "8 /  20",
            "17 / span 8",
            "18 / span 6",
          ],
          m: [
            "0 0 80px 0",
            "0 0 110px 0",
            "-14em 0 125px 0",
            "0 0 0 115px 0",
            "-5em 0 120px 0",
            "-21em 0 236px 0",
          ],
        }}
      >
        <Paragraph variant="paragraph">
          Eine kleine Karte, oftmals wechselnd und immer saisonal. Wir lieben
          es, mit den Produkten unserer Partner zu experimentieren und Neues zu
          entdecken.
        </Paragraph>

        {isMinTabletLandscape ? null : (
          <PrimaryButton
            sx={{
              border: "1px solid #2E2E2E",
              position: "static",
              mt: ["48px", "32px", "20px", "28px", null, null],
            }}
          >
            Jetzt einkaufen
          </PrimaryButton>
        )}
      </GridItem>
    </GridWrapper>
  );
};

export default Banner;
