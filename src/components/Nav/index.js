import * as React from 'react'
import { Flex, Text, Box } from "@theme-ui/components";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Breakpoints } from '../Breakpoints'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'

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
    <GridWrapper
      // as="nav"
      sx={{
        // display: 'flex',
        // flexDirection: "row",
        // justifyContent:
        //   ["space-around",
        //     "space-around",
        //     "space-around",
        //     "space-around",
        //     "space-around",
        //     "space-around"
        //   ],
        alignItems: "center",
        height: ["91px", "100px", "80px", "100px", "100px", "100px"],
        position: "relative",
        overflow: 'hidden'
      }}
    >
      {/* // burger menu  */}
      <GridItem
        onClick={handleBurgerClicked}
        sx={{
          backgroundColor: "primary",
          gridColumn: ["1 / 1", "1 / 1", "1 / 1", " 1 / 1", '1 / span 24', '1 / span 24'],
          cursor: "pointer",
          [Breakpoints.tabletLandscape]: {
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
      </GridItem>


      {/* //logo pur  */}
      <GridItem sx={{
        gridColumn: ["6 / span 6", "6 / span 6", "12 / span 12", "12 / span 12", "1 / span 1"],
        width: ["43px", "55px", "55px", "63px", "63px", "63px"]
      }}>
        <StaticImage
          src={"../../images/logo-pur.png"}
          alt="logo-pur"
        />
      </GridItem>


      {/* // navigation list  */}
      <GridItem
        sx={{
          gridColumn: ["5 / span 16"],
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
            "absolute",
            "static",
            "static",
          ],
          justifyContent: "space-between ",
          // width: ["100%", "100%", "100%", "80%", "65%", "60%"],
          zIndex: "1",
          backgroundColor: 'primary',
          '@media screen and (max-width: 700px)': {
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
              borderBottom: '1px solid text'
            }}
            style={{
              color: "#000",
              textDecoration: "none",
            }}
          >
            <Text sx={{
              fontFamily: 'body',
              fontWeight: "normal",
              lineHeight: "100%",
              fontSize: ["16px", "16px", "16px", "16px", "16px", "18px"],
            }}> {menu.node.label} </Text>
          </Link>
        ))}
      </GridItem>
      <GridItem
        sx={{
          gridColumn: ["12 / span 12", "12 /span 12", "24 / span 24", "24 / span 24"],
          display: 'flex',
          flexDirection: 'flex-start'
        }}
      >
        <StaticImage
          src={"../../images/bi_cart.png"}
          width="30"
          alt="cart-icon"
        />
        <Text>5</Text>
      </GridItem>
    </GridWrapper>
  );
};

export default Nav;
