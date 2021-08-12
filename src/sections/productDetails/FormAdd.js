import * as React from 'react'
import { Text, Box } from '@theme-ui/components'
const FormAdd = () => {
  const [add, setAdd] = React.useState(0)
  const [adds, setAdds] = React.useState(0)
  const [result, setResult] = React.useState()

  const handlePlus = () => {
    setAdd(parseFloat(add + 1))
  }

  const handleMinus = () => {
    if (add < 0) {
      setAdd(0)
    }
    setAdd(parseFloat(add - 1))
  }


  // section
  const handlePluss = () => {
    setAdds(parseFloat(adds + 1))
  }

  const handleMinuss = () => {
    if (adds < 0) {
      setAdd(0)
    }
    setAdds(parseFloat(adds - 1))
  }

  return (
    <div>
      <Box>

        <Text>{add}</Text>
        <button onClick={handlePlus}>tambah</button>
        <button onClick={handleMinus}>kurang</button>
      </Box>
      <Box sx={{

        backgroundColor: 'red'
      }}>

        <Text>{adds}</Text>
        <button onClick={handlePluss}>tambah</button>
        <button onClick={handleMinuss}>kurang</button>
      </Box>

      <Text>{add + adds}</Text>
    </div>
  )
}

export default FormAdd
