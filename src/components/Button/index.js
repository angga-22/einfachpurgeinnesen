import * as React from 'react'
import "./style.css"

import { Button as ThemeUIButton } from '@theme-ui/components'

const Button = ({ style, clickHandler, children, ...rest }) => {
  return (
    <ThemeUIButton
      className="button-container"
      style={style}
      type="button"
      onClick={clickHandler}
      {...rest}
    >{children}</ThemeUIButton>
  )
}

export default Button
