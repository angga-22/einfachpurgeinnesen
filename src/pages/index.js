import React from 'react'

// Sections
// import {
//   Banner,
//   TopContent,
//   BottomContent
// } from 'sections/restaurantPage'

import Banner from '../sections/restaurantPage/Banner'
import TopContent from '../sections/restaurantPage/TopContent'
import BottomContent from '../sections/restaurantPage/BottomContent'

const Home = () => (
  <>
    <TopContent />
    <Banner />
    <BottomContent />
  </>
)

export default Home