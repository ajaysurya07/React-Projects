import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewColletion from '../components/NewColletion/NewColletion'
import NewLetter from '../components/NewLetter/NewLetter'


const shop = () => {
  return (
    <main>
      <Hero />
      <Popular />
      <Offers />
      <NewColletion />
      <NewLetter />
   
    </main>
  )
}

export default shop