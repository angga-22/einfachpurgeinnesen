import React from 'react'
import { Box, Text } from 'theme-ui'


const CardItem = ({
  id,
  name,
  price,
  quantity,
  handleMinus,
  handlePlus
}) => {


  return (
    <Box
      sx={{ backgroundColor: 'white', }}
      key={id}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Text
          variant="paragraph"
        >{name} </Text>
        <Text
          variant="paragraph"
        >{price * quantity}</Text>
      </Box>
      <br />
      <button onClick={handleMinus}> - </button>
      <Text variant="paragraph">{quantity}</Text>
      <button onClick={handlePlus}>+</button>
    </Box>

  )
}

export default CardItem