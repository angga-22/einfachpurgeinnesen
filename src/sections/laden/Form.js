import * as React from 'react'
import {
  Box, Text,
  Label,
  Input,
} from 'theme-ui'
import { Button } from '@theme-ui/components'
import { StaticImage } from 'gatsby-plugin-image'
import underlineActive from '../../images/underline-active.svg'
import underlineInactive from '../../images/underline-inactive.svg'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'

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
    <GridWrapper>
      <GridItem
        sx={{
          gridColumn:
            [
              "1 / span 12",
              "2 / span 11",
              " 2 / span 18",
              "3 / span 17",
              "3 / span 12",
              " 2 / span 8"
            ]
        }}>

        {/* // sentence section  */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
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
      </GridItem>



      {/* // form section  */}
      <GridItem
        sx={{
          gridColumn:
            [
              "1 / span 12",
              "2 / span 10",
              "2 / span 22",
              "5 / span 15",
              "10 / span 11",
              " 13 / span 9"
            ],
          padding: ["34px 0 80px 0", "34px 2.7em 80px 2.7em", "34px 1em", "38px 30px", "38px 33px", "38px 49px"],
          display: 'flex',
          flexDirection: ["column", "column", "row", "row"],
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          position: 'relative',
          borderRadius: '12px',
          boxShadow: ["none", '0px 12px 24px rgba(0, 0, 0, 0.1)'],
          m: ["50px 0 0 0", "0 0 127px 0", "0 0 107px 0", "50px 0 136px 0", "0 0 215px 0", "180px 0 211px 0"],
          backgroundColor: ["primary"]
        }}
        as="form" onSubmit={handleSubmit}>

        <Box sx={{
          position: 'absolute',
          width: ["100px", "121px", "121px", "197px", "197px", "254px"],
          top: ["-7em", "-3em", "-6em", "-8.5em", "-12em", "-12em"],
          right: ['1.5em', "-2.4em", "-1.6em", "-5.4em", "-5em", "-8em"],
          zIndex: '-99'
        }}>
          <StaticImage

            src={'../../images/pink-crown.png'}
            alt="pink-crown" />
        </Box>

        {/* // firstName  */}
        <Box sx={{
          width: ["100%", "100%", "50%", "100%"],
          p: ["0", "0", '10px'],
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
              mb: ["50px", "50px", "32px", "50px", "50px"],
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

          p: ["0", "0", '10px']
        }}>
          <Label htmlFor="lastName"
            sx={{
              fontFamily: 'body',
            }}>Last Name </Label>
          <Input
            sx={{
              fontFamily: 'body',
              border: 'none',
              outline: 'none',
              mb: ["50px", "50px", "32px", "50px", "50px"],
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
          width: ["100%", "100%", "65%", "100%"],
          p: ["0", "0", '10px']
        }}>
          <Label htmlFor="email" sx={{ fontFamily: 'body' }}>email </Label>
          <Input
            sx={{
              fontFamily: 'body',
              border: 'none',
              outline: 'none',
              mb: ["50px", "50px", "32px", "50px", "50px"],
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
      </GridItem>

    </GridWrapper >
  )
}

export default Form
