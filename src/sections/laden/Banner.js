/** @jsx jsx */
import * as React from 'react'
import { jsx, Box, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@theme-ui/components'
import Section from 'components/Box'
const Banner = () => {
  const [bp376, setBp376] = React.useState('')

  return (
    <Section sx={{
      backgroundColor: 'secondary'
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Text
          variant="subHeading"
          sx={{
            fontFamily: 'label',
            fontWeight: 'normal',
            fontSize: ["40px", "50px", "38px", "40px", "40px", "43px"],
            lineHeight: ["50px", "62px", "47px", "50px", "40px", "53px"]
          }}
        >
          Tu etwas Gutes rein, dann kommt etwas Gutes raus.
        </Text>
        <Box
          sx={{
            width: ["250px"]
          }}
        >
          <StaticImage
            src={'../../images/header-img-2.png'}
            alt="bottle"
          />
        </Box>
        <Text
          variant="paragraph"
          sx={{
            fontSize: ["18px", "22px", "18px", "20px", "20px", "20px"]
          }}
        >
          Eine kleine Karte, oftmals wechselnd und immer saisonal. Wir lieben es, mit den Produkten unserer Partner zu experimentieren und Neues zu entdecken.
        </Text>
        <Box sx={{
          border: '1px solid #2E2E2E',
          borderRadius: '13px',
          width: ["186px", "211px", "200px", "211px", null, null],
          height: ["44px", "57px", "44px", "57px", null, null]
        }}>
          <Button variant="primaryBlack">Jetzt einkaufen</Button>
        </Box>
      </Box>
    </Section>
  )
}

export default Banner
