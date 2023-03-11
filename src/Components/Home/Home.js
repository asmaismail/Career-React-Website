import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/index'
import Brand from '../Brand/Brand'
import Carousel from '../../Reuseables/Carousel' 
import Advisors from '../Advisor/Advisors'
import image1 from '../../Assets/course-1.jpg'
import image2 from '../../Assets/course-2.jpg'
import form from '../../Assets/home123.png'
import CounterUp from '../CounterUp/CounterUp'
import Array from '../../Reuseables/Array'
const data = [
  {
    image: image1,
    title: "Business Studies",
    button: "Business",
    description: "Description 1",
    icon1: "icon1",
    icon2: "icon2",
  },
  {
    image: image2,
    button: "Science",
    title: "Computer Engineering",
    description: "Description 2",
    icon1: "icon1",
    icon2: "icon2",
  },
]

const Home = () => {
  return (
    <>
     <Navbar/>
      <Carousel/>
      <div className='bg-blue  w-full h-auto -mt-16'>
        <div className='lg:mx-20 md:mx-10 mx-6 w-auto flex lg:flex-row  flex-col gap-x-5 '>
        <div className='bg-white lg:w-1/2 mt-20 mb-20 w-full h-full'>
          <img src={form} className='w-full'/>
          <div className='mx-6 mb-6'>
            <input type="text" placeholder="Your Name" className='mt-8 w-full py-4 border border-black border-solid'/>
            <input type="text" placeholder="Your Email" className='mt-8 w-full py-4 border border-black border-solid'/>
            <input type="text" placeholder="Your Phone #" className='mt-8 w-full py-4 border border-black border-solid'/>
            <input type="text" placeholder="Your Subject" className='mt-8 w-full py-4 border border-black border-solid'/>
                 <button className='rounded-3xl font-bold mt-6 py-3 px-7 bg-yellow text-black hover:bg-blue hover:text-white'>Admit Now</button>
          </div>

        </div>
        <div className='lg:w-1/2 mt-20 mb-20 w-full'>
          <div className='flex flex-row gap-x-48'>
            <div className='flex-col'>
            <h2 className='text-white font-bold text-[35px]'>Latest Events</h2>
            <p className='text-white mt-2'>Belis nisl adipiscing sapien sed malesu diame</p>
            </div>
            <div>
              <button className='px-8 py-3 text-white border font-bold border-solid  border-white hover:bg-yellow hover:text-black'>View All</button>
            </div>
          </div>
          <div>
            {/* <Array/> */}
          </div>
        </div>
       
        </div>
      </div>
      <Advisors/>
      <CounterUp/>

     <Brand/>
     
     <Footer /> 
    </>
  )
}

export default Home
