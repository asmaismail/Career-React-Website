import React from 'react'
import {TfiHeadphoneAlt} from 'react-icons/tfi'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {RiPinterestLine} from 'react-icons/ri'
import {TfiGoogle} from 'react-icons/tfi'
import {BsBook} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import {BsCart} from 'react-icons/bs'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const index = () => {
  return (
    <>
    <div className='flex flex-row w-full h-[40px] bg-blue top-0'>
      <div className='flex flex-row w-[80%]'>
      <div className='flex text-[20px] text-yellow justify-center items-center w-40 hover:text-white'> <TfiHeadphoneAlt/> 
      <h1 className='flex text-[10px] text-white justify-center items-center'>+0123456789</h1>
      </div>
      <div className='border-r-2 mt-2 border-white h-6'></div>
      <div className='flex text-[20px] text-yellow justify-center items-center w-40 hover:text-white'><HiOutlineMail/>
      <h1 className='flex text-[10px] text-white justify-center items-center'>support@gmail.com</h1>
      </div>
      </div>
      <div className='flex flex-row w-[20%] cursor-pointer'>    
      <div className='flex text-[15px] text-yellow justify-center items-center  hover:text-white w-10'><FaFacebookF/>
      </div><div className='border-r-2 border-white h-6 gap-8 mt-2'></div>
      <div className='flex text-[15px] text-yellow justify-center items-center hover:text-white w-10'><BsTwitter/>
      </div><div className='border-r-2 border-white h-6 gap-8 mt-2'></div>
      <div className='flex text-[15px] text-yellow justify-center items-center hover:text-white w-10'><AiOutlineGlobal/>
      </div><div className='border-r-2 border-white h-6 gap-8 mt-2'></div>
      <div className='flex text-[15px] text-yellow justify-center items-center hover:text-white w-10'><TfiGoogle/>
      </div><div className='border-r-2 border-white h-6 gap-8 mt-2'></div>
      <div className='flex text-[15px] text-yellow justify-center items-center text-right hover:text-white w-10'><RiPinterestLine/>
      </div>
      
      </div>


    </div>
    <div className='flex flex-row w-full h-[70px] sticky top-0 shadow-lg bg-white z-50'>
    <div className=' w-[40%] flex mx-20'>
      <h1 className='text-yellow font-bold  text-[50px]'> <BsBook className='mt-3' /> </h1>
    <h1 className='text-blue font-bold text-[30px] mt-3 mx-1'>Sikkha</h1>
    </div>
    <div className='w-[50%] flex justify-start items-center cursor-pointer'>
      <ul className='flex flex-row text-blue text-[20px]'>
        <li className='mx-5 hover:text-yellow'><Link to ="/about">About us</Link></li>
        <li className='mx-3 hover:text-yellow'><Link to ="/contact">Contact us</Link></li>
        <li className='mx-3 hover:text-yellow'><Link to ="/Courses">Courses</Link></li>
        <li className='mx-3 hover:text-yellow'><Link to ="/faq">FAQS's</Link></li>
        <li className='mx-3 hover:text-yellow'><Link to ="/blog">Blog</Link></li>
        <li className='mx-3 hover:text-yellow'><Link to ="/event">Events</Link></li>

      </ul>
    </div>
    <div className='w-[10%] font-bold flex justify-center items-center cursor-pointer'>
      <h1> <BsSearch /></h1>
      <h1 className='mx-4'><BsCart /></h1>
    </div>
    </div>
    <div>
    </div>
    </>
  )
}

export default index
