import * as React from "react";
import { GridItem } from "@thepuzzlers/pieces";

export const TextContainer = ({ sx, ...props }) => (
  <GridItem
    sx={{
      gridColumn: [
        "span 12",
        "2 / span 10",
        "2 / span 23",
        "3 / span 20",
        "5 / span 16",
        "6 / span 13",
      ],
      display: "flex",
      flexDirection: ["column", "column", "row", "column", "column", "column"],
      ...sx,
    }}
    {...props}
  />
);
