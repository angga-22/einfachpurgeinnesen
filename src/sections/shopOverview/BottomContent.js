/** @jsx jsx */
import { StaticImage } from 'gatsby-plugin-image';
import * as React from "react";
import { jsx, Box } from "theme-ui";
import { Button } from '@theme-ui/components';
import bg1s from "../../images/bg1.svg";
import bg2s from "../../images/bg2.svg";
import bg3s from "../../images/bg3.svg";
import bg4s from "../../images/bg4.svg";
import bg5s from "../../images/bg5.svg";
import bg6s from "../../images/bg6.svg";

const BottomContent = () => {
  const [bg1, setBg1] = React.useState(
    window.matchMedia("(min-width: 376px)").matches
  );
  const [bg2, setBg2] = React.useState(
    window.matchMedia("(min-width: 640px)").matches
  );
  const [bg3, setBg3] = React.useState(
    window.matchMedia("(min-width: 812px)").matches
  );
  const [bg4, setBg4] = React.useState(
    window.matchMedia("(min-width: 830px)").matches
  );
  const [bg5, setBg5] = React.useState(
    window.matchMedia("(min-width: 1194px)").matches
  );
  const [bg6, setBg6] = React.useState(
    window.matchMedia("(min-width: 1440px)").matches
  );

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setBg1(window.matchMedia("(min-width: 376px)").matches);
    });
    window.addEventListener("resize", () => {
      setBg2(window.matchMedia("(min-width: 640px)").matches);
    });
    window.addEventListener("resize", () => {
      setBg3(window.matchMedia("(min-width: 812px)").matches);
    });
    window.addEventListener("resize", () => {
      setBg4(window.matchMedia("(min-width: 830px)").matches);
    });
    window.addEventListener("resize", () => {
      setBg5(window.matchMedia("(min-width: 1194px)").matches);
    });
    window.addEventListener("resize", () => {
      setBg6(window.matchMedia("(min-width: 1440px)").matches);
    });
  });

  return (
    <div
      sx={{
        position: 'relative',
        height: ["406px", "569px", "427px", "535px", "569px", "569px"],
        overflowX: 'clip'
      }}
    >
      {bg6 ? (
        <img
          sx={{
            width: "100%",

          }}
          src={bg6s}
          alt="bg-bottom"
        />
      ) : bg5 ? (
        <img
          sx={{
            width: "100%",

          }}
          src={bg5s}
          alt="bg-bottom"
        />
      ) : bg4 ? (
        <img
          sx={{
            width: "100%",

          }}
          src={bg4s}
          alt="bg-bottom"
        />
      ) : bg3 ? (
        <img
          sx={{
            width: "100%",

          }}
          src={bg3s}
          alt="bg-bottom"
        />
      ) : bg2 ? (
        <img
          sx={{
            width: "100%",

          }}
          src={bg2s}
          alt="bg-bottom"
        />
      ) : bg1 ? (
        <img
          sx={{
            width: "100%",

          }}
          src={bg1s}
          alt="bg-bottom"
        />
      ) : (
        <img
          sx={{
            width: "100%",

          }}
          src={bg1s}
          alt="bg-bottom"
        />
      )}

      <Box
        sx={{
          position: 'absolute',
          top: ["5", "5", "6", "-2em", "-7em", "-8em"],
          right: ["-25px", "-40px", '-30px', "-30px", "-50px", "7em"],
          width: ["88px", "132px", "88px", "174px", "174px", "199px"],
          height: 'auto',
          zIndex: '1',
        }}
      >
        <StaticImage
          src={'../../images/bottle-jam.png'}
          alt="bottle-jam"
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: ["20%", "20%", "50%", "10%", "10%", "10%"],
          left: ["50%", "50%", "70%", "50%", "70%", "50%"],
          width: ["234px", "338px", "211px", "391px", "391px", "391px"],
          transform: 'translate(-50%, -50%)',
        }}
      >
        <StaticImage
          src={'../../images/bottle.png'}
          alt="bottle"
        />
        <Box
          sx={{
            top: ["150px", "220px", "140px", "250px", "250px", "250px"],
            right: ["120px", "180px", "110px", "200px", "200px", "200px"],
            zIndex: '2',
            position: 'absolute',
            width: ['60px', "70px", "60px", "100px"]
          }}
        >
          <StaticImage
            src={'../../images/label-bottle.png'}
            alt="bottle"
          />
        </Box>
        <Box
          sx={{
            top: ["5px", "5px", "1px", "1px", "1px", "1px"],
            right: ["40px", "80px", "30px", "1px", "100px", "70px"],
            zIndex: '2',
            position: 'absolute',
            width: ['60px', "70px", "60px", "100px"]
          }}
        >
          <StaticImage
            src={'../../images/multi-line.png'}
            alt="bottle"
          />
        </Box>
      </Box>
      <Box sx={{
        position: 'absolute',
        zIndex: '1',
        top: ["60%", "60%", "80%", "80%"],
        left: ["50%", "50%", "14%", "50%", "50%"],
        transform: 'translate(-50%, -50%)'
      }}>
        <button >Jetzt einkaufen</button>
      </Box>
    </div >

  );
};

export default BottomContent;
