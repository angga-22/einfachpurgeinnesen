import React from "react";
import { Box, Text, Paragraph } from "theme-ui";
import CardItem from "./CardItem";
import PrimaryButton from "../../../components/PrimaryButton";
import underlineInactive from "../../../images/underline-inactive.svg";
import bulletYellow from "../../../images/bullet-yellow.png";

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

  const handleRemoveItem = (id) => {
    items.filter((item) => console.log(item.id !== id));
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
        boxShadow: " 0px 12px 24px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box>
        <Box>
          <Paragraph
            sx={{
              fontSize: ["26px"],
              fontFamily: "label",
              fontWeight: "bold",
            }}
          >
            We viel darf es sein?
          </Paragraph>
        </Box>
        {items.map((item) => (
          <>
            <CardItem
              {...item}
              handlePlus={() => handlePlus(item.id)}
              handleMinus={() => handleMinus(item.id)}
              handleRemoveItem={() => handleRemoveItem(item.id)}
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
        <Box
          sx={{
            background: `url(${underlineInactive})`,
            backgroundPosition: "top",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            pt: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            variant="paragraph"
            sx={{
              fontWeight: "bold",
              fontFamily: "body",
              fontSize: "24px",
            }}
          >
            Total
          </Text>
          <Box
            sx={{
              background: `url(${bulletYellow})`,
              backgroundPosition: "top",
              backgroundSize: "100%",
              width: "45px",
              height: "40px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Text
              sx={{
                fontWeight: "bold",
                fontFamily: "label",
                fontSize: "24px",
              }}
            >
              {total} €
            </Text>
          </Box>
        </Box>
      </Box>
      <PrimaryButton
        sx={{
          border: "1px solid #2E2E2E",
          position: "static",
          mt: ["48px", "32px", "20px", "28px", null, null],
        }}
      >
        In den Warenkorb
      </PrimaryButton>
    </Box>
  );
};

export default CardOverview;
