import React from 'react'
import Brand from '../Brand/Brand'
import pic from '../../Assets/about_details_left_img.jpg'
// import pic1 from '../../Assets/about_details_right_img.jpg'
import pic2 from '../../Assets/university.jpg'
import img from '../../Assets/aboutpg.png'
import Footer from '../Footer/index'
import Navbar from '../Navbar/Navbar'
import Advisors from '../Advisor/Advisors'
import CounterUp from '../CounterUp/CounterUp'
import Breadcrumb  from '../Breadcrumb/Breadcrumb'
import CardCarousel from '../../Reuseables/CardCarousel'
import LinearProgress from '@mui/material/LinearProgress';


const About = () => {
  return (
    <>
    <Navbar/>
      <Breadcrumb pageName="About us"/>
      {/* <div className='w-auto mx-20 flex lg:flex-row flex-col gap-x-96 mt-10'>
        <div className='lg:w-1/2 w-full'>
          <h2 className='text-blue font-bold mt-10'>About Our Skills</h2>
          <p>Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod temin cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <LinearProgress variant="determinate" value={50} />
        </div>
        <div className='lg:w-1/2 w-full'>
          <img src={img} className='w-full'/>
        </div>
      </div> */}
    <div class="flex flex-col lg:flex-row mx-20 gap-x-20 mt-7">
  <div class="lg:w-1/2">
    <img class="w-full h-[80%]" src={pic} alt="Image"/>
    <h2 class="text-2xl font-bold mt-4 text-blue">Who we are</h2>
    <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mollis elit, vel suscipit nulla. Sed eu tellus ut ante lobortis accumsan. Praesent id ex id elit consequat consequat ac et lectus.</p>
  </div>
  
  <div class="lg:w-1/2">
    <img class="w-full h-[80%]" src={pic} alt="Image"/>
    <h2 class="text-2xl font-bold mt-4 text-blue">Our Mission vision</h2>
    <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mollis elit, vel suscipit nulla. Sed eu tellus ut ante lobortis accumsan. Praesent id ex id elit consequat consequat ac et lectus.</p>
  </div>
</div>
   
       <div className='mt-24 flex justify-center items-center mx-20'>
        <img src={pic2} className='w-full' />
      </div> 

      <CounterUp/>
      <Advisors/>
      <CardCarousel/>
      <Brand/>
      <Footer />
    </>
  )
}

export default About
