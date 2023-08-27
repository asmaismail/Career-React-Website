import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/index'
import Brand from '../Brand/Brand'
import CardCarousel from '../../Reuseables/CardCarousel'
import Carousel from '../../Reuseables/Carousel'
import Shop from '../../Reuseables/Shop'
import img1 from '../../Assets/home-1.png'
import Advisors from '../Advisor/Advisors'
import form from '../../Assets/home123.png'
import CounterUp from '../CounterUp/CounterUp'
import img from '../../Assets/about-right.png'
import {AiFillStar} from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className='flex lg:flex-row flex-col mx-20 mb-28 gap-x-64 w-auto'>
        <div className='lg:w-1/2 w-full mt-5'>
          <h2 class="text-2xl font-bold mt-4 text-blue">Welcome to our Sikkha</h2>
          <p>Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod temin cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure repreh nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occcu idatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className='bg-blue text-white px-8 py-4 hover:bg-yellow hover:text-black mt-7'>Admit Now</button>
        </div>
        <div>
          <img src={img} alt="no image" />
        </div>
      </div>
      <div className='bg-blue  w-full h-auto -mt-16'>
        <div className='lg:mx-20 md:mx-10 mx-6 w-auto flex lg:flex-row  flex-col gap-x-5 '>
          <div className='bg-white lg:w-1/2 mt-20 mb-20 w-full h-100'>
            <img src={form} className='w-full' />
            <div className='mx-6 mb-6'>
              <input type="text" placeholder="Your Name" className='mt-8 w-full py-4 border border-black border-solid' />
              <input type="text" placeholder="Your Email" className='mt-8 w-full py-4 border border-black border-solid' />
              <input type="text" placeholder="Your Phone #" className='mt-8 w-full py-4 border border-black border-solid' />
              <input type="text" placeholder="Your Subject" className='mt-8 w-full py-4 border border-black border-solid' />
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

            <div className=" w-full flex lg:flex-row flex-col gap-x-10 bg-white shadow-sm mt-4">
        <div className='lg:w-1/2 w-full'>
        <img src={img1} className='w-full'/>
        </div>
        <div className="lg:w-1/2 w-full">
          <h2 className="text-xl font-bold mb-2 mt-4">Lisa McClanahan</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
 <br/><br/><span className='flex flex-row gap-x-2'>
<AiFillStar className='text-orange-500 font-bold'/><AiFillStar className='text-orange-500 font-bold'/>
<AiFillStar className='text-orange-500 font-bold'/>
<AiFillStar className='text-orange-500 font-bold'/></span> 

</p>
        </div>
 </div>

 <div className=" w-full flex lg:flex-row flex-col gap-x-10 bg-white shadow-sm mt-6">
        <div className='lg:w-1/2 w-full'>
        <img src={img1} className='w-full'/>
        </div>
        <div className="lg:w-1/2 w-full">
          <h2 className="text-xl font-bold mb-2 mt-4">Lisa McClanahan</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
 <br/><br/><span className='flex flex-row gap-x-2'>
<AiFillStar className='text-orange-500 font-bold'/><AiFillStar className='text-orange-500 font-bold'/>
<AiFillStar className='text-orange-500 font-bold'/>
<AiFillStar className='text-orange-500 font-bold'/></span> 

</p>
        </div>
 </div>
          </div>

        </div>
      </div>
      <Advisors />
      <CounterUp />
      <CardCarousel />
      <div className='bg-blue lg:h-screen h-auto'>
        <div className='mt-20 mb-10'>
          <h2 class="text-2xl font-bold text-white text-center">Our Shop</h2>
          <p class=" mt-3 text-white text-center">Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scelerisqu Nullam arcu liquam here was consequat.


          </p>
          <Shop className='mb-6' />
        </div>

      </div>

      <Brand />

      <Footer />
    </>
  )
}

export default Home
