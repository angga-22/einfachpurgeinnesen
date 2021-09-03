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
    <Box
      sx={{
        backgroundColor: "white",
        pb: "20px",
        pt: "10px",
      }}
      key={id}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mb: "-20px",
        }}
      >
        <Text variant="paragraph" sx={{ fontWeight: "bold" }}>
          {name}{" "}
        </Text>
        <Text
          variant="paragraph"
          sx={{
            fontWeight: "bold",
            fontFamily: "label",
            fontSize: "24px",
          }}
        >
          {price * quantity} €
        </Text>
      </Box>
      <br />
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
              color: "red",
              cursor: "pointer",
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
