import React from "react";
import { Input, Box, Label } from "theme-ui";

const FormField = ({
  label,
  type,
  name,
  id,
  value,
  handleChange,
  htmlFor,
  ...props
}) => {
  return (
    <>
      <Box
        sx={{
          width: ["100%", "100%", "50%", "100%"],
          p: ["0", "0", "10px"],
        }}
      >
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input
          type={type}
          name={name}
          id={id}
          mb={3}
          value={value}
          onChange={handleChange}
          {...props}
        />
      </Box>
    </>
  );
};

export default FormField;
