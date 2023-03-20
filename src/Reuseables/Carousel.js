import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import image1 from '../Assets/slider-1.jpg';
import image2 from '../Assets/slider-2.jpg';
import image3 from '../Assets/slider-3.jpg';

const images = [
    { src: image1, text: 'First image' },
    { src: image2, text: 'Second image' },
    { src: image3, text: 'Third image' }
  ];
  const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };
  
    useEffect(() => {
      const timer = setTimeout(() => {
        nextSlide();
      }, 3000);
  
      return () => clearTimeout(timer);
    }, [currentSlide]);
  
    return (
      <div className="relative w-full h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-[80%] transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image.src} alt={image.text} className="object-cover w-full h-full" />
            <div className="absolute top-[30%] left-[40%] transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-4xl font-bold mt-80  text-white">No nation can prosper in life without education</h2>
              <h2 className="text-[15px]  text-white mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numqua</h2>
<button className='rounded-md flex justify-center items-center content-center text-center px-6 py-4 mt-10 font-bold bg-yellow text-white hover:text-black hover:bg-white'>Admit Now</button>
            </div>
          </div>
        ))}
        <FaArrowAltCircleLeft
          className="absolute top-[40%] left-1 text-4xl text-white cursor-pointer"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="absolute top-[40%] right-4 text-4xl text-white cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    );
  };

  export default Carousel;
    