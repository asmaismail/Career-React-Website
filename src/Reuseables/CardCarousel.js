import React, { useState } from 'react';
import img from '../Assets/event-3.jpg'
import {AiFillStar} from 'react-icons/ai'


const CardCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const handlePrevious = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  return ( 
      <>
    <div className="lg:flex-row flex-col mx-20 w-auto">
    <h2 class="text-2xl font-bold text-blue text-center">What Our Students Says</h2>
      <p class=" mt-3 text-black text-center">Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scelerisqu Nullam arcu liquam here was consequat.
</p>
    <div className='flex lg:flex-row flex-col gap-x-4'>
      <div className="lg:w-1/2 w-full flex flex-row  gap-x-10 bg-gray-100 shadow-sm py-14">
        <div className='w-1/4'>
        <img src={img}  className="rounded-full h-20% mt-2" />
        </div>
        <div className="w-3/4">
          <h2 className="text-xl font-bold mb-2">Lisa McClanahan</h2>
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

 <div className="lg:w-1/2 w-full flex flex-row  gap-x-10  bg-gray-100 shadow-sm py-14">
        <div className='w-1/4'>
        <img src={img}  className="rounded-full h-20% mt-2" />
        </div>
        <div className="w-3/4">
          <h2 className="text-xl font-bold mb-2">Lisa McClanahan</h2>
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
      <div className="flex justify-center items-center mt-4">
        <div className="flex justify-center items-center">
          <button onClick={handlePrevious} className="p-2 rounded-full bg-gray-300 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M6.177 8l4.096-4.096a.5.5 0 0 0-.707-.707l-4.5 4.5a.5.5 0 0 0 0 .707l4.5 4.5a.5.5 0 0 0 .707-.707L6.177 8z" />
            </svg>
          </button>
          <button onClick={handleNext} className="p-2 rounded-full bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M9.823 8l-4.096 4.096a.5.5 0 0 0 .707.707l4.5-4.5a.5.5 0 0 0 0-.707l-4.5-4.5a.5.5 0 0 0-.707.707L9.823 8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardCarousel;
