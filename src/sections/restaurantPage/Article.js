import * as React from "react";
import { Paragraph } from "theme-ui";
import { GridWrapper } from "@thepuzzlers/pieces";
import { TextContainer } from "./components";

const Article = ({ firstParagraph, secondParagraph, sx }) => {
  return (
    <GridWrapper sx={sx}>
      <TextContainer>
        <Paragraph
          sx={{
            pr: ["0", "0", "37px", "0", "0", "0"],
            pb: ["20px", "20px", "0", "20px", "20px", "20px"],
          }}
          variant="paragraph"
        >
          {firstParagraph}
        </Paragraph>
        <Paragraph variant="paragraph">{secondParagraph}</Paragraph>
      </TextContainer>
    </GridWrapper>
  );
};

export default Article;
