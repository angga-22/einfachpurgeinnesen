import * as React from "react";
import { Box, Text } from "theme-ui";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import CardOverview from "./CardOverview";
import { Button } from "@theme-ui/components";

const initialItems = [
  {
    id: "1",
    name: "Kusche",
    price: 5,
    quantity: 3,
  },

  {
    id: "2",
    name: "Schwarzer",
    price: 2,
    quantity: 1,
  },
  {
    id: "3",
    name: "Bread",
    price: 4,
    quantity: 1,
  },

  {
    id: "4",
    name: "Pizza",
    price: 10,
    quantity: 1,
  },
  {
    id: "5",
    name: "Sate Madura",
    price: 3,
    quantity: 1,
  },
  {
    id: "6",
    name: "Burger",
    price: 4,
    quantity: 1,
  },
];

const ItemLists = () => {
  const itemList = initialItems;

  const [initialCard, setInitialCard] = React.useState([]);

  let toggle = false;

  const addItem = (id) => {
    const index = itemList.findIndex((x) => x.id === id);
    console.log(index, "which index?");

    const updateItem = itemList.filter((item) => {
      // initialCard.includes(item) ? setInitialCard([...initialCard, item]) : initialCard.filter(i => i !== item)
      if (item.id === id) {
        toggle = true;
        setInitialCard([...initialCard, item]);
        toggle = false;
        initialCard.shift();
      }
      // if (toggle == true) {
      //   initialCard.shift()
      // }
      // console.log(initialCard.includes(item), 'is containing item ?  ')
      // if (toggle === false) {
      //   initialCard.shift()
      // }
      return item;
    });
    return updateItem;
  };

  console.log(initialCard, "initial card");

  // const toggleArrItem = (arr, item) => {
  //   arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item]
  // }

  React.useEffect(() => {
    addItem();
  }, []);

  return (
    <GridWrapper>
      <GridItem
        sx={{
          gridColumn: " 1 / 9",
        }}
      >
        <CardOverview initialItems={initialCard} />
      </GridItem>

      <GridItem
        sx={{
          gridColumn: " 12 / span  13",
        }}
      >
        <Text
          variant="h2"
          sx={{
            fontSize: ["32px"],
          }}
        >
          Wähle eine Sorte. Oder gleich ein paar mehr.
        </Text>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: ["repeat(2, 1fr)"],
            gridGap: "2",
            height: "200px",
            mt: "20px",
          }}
        >
          {itemList.map((list) => {
            return (
              <Box
                sx={{
                  "box-shadow": " 0px 12px 24px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  borderRadius: "12px",
                  cursor: "pointer",
                  backgroundColor: toggle ? "#FDC601" : "white",
                }}
                key={list.id}
              >
                <Button
                  sx={{
                    margin: "0 auto",
                    color: "black",
                    width: "100%",
                    borderRadius: "12px",
                    cursor: "pointer",
                    backgroundColor: toggle ? "#FDC601" : "white",
                  }}
                  onClick={() => addItem(list.id)}
                >
                  {list.name}
                </Button>
              </Box>
            );
          })}
        </Box>
      </GridItem>
    </GridWrapper>
  );
};

export default ItemLists;
