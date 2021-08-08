import * as React from 'react'
import "./style.css"
import { Button } from '@theme-ui/components'

const Btn = ({
  style,
  clickHandler,
  children,
  sx,
  className,
  styleButton
}) => (
  <>
    <div
      style={style}
      className={className}>
      <Button
        style={styleButton}
        sx={{ ...sx }}
        type="button"
        name="buttonMenu"
        onClick={clickHandler}
      >{children}</Button>
    </div>
  </>
)

export default Btn
