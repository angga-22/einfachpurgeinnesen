import { Box } from "theme-ui";
import * as React from "react";
const Section = ({ sx, ...props }) => (
  <Box
    as="section"
    sx={{
      padding: [
        "0 7.5vw",
        "0 9.4vw",
        "0 7.6vw",
        "0 7.6vw",
        "0 8.1vw",
        "0 5.6vw",
      ],
      ...sx,
    }}
    {...props}
  />
);

export default Section;
