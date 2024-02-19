import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popural from '../Components/Popular/Popural'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetters from '../Components/NewsLetter/NewsLetters'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popural/>
      <Offers/>
      <NewCollections/>
      <NewsLetters/>
    </div>
  )
}

export default Shop
