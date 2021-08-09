import React from 'react'
import { Button } from 'theme-ui'

import MenuOverlay from "./MenuOverlay"


const MenuButton = ({ sx = {} }) => {
  const [showOverlay, setShowOverlay] = React.useState(false)

  return <>
    <Button sx={sx} onClick={() => { setShowOverlay(true) }}>Open Menu</Button>
    {showOverlay &&
      <MenuOverlay handleClose={() => { setShowOverlay(false) }} />
    }
  </>
}

export default MenuButton
