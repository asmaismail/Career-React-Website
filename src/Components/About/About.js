import React from 'react'
import Brand from '../Brand/Brand'
import pic from '../../Assets/about_details_left_img.jpg'
import pic1 from '../../Assets/about_details_right_img.jpg'
import pic2 from '../../Assets/university.jpg'
import Footer from '../Footer/index'
import Navbar from '../Navbar/index'
import Advisors from '../Advisor/Advisors'
import CounterUp from '../CounterUp/CounterUp'
import Breadcrumb  from '../Breadcrumb/Breadcrumb'
const About = () => {
  return (
    <>
    <Navbar/>
      <Breadcrumb pageName="About us"/>
    <div class="flex flex-col lg:flex-row mx-20 gap-x-20 mt-7">
  <div class="lg:w-1/2">
    <img class="w-full h-[80%]" src={pic} alt="Image"/>
    <h2 class="text-2xl font-bold mt-4 text-blue">Who we are</h2>
    <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mollis elit, vel suscipit nulla. Sed eu tellus ut ante lobortis accumsan. Praesent id ex id elit consequat consequat ac et lectus.</p>
  </div>
  
  <div class="lg:w-1/2">
    <img class="w-full h-[80%]" src={pic1} alt="Image"/>
    <h2 class="text-2xl font-bold mt-4 text-blue">Our Mission vision</h2>
    <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mollis elit, vel suscipit nulla. Sed eu tellus ut ante lobortis accumsan. Praesent id ex id elit consequat consequat ac et lectus.</p>
  </div>
</div>
   
       <div className='mt-24 flex justify-center items-center mx-20'>
        <img src={pic2} className='w-full' />
      </div> 

      <CounterUp/>
      <Advisors/>
      <Brand/>
      <Footer />
    </>
  )
}

export default About
