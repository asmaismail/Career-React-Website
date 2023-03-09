import React, {useState} from 'react'
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

const Navbar = () => { 
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);}

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
    <div className='flex flex-row w-full h-[70px] p-12 sticky top-0 shadow-lg bg-white z-50'>
    <div className=' w-[40%] flex mx-20 items-center'>
      <h1 className='text-yellow font-bold  text-[50px]'> <BsBook className='mt-3' /> </h1>
    <h1 className='text-blue font-bold text-[30px] mx-1 cursor-pointer'><Link to ="/">Sikkha</Link></h1>
    </div>
    <div className='w-[50%] flex justify-start items-center cursor-pointer'>
      <ul className='flex flex-row text-blue text-[20px]'>
        <li className='mx-5 hover:text-yellow'><Link to ="/about">About us</Link></li>
        <li className='mx-3 hover:text-yellow'><Link to ="/contact">Contact us</Link></li>
        <li className='mx-3 hover:text-yellow'><Link to ="/Courses">Courses</Link></li>
        <li className='mx-3 hover:text-yellow'><Link to ="/faq">FAQS's</Link></li>
        <li className='mx-3 hover:text-yellow'><Link to ="/blog">Blog</Link></li>
        {/* <li className='mx-3 hover:text-yellow'><Link to ="/event">Events</Link></li> */}
        <li className='mx-3 hover:text-yellow'>
             <div onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle} className='relative'>              <span>Pages</span>
               {showDropdown &&
                 <div className='absolute z-10 top-full w-[120px] left-0  bg-blue text-white gap-y-20 shadow-lg py-2 px-4'>
                   <ul>
                     <li><Link to='/event'>Events</Link></li>
                     <li className='border-t-2  border-gray-300'><Link to='/shop'>Shop</Link></li>
                   </ul>              </div>
          }
             </div>
           </li>


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

export default Navbar;
