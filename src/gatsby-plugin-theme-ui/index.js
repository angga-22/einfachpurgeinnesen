export default {
  colors: {
    text: '#2E2E2E',
    background: '#FFFCF9',
    primary: '#FFFCF9',
    secondary: '#FDC601',
    white: '#fff',
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
      fontFamily: 'label'
    },
    subHeading: {
      color: "text",
      fontFamily: 'body',
      fontWeight: 1,
      fontSize: 2,
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
      height: "44px",
      width: '186px',
      fontWeight: 1,
      borderRadius: '12px',
      '&:hover': {
        color: 'text',
        bg: 'white',
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
