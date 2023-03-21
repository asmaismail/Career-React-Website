import React from 'react'
import img from '../../Assets/brand1.png'
import img1 from '../../Assets/brand2.png'
import img2 from '../../Assets/brand3.png'
import img3 from '../../Assets/brand4.png'
import img4 from '../../Assets/brand5.png'
import img5 from '../../Assets/brand6.png'


const Brand = () => {
  return (
    <>
      <div className='lg:w- flex justify-center lg:h-[200px] h'>
        <div className='flex lg:flex-row flex-col  mt-16 mb-16 lg:gap-x-20'>
          <div className='flex flex-row'>
           <img src={img} alt="brand pic" /> 
            <img src={img1} alt="brand pic" /> 
            <img src={img2} alt="brand pic" /> 
          </div>
          <div className='flex flex-row lg:mt-0 mt-10'>
            <img src={img3} alt="brand pic" /> 
            <img src={img4} alt="brand pic" /> 
            <img src={img5} alt="brand pic" /> 
          </div>

        </div>
      </div>
    </>
  )
}

export default Brand
