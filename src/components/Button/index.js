import * as React from 'react'
import { Button } from '@theme-ui/components'

const PrimaryButton = ({ onClick, children, sx, ...rest }) => {
  return (
    <Button
      // variant="primaryWhite"
      type="button"
      onClick={onClick}
      sx={{
        position: 'relative',
        mask: 'url("../../images/button-vector.png")',
        zIndex: '99',
        backgroundColor: 'blue',
        ...sx
      }}
      {...rest}
    >{children}</Button>
  )
}

export default PrimaryButton
