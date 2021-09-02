import React from "react";
import { Overlay } from "@thepuzzlers/pieces";
import { Box } from "theme-ui";
import { Header, Footer, Dishes } from "sections/menuOverlay";

const MenuOverlay = ({ handleClose }) => {
  return (
    <Overlay containerSx={{ overflowY: "scroll" }} handleClose={handleClose}>
      <Box
        sx={{
          bg: "background",
          paddingY: [null, null, null, "20px", "40px", "50px"],
        }}
      >
        <Header handleClose={handleClose} />
        <Dishes />
        <Footer />
      </Box>
    </Overlay>
  );
};

export default MenuOverlay;
