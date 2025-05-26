import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import CustomerReviews from '../components/CustomerReviews'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
      <CustomerReviews/>
    </div>
  )
}

export default Home