import * as React from 'react'
import "./style.css"
const ButtonCustom = ({ style, clickHandler, children }) => {
  return (
    <>
      <div
        style={style}
        class="button-container">
        <button
          type="button"
          name="buttonCustom"
          onClick={clickHandler}
        >{children}</button>
      </div>

    </>
  )
}

export default ButtonCustom
