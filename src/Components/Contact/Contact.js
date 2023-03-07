import React from 'react'
import { FiHeadphones } from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {GrLocation} from 'react-icons/gr'
import Navbar from '../Navbar/index'
import Footer from '../Footer/index'
import Brand from '../Brand/Brand'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

const Contact = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb pageName="Contact us"/>
      <div>
      <h2 className='text-blue font-bold mt-7 text-[30px] text-center'>
        Feel Free to Contact us</h2>
       </div>
       <div className='flex lg:flex-row flex-col  w-auto  mx-20 mt-7'>
        <div className='lg:w-1/2 md:w-1/2 w-full'>
        <h2 className='text-blue font-bold mt-7 text-[30px] text-left'> Contact info</h2>
        <p>Lorem ipsum dolor sit amet, consecte adipisicing elit sed do eiusmod tempor incididunt.</p>
        <div className='flex flex-col'>
        <div className='mt-7 flex flex-row'><FiHeadphones className='p-3 rounded-full text-blue bg-yellow w-14 h-14 mt-1'/>
        <h2 className='font-bold block text-[20px] ml-5 mt-3'>Call us</h2>
        </div>
        <div className='block ml-14'>+0123456789</div>
        </div>

        <div className='flex flex-col'>
        <div className='mt-7 flex flex-row'><AiOutlineMail className='p-3 rounded-full text-blue bg-yellow w-14 h-14 mt-1'/>
        <h2 className='font-bold block text-[20px] ml-5 mt-3'>Email us</h2>
        </div>
        <div className='block ml-14'>support@gmail.com</div>
        </div>  <div className='flex flex-col'>
        <div className='mt-7 flex flex-row'><GrLocation className='p-3 rounded-full text-blue bg-yellow w-14 h-14 mt-1'/>
        <h2 className='font-bold block text-[20px] ml-5 mt-3'>Location</h2>
        </div>
        <div className='block ml-14'>123 Business Avenue, Hoston, USA</div>
        </div>        
        </div>
        <div className='lg:w-1/2 md:w-1/2 w-full'>
        <h2 className='text-blue font-bold mt-7 text-[30px] text-left'>Do you have any Questions?</h2>
        <form action='#' method='POST'>
          <div className='flex flex-col w-full mt-5'>
            <div className='flex lg:flex-row md:flex-row flex-col gap-x-3 lg:gap-y-0 md:gap-y-0 gap-y-3'>
            <input type='text' className='border border-solid border-black p-4 lg:w-1/2 md:w-1/2 w-full' autoComplete='off' placeholder='Name' name='name' required/>
              <input type='email' className='lg:w-1/2 md:w-1/2 w-full p-4 border-black border-solid border' autoComplete='off' placeholder='Email' name='email' required/>
            </div>
            <div className='flex lg:flex-row md:flex-row flex-col gap-x-3 mt-5 lg:gap-y-0 md:gap-y-0 gap-y-3'>
            <input type='text' className='border border-solid border-black p-4 lg:w-1/2 md:w-1/2 w-full' autoComplete='off' placeholder='Subject' name='subject' required/>
              <input type='text' className='border border-solid border-black p-4 lg:w-1/2 md:w-1/2 w-full' autoComplete='off' placeholder='Experience' name='experience' required/>
            </div>
            <div className='mt-5'>
            <textarea name='message' className='border border-solid border-black lg:px-64 px-32' cols='30' rows='6' placeholder='Your message' autoComplete='off' required></textarea>
            </div>
          </div>
          <button className='bg-blue text-white px-6 py-4 hover:bg-yellow hover:text-black mt-5'>Submit now</button>
            </form>

        </div>
       </div>
        {/* map section */}
        <div className='mt-7'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13619.378335212325!2d73.05147073955077!3d31.4184078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392243450c1147b7%3A0x7a1253803d90ccb9!2sCareer%20Institute%20-%20Jinnah%20Colony%20Campus!5e0!3m2!1sen!2s!4v1676615777197!5m2!1sen!2s" 
      width="100%" height="450" style={{border:0}}  allowfullscreen="" loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Brand/>
      <Footer />
    </>
  )
}

export default Contact
