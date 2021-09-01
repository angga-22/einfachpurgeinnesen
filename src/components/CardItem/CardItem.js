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
      sx={{
        backgroundColor: 'white',
        pb: '20px',
        pt: '10px'
      }}
      key={id}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        mb: '-20px',
      }}>
        <Text
          variant="paragraph"
        >{name} </Text>
        <Text
          variant="paragraph"
        >{price * quantity} £</Text>
      </Box>
      <br />
      <button onClick={handleMinus}> - </button>
      <Text variant="paragraph">{quantity}</Text>
      <button onClick={handlePlus}>+</button>
    </Box>
  )
}

export default CardItem