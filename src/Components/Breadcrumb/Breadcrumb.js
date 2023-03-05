import React from 'react';
import img from '../../Assets/pic.jpg'

const Breadcrumb = ({ pageName}) => {
  return (
    <>
    <div className="flex items-center text-sm leading-5 font-medium">
      <img className="h-full w-full relative" src={img} alt="Logo" />
      <div className='absolute'>Home
      <span>{pageName}</span>
      </div>

    </div>
    </>
  );
};

export default Breadcrumb;
