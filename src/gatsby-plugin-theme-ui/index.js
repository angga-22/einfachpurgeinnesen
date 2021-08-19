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
  fontWeights: {
    ceraBold: 700,
    quincyBold: 800,
    normal: 'normal'
  },
  // remove this one.
  // fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],
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
      fontFamily: 'label',
      fontWeight: 'normal'
      // fontSize: ["40px", "50px"]
    },
    subHeading: {
      color: "text",
      fontFamily: 'body',
    },
    quote: {

    },
    paragraph: {
      color: "text",
      fontFamily: 'body',
      lineHeight: "175%",
      fontWeight: 'normal',
      fontSize: ["18px", "22px", "18px", "20px", "20px", "20px"]
    },
    smallParagraph: {
      color: "text",
      fontFamily: 'body',
      lineHeight: "150%",
      fontWeight: 'normal',
      fontSize: ["16px"]
    },
    button: {
      lineHeights: '175%',
      fontWeight: "ceraBold",
      fontSize: ["18px", "20px", "18px", "18px", "18px", "20px"],
      fontFamily: 'body',
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
      variant: 'text.button',
      color: 'text',
      mask: `url(${maskButton})`,
      display: 'inline-block',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      height: '100%',
      width: '100%',
      textAlign: 'center',
      borderRadius: '12px',
      cursor: 'pointer',
      backgroundColor: 'white',
      border: '1px solid white',
      transition: 'all 2s ease-out',
      '&:hover': {
        backgroundColor: 'white',
        mask: 'none',
        transition: 'all 2s'
      },
    },
    primaryBlack: {
      variant: 'text.button',
      color: 'white',
      mask: `url(${maskButton})`,
      display: 'inline-block',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      height: '100%',
      width: '100%',
      textAlign: 'center',
      borderRadius: '12px',
      cursor: 'pointer',
      backgroundColor: 'text',
      border: '1px solid text',
      transition: 'all 2s ease-out',
      '&:hover': {
        backgroundColor: 'text',
        mask: 'none',
        transition: 'all 2s'
      },
    },
    forms: {
      label: {
        fontSize: "16px",
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

