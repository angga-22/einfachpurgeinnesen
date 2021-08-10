import * as React from 'react'
import {
  Box, Text,
  Label,
  Input,
} from 'theme-ui'
import { Button } from '@theme-ui/components'
import { StaticImage } from 'gatsby-plugin-image'
import Section from 'components/Box'
const Form = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // let data = formData()
    console.log('form submitted successfully')
  }

  return (
    <Section>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Text
          sx={{
            fontFamily: 'label',
            fontWeight: 'bold',
            fontSize: ["54px", "65px", "50px", "51px", "67px", "68px"]
          }}
        >
          Kooperation?!
        </Text>
        <Text
          variant="paragraph"
          sx={{
            fontSize: ["18px", "22px", "18px", "20px", "20px", "20px"]
          }}>
          Seit 2005 überzeugt unser Bistro mit hervorragender Qualität und ist für viele ein Ort des kulturellen Austauschs geworden. Bewusst haben wir unser Umfeld stets so gestaltet, dass wir unserer Leidenschaft nachgehen.
        </Text>
      </Box>
      {/* // form section  */}
      <Box
        sx={{
          width: ["100%"],
          padding: ["10px"],
          margin: '0 auto',
          borderRadius: '12px',
          boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
        as="form" onSubmit={handleSubmit}>
        <StaticImage
          src={'../images/line.png'}
          alt="line"
        />
        <Input
          sx={{
            fontFamily: 'body',
            border: 'none',
            width: '100%',
          }}
          placeholder="first name"
          variant="input"
          name="firstName"
          id="firstName"
          mb={3}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          sx={{
            fontFamily: 'body',
            border: 'none'
          }}
          placeholder="last name"
          type="lastName"
          name="lastName"
          mb={3}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          sx={{
            fontFamily: 'body',
            border: 'none'
          }}
          placeholder="password"
          type="password"
          name="password"
          id="password"
          mb={3}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box sx={{
          border: '1px solid #2E2E2E',
          borderRadius: '13px',
          width: ["186px", "211px", "200px", "211px", null, null],
          height: ["44px", "57px", "44px", "57px", null, null]
        }}>
          <Button variant="primaryBlack" type="submit">Submit</Button>
        </Box>
      </Box>
    </Section>
  )
}

export default Form
