import React from 'react'
import img from '../../Assets/advisor-1.jpg'
import img1 from '../../Assets/advisor-2.jpg'
import img2 from '../../Assets/advisor-3.jpg'
import img3 from '../../Assets/advisor-4.jpg'
import { FaFacebookF } from 'react-icons/fa'
import {FaPinterestP} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
const Advisors = () => {
  return (
    <>
    <div className='flex flex-col justify-center content-center text-center mt-12'>
      <div className='flex text-center justify-center'><h1 className='font bold text-blue text-[35px]'>Our Experienced Advisors</h1></div>
      <div className='flex text-center justify-center'><p>Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scelerisqu Nullam arcu liquam here was consequat.</p></div>
    </div>
    <div class="flex flex-wrap justify-center mx-10 gap-x-10 mt-7 static z-40">
  <div class="relative w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/5 my-2 mx-2 rounded-md">
    <img class="w-full h-auto opacity-100 transition ease-in duration-500 transform hover:opacity-75 hover:scale-105" src={img} alt="Image 1"/>
    <div class="absolute inset-0 bg-gradient-to-tr from-yellow to-blue opacity-0 hover:opacity-75 transition ease-in duration-500">
      <h2 class="text-white text-2xl text-center m-auto pt-20 flex justify-center mt-10">Belis nisl adipiscing sapien malesu diame lacus eget erats
</h2>
<h2 class="text-white text-2xl text-center m-auto pt-20 flex justify-center"><FaFacebookF /><FaPinterestP/><AiOutlineTwitter/><FaLinkedinIn/></h2>
    </div>
  </div>
  <div class="relative w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/5 my-2 mx-2 rounded-md">
    <img class="w-full h-auto opacity-100 transition ease-in duration-500 transform hover:opacity-75 hover:scale-105" src={img1} alt="Image 1"/>
    <div class="absolute inset-0 bg-gradient-to-tr from-yellow to-blue opacity-0 hover:opacity-75 transition ease-in duration-500">
      <h2 class="text-white text-2xl text-center m-auto pt-20 flex justify-center mt-10">Belis nisl adipiscing sapien malesu diame lacus eget erats
</h2>
<h2 class="text-white text-2xl text-center m-auto pt-20 flex justify-center"><FaFacebookF /><FaPinterestP/><AiOutlineTwitter/><FaLinkedinIn/></h2>
    </div>
  </div>  <div class="relative w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/5 my-2 mx-2 rounded-md">
    <img class="w-full h-auto opacity-100 transition ease-in duration-500 transform hover:opacity-75 hover:scale-105" src={img2} alt="Image 1"/>
    <div class="absolute inset-0 bg-gradient-to-tr from-yellow to-blue opacity-0 hover:opacity-75 transition ease-in duration-500">
      <h2 class="text-white text-2xl text-center m-auto pt-20 flex justify-center mt-10">Belis nisl adipiscing sapien malesu diame lacus eget erats
</h2>
<h2 class="text-white text-2xl text-center m-auto pt-20 flex justify-center"><FaFacebookF /><FaPinterestP/><AiOutlineTwitter/><FaLinkedinIn/></h2>
    </div>
  </div>  <div class="relative w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/5 my-2 mx-2 rounded-md">
    <img class="w-full h-auto opacity-100 transition ease-in duration-500 transform hover:opacity-75 hover:scale-105" src={img3} alt="Image 1"/>
    <div class="absolute inset-0 bg-gradient-to-tr from-yellow to-blue opacity-0 hover:opacity-75 transition ease-in duration-500">
      <h2 class="text-white text-2xl text-center m-auto pt-20 flex justify-center mt-10">Belis nisl adipiscing sapien malesu diame lacus eget erats
</h2>
<h2 class="text-white text-2xl text-center m-auto pt-20 flex justify-center"><FaFacebookF /><FaPinterestP/><AiOutlineTwitter/><FaLinkedinIn/></h2>
    </div>
  </div>
</div>


      
    </>
  )
}

export default Advisors
