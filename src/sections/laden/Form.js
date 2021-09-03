import * as React from "react";
import { Box, Heading, Paragraph } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import PrimaryButton from "../../components/PrimaryButton";
import FormField from "../../components/Input";

const Form = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted successfully");
  };

  return (
    <GridWrapper>
      {/* text section  */}
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "2 / span 11",
            " 2 / span 18",
            "3 / span 17",
            "3 / span 12",
            " 2 / span 8",
          ],
        }}
      >
        {/* // sentence section  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Heading
            variant="h2"
            sx={{
              fontWeight: "quincyBold",
              wordWrap: "break-word",
              pb: "24px",
              pr: ["2em", "0", "0"],
              fontSize: ["54px", "65px", "50px", "51px", "67px", "68px"],
            }}
          >
            Kooperation?!
          </Heading>
          <Paragraph
            variant="paragraph"
            sx={{
              mb: ["122px", "80px", "77px", "120px", "80px", null],
            }}
          >
            Seit 2005 überzeugt unser Bistro mit hervorragender Qualität und ist
            für viele ein Ort des kulturellen Austauschs geworden. Bewusst haben
            wir unser Umfeld stets so gestaltet, dass wir unserer Leidenschaft
            nachgehen.
          </Paragraph>
        </Box>
      </GridItem>

      {/* // form section  */}
      <GridItem
        sx={{
          gridColumn: [
            "1 / span 12",
            "2 / span 10",
            "2 / span 22",
            "5 / span 15",
            "10 / span 11",
            " 13 / span 9",
          ],
          padding: [
            "34px 0 80px 0",
            "34px 2.7em 80px 2.7em",
            "34px 1em",
            "38px 30px",
            "38px 33px",
            "38px 49px",
          ],
          display: "flex",
          flexDirection: ["column", "column", "row", "row"],
          flexWrap: "wrap",
          justifyContent: "space-between",
          position: "relative",
          borderRadius: "12px",
          boxShadow: ["none", "0px 12px 24px rgba(0, 0, 0, 0.1)"],
          m: [
            "50px 0 0 0",
            "0 0 127px 0",
            "0 0 107px 0",
            "50px 0 136px 0",
            "0 0 215px 0",
            "180px 0 211px 0",
          ],
          backgroundColor: ["primary"],
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: ["100px", "121px", "121px", "197px", "197px", "254px"],
            top: ["-7em", "-3em", "-6em", "-8.5em", "-12em", "-12em"],
            right: ["1.5em", "-2.4em", "-1.6em", "-5.4em", "-5em", "-8em"],
            zIndex: "-99",
          }}
        >
          <StaticImage src={"../../images/pink-crown.png"} alt="pink-crown" />
        </Box>

        <FormField
          htmlFor="firstName"
          label="firstName"
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          handleChange={(e) => setFirstName(e.target.value)}
        />

        <FormField
          htmlFor="lastName"
          label="lastName"
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          handleChange={(e) => setLastName(e.target.value)}
        />

        <FormField
          htmlFor="email"
          label="email"
          type="text"
          name="email"
          id="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />

        <PrimaryButton
          sx={{
            border: "1px solid #2E2E2E",
          }}
          handleClick={handleSubmit}
        >
          Jetzt einkaufen
        </PrimaryButton>
      </GridItem>
    </GridWrapper>
  );
};

export default Form;
