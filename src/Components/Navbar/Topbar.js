import React from "react";
import {  BsHeadphones } from "react-icons/bs";
// import {BsEnvelope} from 'react-icons/bs'
import {
  FaDribbble,
  FaFacebookF,
  FaGooglePlusG,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <>
      <div className="w-full px-[10px] md:px-[40px] py-[7px] bg-[#002049] gap-3 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 flex flex-row items-center ">
          <div className="flex flex-row  md:justify-start md:w-full gap-2  md:pr-0">
            <BsHeadphones className="text-[#EABD32] justify-end" />
            <span className="text-white text-[13px]">+123456789</span>
          </div>
          {/* <div className="flex flex-row  gap-1 justify-end md:w-full  md:pl-0">
            <BsEnvelope className="text-[#EABD32]" />
            <span className="text-white text-[13px]">support@gmail.com</span>
          </div> */}
        </div>
        <div className="md:w-1/2 w-full flex flex-row md:justify-end gap-6 justify-center items-center">
          <div className="pr-[15px] border-r-[1px]">
            <FaFacebookF className="text-[#EABD32] " />
          </div>
          <div className="pr-[20px] border-r-[1px]">
            <FaTwitter className="text-[#EABD32] " />
          </div>
          <div className="pr-[20px] border-r-[1px]">
            <FaDribbble className="text-[#EABD32] " />
          </div>
          <div className="pr-[20px] border-r-[1px]">
            <FaGooglePlusG className="text-[#EABD32] " />
          </div>
          <div>
            <FaPinterestP className="text-[#EABD32] " />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
