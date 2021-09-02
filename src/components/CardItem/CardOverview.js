import React from "react";
import { Box, Text } from "theme-ui";
import CardItem from "./CardItem";
import { Button } from "@theme-ui/components";

const CardOverview = ({ initialItems }) => {
  const [items, setItems] = React.useState(initialItems);
  const [total, setTotal] = React.useState("");

  React.useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const handlePlus = (id) => {
    const updateItem = items.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          updateQuantity: (item.quantity += 1),
        };
        return updatedItem;
      }
      return item;
    });
    totalPrices();
    setItems(updateItem);
  };

  const handleMinus = (id) => {
    const updateItem = items.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          updateQuantity:
            item.quantity > 0 ? (item.quantity -= 1) : (item.quantity = 0),
        };
        return updatedItem;
      }
      return item;
    });
    totalPrices();
    setItems(updateItem);
  };

  const totalPrices = () => {
    const totalPrice = items
      .map((item) => item.price * item.quantity)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
    setTotal(totalPrice);
  };

  React.useEffect(() => {
    totalPrices();
  }, []);

  return (
    <Box
      sx={{
        p: "20px",
        backgroundColor: "white",
        borderRadius: "12px",
        "box-shadow": " 0px 12px 24px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box>
        <Box>
          <Text variant="h2">We viel darf es sein?</Text>
        </Box>
        {items.map((item) => (
          <>
            <CardItem
              {...item}
              handlePlus={() => handlePlus(item.id)}
              handleMinus={() => handleMinus(item.id)}
            />
          </>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text variant="paragraph">Total</Text>
        <Text variant="paragraph">{total} £</Text>
      </Box>
      <Box
        sx={{
          border: "1px solid #2E2E2E",
          borderRadius: "13px",
          position: "static",
          mt: ["48px", "32px", "20px", "28px", null, null],
          width: ["186px", "211px", "200px", "211px", null, null],
          height: ["44px", "57px", "44px", "57px", null, null],
        }}
      >
        <Button variant="primaryBlack">In den Warenkorb</Button>
      </Box>
    </Box>
  );
};

export default CardOverview;
