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
    <div className='w-50% flex justify-center h-[200px]'>
        <ul className='flex flex-row mt-16 mb-16 gap-x-20'>       
       <li> <img src={img} alt="brand pic"  /> </li>
       <li> <img src={img1} alt="brand pic" /> </li>
       <li> <img src={img2} alt="brand pic" /> </li>
       <li> <img src={img3} alt="brand pic" /> </li>
       <li> <img src={img4} alt="brand pic" /> </li>
       <li> <img src={img5} alt="brand pic" /> </li>
        </ul>
    </div>
    </>
  )
}

export default Brand
