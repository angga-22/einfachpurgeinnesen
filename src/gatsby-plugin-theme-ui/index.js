export default {
  colors: {
    text: '#2E2E2E',
    background: '#FFFCF9',
    primary: '#FFFCF9',
    secondary: '#FDC601',
  },
  fonts: {
    label: 'Quincy CF',
    body: 'Cera Round Pro',
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 900
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  lineHeights: {
    body: 1,
    heading: 1.2,
  },
  letterSpacings: {
    normal: "0",
    wide: "0.25em"
  },
  text: {
    default: {
      color: "text",
      fontSize: 2,
    },
    subHeading: {
      fontWeight: "bold",
      fontSize: 2,
      lineHeight: "heading"
    }
  },
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
      color: '#fff',
      bg: '#000',
      '&:hover': {
        color: '#000',
        bg: 'tomato',
      },
    }
  },
  styles: {
    root: {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
      backgroundColor: 'background'
    },
  }
}
