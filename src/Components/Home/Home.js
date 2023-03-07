import React from 'react'
import Navbar from '../Navbar/index'
import Footer from '../Footer/index'
import Brand from '../Brand/Brand'
import Carousel from '../../Reuseables/Carousel' 
import Advisors from '../Advisor/Advisors'

const Home = () => {
  return (
    <>
     <Navbar/>
      <Carousel/>
      <Advisors/>
     <Brand/>
     <Footer /> 
    </>
  )
}

export default Home
