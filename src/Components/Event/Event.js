import React from "react";
import picture from "../../Assets/pic.jpg"; 
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Navbar from '../Navbar/index'
import Footer from '../Footer/index'
import Brand from '../Brand/Brand'
const Event = () => {
  return (
    <>
    <Navbar/>
    <Breadcrumb pageName="Our Event"/>
    <div className="flex flex-wrap">
      {picture.map((picture, index) => (
        <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={index}>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-48 object-cover"
              src={picture.imageUrl}
              alt={picture.alt}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{picture.title}</h3>
              <p className="text-gray-700 text-sm">{picture.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Brand/>
    <Footer/>
    </>
  );
}

export default Event;
