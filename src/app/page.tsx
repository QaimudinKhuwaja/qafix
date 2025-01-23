import React from 'react'
import Hero from "./Components/Hero"
import SecondPage from "./Components/SecondPage"
import ProductsList from './Components/ProductList'
import FourthPage from "./Components/FourthPage"
import FifthPage from "./Components/FifthPage"
import SixthPage from "./Components/SixthPage"

const page = () => {
  return (
    <>

   <Hero />
    <SecondPage />
    <ProductsList />
    <FourthPage />
    <FifthPage />
    <SixthPage/>

    </>
  )
}

export default page