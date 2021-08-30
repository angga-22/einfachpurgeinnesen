import React from 'react'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'
import { Box, Text } from 'theme-ui'
import CardItem from './CardItem'


const initialItems = [
  {
    "id": "3",
    "name": "Kusche",
    "price": 5,
    "quantity": 3
  },

  {
    "id": "5",
    "name": "Schwarzer",
    "price": 2,
    "quantity": 1
  },

  {
    "id": "8",
    "name": "Bread",
    "price": 4,
    "quantity": 1
  },
]



const CardOverview = () => {

  const [items, setItems] = React.useState(initialItems)
  const [total, setTotal] = React.useState('')

  const handlePlus = (id) => {
    const updateItem = items.map(item => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          updateQuantity: item.quantity += 1
        }
        return updatedItem
      }
      return item
    })
    totalPrices()
    setItems(updateItem)
  }

  const handleMinus = (id) => {
    const updateItem = items.map(item => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          updateQuantity: item.quantity > 0 ? item.quantity -= 1 : item.quantity = 0
        }
        return updatedItem
      }
      return item
    })
    totalPrices()
    setItems(updateItem)
  }

  const totalPrices = () => {
    const totalPrice = items.map(item => item.price * item.quantity).reduce(function (a, b) {
      return a + b
    }, 0)
    setTotal(totalPrice)
  }

  React.useEffect(() => {
    totalPrices()
  }, [])

  return (
    <GridWrapper>
      <GridItem
        sx={{
          gridColumn: [" 4 / span 10"]
        }}
      >
        <Box sx={{
          backgroundColor: 'yellow',
          borderRadius: '20px',
          p: '20px'
        }}>
          {items.map(item => (
            <>
              <CardItem
                {...item}
                handlePlus={() => handlePlus(item.id)}
                handleMinus={() => handleMinus(item.id)}
              />
            </>
          ))}
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text variant="paragraph">Total</Text>
          <Text variant="paragraph" >
            {total}
          </Text>
        </Box>
      </GridItem>
    </GridWrapper>
  )
}

export default CardOverview
