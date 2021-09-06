/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui";

const CardItem = ({
  id,
  name,
  price,
  quantity,
  handleMinus,
  handlePlus,
  handleRemoveItem,
}) => {
  return (
    <Box key={id}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          variant="paragraph"
          sx={{
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
        <Text
          sx={{
            fontWeight: "bold",
            fontFamily: "label",
            fontSize: ["20px", "22px", "20px", "22px", "21px", "21px"],
          }}
        >
          {price * quantity} €
        </Text>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <button
            sx={{
              background: "none",
              border: "none",
              fontSize: "20px",
              width: "30px",
              cursor: "pointer",
            }}
            onClick={handleMinus}
          >
            -
          </button>
          <Text variant="paragraph">| {quantity} |</Text>
          <button
            sx={{
              background: "none",
              border: "none",
              fontSize: "20px",
              width: "30px",
              cursor: "pointer",
            }}
            onClick={handlePlus}
          >
            {" "}
            +
          </button>
        </Box>
        <Box>
          <Text
            sx={{
              color: "#DA3C6E",
              cursor: "pointer",
              fontWeight: "light",
              fontFamily: "body",
              fontSize: "14px",
            }}
            onClick={handleRemoveItem}
          >
            Remove
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CardItem;
