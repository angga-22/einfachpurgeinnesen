import * as React from 'react'
import "./style.css"

const ButtonCustom = ({ style, clickHandler, children }) => {
  return (
    <>
      <button
        class="button-container"
        style={style}
        type="button"
        onClick={clickHandler}
      >{children}</button>
    </>
  )
}

export default ButtonCustom
