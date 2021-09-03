import React from "react";
import { Box } from "theme-ui";
import { Button } from "@theme-ui/components";

const PrimaryButton = ({
  sx,
  children,
  handleClick,
  buttonTheme,
  ...props
}) => {
  return (
    <Box
      sx={{
        borderRadius: "13px",
        width: ["186px", "211px", "200px", "211px", null, null],
        height: ["44px", "57px", "44px", "57px", null, null],
        ...sx,
      }}
      {...props}
    >
      <Button
        variant={buttonTheme !== undefined ? buttonTheme : "primaryBlack"}
        onClick={handleClick}
      >
        {children}
      </Button>
    </Box>
  );
};

export default PrimaryButton;
