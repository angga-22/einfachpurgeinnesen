import { theme as defaultTheme } from '@thepuzzlers/pieces'
import maskButton from '../images/button-vector.png'
import { Breakpoints } from '../components/Breakpoints'

export default {
  colors: {
    text: '#2E2E2E',
    background: '#FFFCF9',
    primary: '#FFFCF9',
    secondary: '#FDC601',
    white: '#fff',
    footer: '#fCF5DE',
    banner: '#070569',
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
  //typography
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
    },
    paragraphShopOverview: {
      color: "text",
      fontFamily: "body",
      fontWeight: "normal",
      lineHeight: "175%",
      fontSize: ["18px", "22px", "18px", "20px", "20px", "20px"]
    },
    footerContentText: {
      color: "text",
      fontFamily: 'body',
      fontWeight: "normal",
      lineHeight: ["28px", "35px", "28px", "31.5px", "31.5px", "31.5px"],
      fontSize: [2, 4, 2, 3, 3, 3]
    }
  },
  breakpoints: [
    //phone portrait was the first value in container, total value is 6 for each container
    Breakpoints.phonePortraitXl,
    Breakpoints.phoneLandscape,
    Breakpoints.tabletPortrait,
    Breakpoints.tabletLandscape,
    Breakpoints.desktop
  ],
  grids: defaultTheme.grids,
  buttons: {
    primaryWhite: {
      mask: `url(${maskButton})`,
      display: 'inline-block',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      lineHeights: '175%',
      fontWeight: 1,
      height: '100%',
      width: '100%',
      fontSize: [3, 4, 3, 3, 3, 4],
      textAlign: 'center',
      borderRadius: '12px',
      fontFamily: 'body',
      cursor: 'pointer',
      color: 'text',
      backgroundColor: 'white',
      border: '1px solid white',
      transition: 'all 2s',
      '&:hover': {
        backgroundColor: 'white',
        mask: 'none',
        transition: 'all 2s'
      },
    },
    primaryBlack: {
      mask: `url(${maskButton})`,
      display: 'inline-block',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      lineHeights: '175%',
      height: '100%',
      width: '100%',
      fontWeight: 1,
      fontSize: [3, 4, 3, 3, 3, 4],
      textAlign: 'center',
      borderRadius: '12px',
      fontFamily: 'body',
      cursor: 'pointer',
      color: 'white',
      backgroundColor: 'text',
      border: '1px solid text',
      transition: 'all 2s',
      '&:hover': {
        backgroundColor: 'text',
        mask: 'none',
        transition: 'all 2s'
      },
    },
    forms: {
      label: {
        fontSize: 1,
        fontWeight: 'normal'
      },
      input: {
        border: 'none',
        outline: 'none'
      }
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

