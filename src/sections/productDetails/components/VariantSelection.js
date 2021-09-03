import * as React from "react";
import { Box, Text } from "theme-ui";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import { Button } from "@theme-ui/components";
import CardOverview from "../CardOverview";
import { Breakpoints } from "../../../components/Breakpoints";
import { StaticImage } from "gatsby-plugin-image";
import footStep from "../../../images/footstep-dog.png";

const initialItems = [
  {
    id: 1,
    name: "one",
    price: 5,
    quantity: 1,
    isAdded: true,
  },
  {
    id: 2,
    name: "two",
    price: 3,
    quantity: 1,
    isAdded: false,
  },
  {
    id: 3,
    name: "three",
    price: 7,
    quantity: 1,
    isAdded: false,
  },
  {
    id: 4,
    name: "four",
    price: 3.5,
    quantity: 1,
    isAdded: false,
  },
];

const VariantSelection = () => {
  const itemList = initialItems;
  const [initialCard, setInitialCard] = React.useState([]);

  const addItem = (id) => {
    const itemToAdd = itemList.find((item) => item.id === id);
    const itemInCard = initialCard.find((item) => item.id === id);
    if (itemInCard) {
      setInitialCard(initialCard.filter((item) => item.id !== id));
    } else {
      setInitialCard([...initialCard, itemToAdd]);
    }
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
            "15 / span 15",
            "12 / span 10",
          ],
          overflow: "hidden",
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
          }}
        >
          {itemList.map((list, index) => {
            return (
              <Box>
                <Button
                  sx={{
                    background: `url(${footStep})`,
                    backgroundPosition: "left",
                    backgroundSize: "40px",
                    backgroundRepeat: "no-repeat",
                    margin: "0 auto",
                    color: "black",
                    width: "100%",
                    height: "64px",
                    mr: "16px",
                    mb: "23px",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    backgroundColor: list.isAdded ? "#FDC601" : "white",
                  }}
                  onClick={() => addItem(list.id, index)}
                >
                  {list.name}
                </Button>
              </Box>
            );
          })}
        </Box>
      </GridItem>

      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "1 / span 12",
            "2 / span 22",
            "2 / span 16 ",
            "1 / span 11",
            " 1 / span 9",
          ],
          position: "relative",
          // [Breakpoints.tabletLandscape]: {
          //   mt: "-300px",
          // },
          "@media screen and (min-width: 1000px) and (orientation: landscape)":
            {
              mt: "-300px",
            },
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
            src="../../../images/arrow-right2.png"
            alt="rain image"
          />
        </Box>
        <CardOverview initialItems={initialCard} />
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            right: "-5em",
            width: "200px",
            zIndex: "-1",
          }}
        >
          <StaticImage
            width="100%"
            src="../../../images/rain.png"
            alt="rain image"
          />
        </Box>
      </GridItem>
    </GridWrapper>
  );
};

export default VariantSelection;
