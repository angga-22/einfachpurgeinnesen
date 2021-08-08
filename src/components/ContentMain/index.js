import * as React from 'react'
import { Box } from 'theme-ui'
import Banner from './Banner'
import Section from '../Box'
import TopContent from './TopContent'
import BottomContent from './BottomContent'
const ContentMain = () => (
  <Section
    sx={{
      padding: [
        "0"
        // "0 7.5vw",
        // "0 9.4vw",
        // "0 7.6vw",
        // "0 7.6vw",
        // "0 8.1vw",
        // "0 5.6vw",
      ],
    }}
  >
    <Box>
      <TopContent />
    </Box>
    <Banner />
    <Box>
      <BottomContent />
    </Box>
  </Section>
)


export default ContentMain
