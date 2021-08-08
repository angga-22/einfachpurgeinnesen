
export default {
  colors: {
    text: '#2E2E2E',
    background: '#FFFCF9',
    primary: '#FFFCF9',
    secondary: '#FDC601',
    white: '#fff',
    footer: '#fCF5DE',
    banner: '#070569'
  },
  fonts: {
    label: 'Quincy CF',
    body: 'Cera Round Pro',
  },
  fontWeights: [400, 800, 700, 800],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],
  lineHeights: {
    body: 1,
    heading: 1.2,
  },
  letterSpacings: {
    normal: "0",
    wide: "0.25em"
  },
  text: {
    heading: {
      color: "text",
      fontSize: 3,
      fontFamily: 'label',
    },
    subHeading: {
      color: "text",
      fontFamily: 'body',
      fontWeight: 1,
      fontSize: 3,
    },
    paragraph: {
      color: "text",
      fontFamily: 'body',
      lineHeight: "175%",
      fontSize: 2,
    },
    mainArticle: {
      color: "text",
      fontFamily: 'body',
      lineHeight: "175%",
      fontSize: ["18px", "22px", "16px", "20px", "20px", "22px"]
    }
  },

  // //top content
  //   40, 50, 50, 50, 56, 68

  //   //article content
  //   18, 22, 16, 20, 20, 22

  // //banner
  //     18, 20, 16, 20, 20, 20
  // 3, 4, 2, 4, 
  //     //footer font
  //     16, 20, 16, 20, 18, 18
  breakpoints: [
    '@media screen and (min-width: 376px)',
    '@media screen and (min-width: 640px)',
    '@media screen and (min-width: 812px) and (orientation: landscape)',
    '@media screen and (min-width: 834px)',
    '@media screen and (min-width: 1194px) and (orientation: landscape)',
    '@media screen and (min-width: 1440px)',
  ],
  buttons: {
    primary: {
      display: 'inline-block',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      lineHeights: '175%',
      fontWeight: 1,
      width: "100%",
      height: "100%",
      fontSize: [3, 4, 3, 3, 3, 4],
      textAlign: 'center',
      borderRadius: '12px',
      fontFamily: 'body',
      cursor: 'pointer',
      overflow: 'hidden',
      '&:focus': {
        outline: 'none'
      },

    }
  },
  styles: {
    root: {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
      backgroundColor: 'background',
    },
  }
}