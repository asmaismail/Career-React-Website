import React from 'react'
import { FiHeadphones } from 'react-icons/fi'
import Navbar from '../Navbar/index'
import Footer from '../Footer/index'
import Brand from '../Brand/Brand'
import GlobalButton from '../../Reuseables/GlobalButton'
import GlobalInput from '../../Reuseables/GlobalInput'

const Contact = () => {
  return (
    <>
      <Navbar />
      

      <div>
      <h2 className='text-[#002147] font-bold mt-7 text-[30px] text-center'>
        Feel Free to Contact us</h2>

        <div className='w-full flex mt-6'> 
          <div className='w-[50%] bg-red-300'></div>
          <div className='w-[50%] bg-yellow-200'>
            <form action='#' method='POST'>
              <input type='text' autoComplete='off' placeholder='Name' name='name' required/>
              <input type='email' autoComplete='off' placeholder='Email' name='email' required/>
              <input type='text' autoComplete='off' placeholder='Subject' name='subject' required/>
              <input type='text' autoComplete='off' placeholder='Experience' name='experience' required/>
              <textarea name='message' cols='30' rows='6' placeholder='Your message' autoComplete='off' required></textarea>
              <GlobalButton
                        styleClass="bg-red-400 w-1/3 py-[7px] text-white rounded-[3px]"
                        title='Submit now'
                    />
            </form>
          </div>
                                                                
        </div>
        {/* map section */}
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
