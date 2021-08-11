import * as React from 'react'
import {
  Box, Text,
  Label,
  Input,
} from 'theme-ui'
import { Button } from '@theme-ui/components'
import { StaticImage } from 'gatsby-plugin-image'
import Section from 'components/Box'
import underlineActive from '../../images/underline-active.svg'
import underlineInactive from '../../images/underline-inactive.svg'

const Form = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // let data = formData()
    console.log('form submitted successfully')
  }

  return (
    <Section
      sx={{
        padding: [
          "0 7.5vw",
          "0 9.4vw",
          "0 7.6vw",
          "0 10vw",
          "0 12vw",
          "0 13vw",
        ],
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>

        {/* // sentence section  */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: ["100%", "100%", "485px", "451px", "454px", "470px"]
          }}
        >
          <Text
            sx={{
              fontFamily: 'label',
              fontWeight: 'bold',
              wordWrap: 'break-word',
              pb: '24px',
              fontSize: ["54px", "65px", "50px", "51px", "67px", "68px"]
            }}
          >
            Kooperation?!
          </Text>
          <Text
            variant="paragraph"
            sx={{
              fontSize: ["18px", "22px", "18px", "20px", "20px", "20px"],
              mb: ["122px", "80px", "77px", "120px", "80px", null]
            }}>
            Seit 2005 überzeugt unser Bistro mit hervorragender Qualität und ist für viele ein Ort des kulturellen Austauschs geworden. Bewusst haben wir unser Umfeld stets so gestaltet, dass wir unserer Leidenschaft nachgehen.
          </Text>
        </Box>
      </Box>
      {/* // form section  */}
      <Box
        sx={{
          maxWidth: ["375px", "430px", "630px", "438px", "454px", "470px"],
          padding: ["34px"],
          margin: ["0 auto", "0 auto", "0 auto", "0 auto", "0 0 0 30%", "-10em 0 0 50%"],
          borderRadius: '12px',
          boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: ["column", "column", "row"],
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          position: 'relative',
          backgroundColor: 'red',
        }}
        as="form" onSubmit={handleSubmit}>
        <Box sx={{
          position: 'absolute',
          width: ["76px", "152px", "121px", "121px", "197px", "197px", "254px"],
          top: ["-5em", "-4em", "-7em", "-5.5em", "-12em"],
          right: ['1em', "-2em", "-1.6em", "-2.5em", "-5em"],
          zIndex: '-1'
        }}>
          <StaticImage
            src={'../../images/pink-crown.png'}
            alt="pink-crown" />
        </Box>
        {/* // firstName  */}
        <Box sx={{
          width: ["100%", "100%", "50%", "100%"],
          p: [null, null, '10px'],
        }}>
          <Label htmlFor="firstName"
            sx={{
              fontFamily: 'body',
            }}>First Name </Label>
          <Input
            sx={{
              fontFamily: 'body',
              border: 'none',
              outline: 'none',
              mb: '50px',
              background: `url(${underlineInactive})`,
              backgroundPosition: 'bottom',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              '&:focus': {
                background: `url(${underlineActive})`,
                backgroundPosition: 'bottom',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
              }
            }}
            variant="input"
            name="firstName"
            id="firstName"
            mb={3}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Box>

        {/* // lastName  */}
        <Box sx={{
          width: ["100%", "100%", "50%", "100%"],

          p: [null, null, '10px']
        }}>
          <Label htmlFor="lastName"
            sx={{
              fontFamily: 'body',
              width: ["100%", "100%", "50%"],
            }}>Last Name </Label>
          <Input
            sx={{
              fontFamily: 'body',
              border: 'none',
              outline: 'none',
              mb: '50px',
              background: `url(${underlineInactive})`,
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
              '&:focus': {
                background: `url(${underlineActive})`,
                backgroundPosition: 'bottom',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
              }
            }}
            type="lastName"
            name="lastName"
            id="lastName"
            mb={3}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        {/* // email  */}
        <Box sx={{
          width: ["100%", "100%", "80%", "100%"],

          p: [null, null, '10px']
        }}>
          <Label htmlFor="email" sx={{ fontFamily: 'body' }}>email </Label>
          <Input
            sx={{
              fontFamily: 'body',
              border: 'none',
              outline: 'none',
              mb: '50px',
              background: `url(${underlineInactive})`,
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
              '&:focus': {
                background: `url(${underlineActive})`,
                backgroundPosition: 'bottom',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
              }
            }}
            type="email"
            name="email"
            id="email"
            mb={3}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
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
