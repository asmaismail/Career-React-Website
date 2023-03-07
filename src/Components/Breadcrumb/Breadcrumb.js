import React from 'react';
import img from '../../Assets/pic.jpg'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Breadcrumb = ({ pageName}) => {
  return (
    <>
    <div className="flex items-center text-sm leading-5 justify-center font-medium cursor-pointer">
      <img className="h-full w-full relative" src={img} alt="Logo" />
      <div className=' flex-1 absolute font-bold text-white text-3xl text-center'><Link to ="/">Home</Link>
      <span className='flex-auto font-bold text-white text-3xl ml-5 text-center'>{pageName}</span>
      </div>

    </div>
    </>
  );
};

export default Breadcrumb;
