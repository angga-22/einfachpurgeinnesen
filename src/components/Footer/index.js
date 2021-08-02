import * as React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
  return (
    <>
      <footer
        sx={{
          backgroundColor: 'secondary'
        }}
      >
        <p> Für die Schwiegermutter, Kinder, Freude oder für sich selbst, wenn sie einmal nicht vorbei kommen können. <span sx={{ fontWeight: 'bold' }}> Unser Onlineshop. </span> </p>
        <StaticImage
          src={'../../images/header-img.png'}
          alt="drink"
        />
      </footer>
    </>
  )
}

export default Footer
