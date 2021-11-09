import * as React from "react";
import { Box, Text } from "theme-ui";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import CardOverview from "./components/CardOverview";
import { Breakpoints } from "../../components/Breakpoints";
import { StaticImage } from "gatsby-plugin-image";

const VariantSelection = ({ variantData }) => {
  const itemList = variantData;
  const [initialCard, setInitialCard] = React.useState([]);

  const addItem = (id, index) => {
    const itemToAdd = itemList.find((item) => item.id === id);
    const itemInCard = initialCard.find((item) => item.id === id);
    itemList[index].isAdded
      ? (itemList[index].isAdded = false)
      : (itemList[index].isAdded = true);
    itemInCard
      ? setInitialCard(initialCard.filter((item) => item.id !== id))
      : setInitialCard([...initialCard, itemToAdd]);
  };

  const removeItem = (id) => {
    itemList.map((item) => {
      if (item.id === id) {
        item.isAdded = false;
      }
      return item;
    });
    const itemInCard = initialCard.find((item) => item.id === id);
    itemInCard && setInitialCard(initialCard.filter((item) => item.id !== id));
  };

  return (
    <GridWrapper>
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "1 / span 12",
            "2 / span 22",
            "4 / span 22",
            "15 /  23",
            "12 /  23",
          ],
          overflow: "hidden",
          gridRow: ["1 / 1", "1 / 1", " 1  / 1", "1 / 1", " 1 / 1"],
        }}
      >
        <Box
          sx={{
            width: ["100%", "65%", "55%", "60%", "100%", "50%"],
          }}
        >
          <Text
            variant="h2"
            sx={{
              fontSize: ["26px", "28px", "28px", "28px", "28px", "28px"],
              fontWeight: "bold",
            }}
          >
            Wähle eine Sorte. Oder gleich ein paar mehr.
          </Text>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: ["repeat(2, 1fr)"],
            [Breakpoints.tabletLandscape]: {
              gridTemplateColumns: "1fr",
            },
            [Breakpoints.desktop]: {
              gridTemplateColumns: ["repeat(2, 1fr)"],
            },
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            WebkitScrollbar: {
              display: "none",
            },
            m: [
              "32px 0 61px 0",
              "40px 0 55px 0",
              "40px 0 83px 0",
              "48px 0 73px 0",
              "48px 0 0 0",
              "48px 0 0 0",
            ],
          }}
        >
          {itemList.map((list, index) => (
            <Box
              sx={{
                width: ["288px", "298px", "282px", "288px", "329px", "308px"],
                height: "64px",
                display: "flex",
                alignItems: "center",
                pl: "20px",
                mr: "16px",
                mb: "23px",
                borderRadius: "12px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                backgroundColor: list.isAdded ? "#FDC601" : "white",
              }}
              onClick={() => addItem(list.id, index)}
            >
              <StaticImage
                width="25"
                src="../../images/product-detail/variant-mark.svg"
              />
              <Text
                sx={{
                  color: "black",
                  fontFamily: "body",
                  pl: ["10px"],
                  fontSize: ["16px", "18px", "18px", "18px", "18px", "18px"],
                }}
              >
                {list.name}
              </Text>
            </Box>
          ))}
        </Box>
      </GridItem>

      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "1 / span 12",
            "2 / span 22",
            "2 / span 16 ",
            "1 /  11",
            " 1 /  9",
          ],
          position: "relative",
          gridRow: ["2 /  2", "2 / 2", "2 / 2", "2 / 2", "1 / 1"],
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-3em",
            right: "-5em",
            zIndex: "-1",
            width: "100px",
          }}
        >
          <StaticImage
            src="../../../images/product-detail/arrow-right2.png"
            alt="rain image"
          />
        </Box>
        <CardOverview initialItems={initialCard} remove={removeItem} />
        {/* <Box
          sx={{
            position: "absolute",
            bottom: "0",
            right: "-5em",
            width: "200px",
          }}
        >
          <StaticImage
            width="100"
            src="../../../images/product-detail/black-scribble.png"
            alt="rain image"
          />
        </Box> */}
      </GridItem>
    </GridWrapper>
  );
};

export default VariantSelection;
