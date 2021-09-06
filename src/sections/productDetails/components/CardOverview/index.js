import React from "react";
import { Box, Text, Paragraph } from "theme-ui";
import CardItem from "./CardItem";
import PrimaryButton from "../../../../components/PrimaryButton";
import underlineInactive from "../../../../images/underline-inactive.svg";
import bulletYellow from "../../../../images/general/circle-yellow.png";

const CardOverview = ({ initialItems, remove }) => {
  const [items, setItems] = React.useState(initialItems);
  const [total, setTotal] = React.useState("");

  const handlePlus = (id) => {
    const updateItem = initialItems.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      return item;
    });
    totalPrices();
    setItems(updateItem);
  };

  const handleMinus = (id) => {
    const updateItem = items.map((item) => {
      if (item.id === id) {
        item.quantity > 0 && (item.quantity -= 1);
      }
      if (item.quantity === 0) {
        remove(id);
      }
      return item;
    });
    totalPrices();
    setItems(updateItem);
  };

  const removeItem = (id) => {
    remove(id);
    totalPrices();
  };

  const totalPrices = () => {
    const totalPrice = initialItems
      .map((item) => item.price * item.quantity)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
    setTotal(totalPrice);
    return totalPrice;
  };

  React.useEffect(() => {
    totalPrices();
    setItems(initialItems);
  }, [initialItems]);

  return (
    <Box
      sx={{
        p: ["40px 24px", "40px", "40px", "40px", "40px", "40px"],
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: " 0px 12px 24px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* label  */}
      <Box>
        <Paragraph
          sx={{
            fontSize: ["26px", "36px", "24px", "35px", "32px", "32px"],
            fontFamily: "label",
            fontWeight: "bold",
          }}
        >
          We viel darf es sein?
        </Paragraph>
      </Box>
      {/* items  */}
      <Box
        sx={{
          p: [
            "32px  0",
            "32px 0 43px 0",
            "32px  0",
            "32px 0 23px 0",
            "32px 0",
            "32px 0",
          ],
        }}
      >
        {items.map((item) => (
          <Box
            sx={{
              pb: ["10px", "22px", "10px", "0", "10px", "10px"],
            }}
          >
            <CardItem
              {...item}
              handlePlus={() => handlePlus(item.id)}
              handleMinus={() => handleMinus(item.id)}
              handleRemoveItem={() => removeItem(item.id)}
            />
          </Box>
        ))}
      </Box>

      {/* total  */}
      <Box
        sx={{
          background: `url(${underlineInactive})`,
          backgroundPosition: "top",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          pt: ["24px"],
        }}
      >
        <Text
          variant="paragraph"
          sx={{
            fontWeight: "bold",
          }}
        >
          Total
        </Text>
        <Box
          sx={{
            background: `url(${bulletYellow})`,
            backgroundPosition: "top",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            height: "50px",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Text
            sx={{
              fontWeight: "bold",
              fontFamily: "label",
              fontSize: ["20px", "22px", "20px", "22px", "21px", "21px"],
            }}
          >
            {total} €
          </Text>
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
