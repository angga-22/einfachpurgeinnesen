import * as React from 'react'
import { Flex, Text, Box } from "@theme-ui/components";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Nav = () => {
  const [hamburgerClicked, setHamburgerClicked] = React.useState(false);

  const data = useStaticQuery(graphql`
    query MenuNavigation {
      allPurNavigationJson {
        edges {
          node {
            id
            label
            link
          }
        }
      }
    }
  `);

  const handleBurgerClicked = () => {
    setHamburgerClicked(() => !hamburgerClicked);
  };

  return (
    <div>
      <Flex
        as="nav"
        sx={{
          flexDirection: "row",
          justifyContent: ["space-around",
            "space-around",
            "space-around",
            "space-between",
            "space-around",
            "space-around"
          ],
          alignItems: "center",
          height: ["91px", "100px", "80px", "100px", "100px", "100px"],
          position: "relative",
          marginBottom: ["40px", "32px", "16px", "65px", "64px", "155px"]
        }}
      >
        <Box
          onClick={handleBurgerClicked}
          sx={{
            backgroundColor: "primary",
            cursor: "pointer",
            "@media screen and (min-width: 834px)": {
              display: "none",
            },
          }}
        >
          <Text
            sx={{
              cursor: "pointer",
              display: "block",
              marginBottom: "5px",
              width: "28px",
              height: "4px",
              backgroundColor: "black",
              borderRadius: "4px",
              transition: "all 0.5s",
              transformOrigin: "0 0",
              transform: hamburgerClicked
                ? "rotate(45deg) translate(-1px, -1px)"
                : "rotate(0)",
            }}
          ></Text>
          <Text
            sx={{
              cursor: "pointer",
              marginBottom: "5px",
              display: hamburgerClicked ? "none" : "block",
              opacity: hamburgerClicked ? "0" : "1",
              width: "28px",
              height: "4px",
              backgroundColor: "black",
              borderRadius: "4px",
              transition: "all 0.5s",
            }}
          >
            {" "}
          </Text>
          <Text
            sx={{
              cursor: "pointer",
              display: "block",
              marginBottom: "5px",
              width: "28px",
              height: "4px",
              backgroundColor: "black",
              borderRadius: "4px",
              transition: "all 0.5s",
              transformOrigin: "0 100%",
              transform: hamburgerClicked
                ? "rotate(-45deg) translate(-1px, 0)"
                : "rotate(0)",
            }}
          ></Text>
        </Box>
        {/* //logo pur  */}
        <Box sx={{
          width: ["43px", "55px", "55px", "63px", "63px", "63px"]
        }}>
          <StaticImage
            src={"../../images/logo-pur.png"}
            alt="logo-pur"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: [
              "column",
              "column",
              "column",
              "column",
              "row",
              "row",
            ],
            position: [
              "absolute",
              "absolute",
              "absolute",
              "static",
              "static",
              "static",
            ],
            justifyContent: "space-evenly",
            width: ["100%", "100%", "100%", "80%", "65%", "60%"],
            zIndex: "1",
            backgroundColor: 'primary',
            '@media screen and (max-width: 834px)': {
              backgroundColor: 'red'
            },
            alignItems: "center",
            top: "100px",
            transition: "all 1s",
            transform: hamburgerClicked
              ? "translateX(0)"
              : [
                "translateX(-120%)",
                "translateX(-120%)",
                "translateX(-120%)",
                "translateX(-120%)",
                "translate(0)",
                "translate(0)",
              ],
          }}
        >
          {data.allPurNavigationJson.edges.map((menu) => (
            <Link
              key={menu.node.id}
              to={menu.node.link}
              activeStyle={{
                borderBottom: '1px solid black'
              }}
              style={{
                color: "#000",
                fontWeight: "normal",
                fontSize: 2,
                textDecoration: "none",
                '@media screen and (minWidth: 812px)': {
                  // height: '200px'
                }
              }}
            >
              <Text variant="paragraph"> {menu.node.label} </Text>
            </Link>
          ))}
        </Box>
        <Box>
          <Text>5</Text>
          <StaticImage
            src={"../../images/bi_cart.png"}
            width="30"
            alt="cart-icon"
          />
        </Box>
      </Flex>
    </div>
  );
};

export default Nav;
