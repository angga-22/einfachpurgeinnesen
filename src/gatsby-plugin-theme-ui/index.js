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
    heading: 'inherit'
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  lineHeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  letterSpacings: {
    normal: "0",
    wide: "0.25em"
  },
  breakpoints: [
    '@media screen and (min-width: 375px)',
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
