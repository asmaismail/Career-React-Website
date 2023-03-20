import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { BsCart3, BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Topbar from './Topbar'
import SideBar from "./Sidebar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const MenuItems = [
    { name: "About", url: "/about" },
    { name: "Courses", url: "/Courses" },
    { name: "Events", url: "/event" },
    { name: "Blogs", url: "/blog" },
    { name: "FAQ's", url: "/faq" },
    { name: "Shop", url: "/shop" },
    { name: "Contact", url: "/contact"  },
  ];
  return (
    <>
    <Topbar/>
      <SideBar toggle={toggle} setToggle={setToggle} />
      <div className="w-full h-[80px] shadow-lg flex bg-white z-50 flex-row justify-between items-center md:px-[40px] sticky top-0">
        <div className="w-full md:w-[30%]">
          <a href="/"><img src={logo} alt="logo" className="cursor-pointer" /></a>
        </div>
        <div className="w-[55%] md:block hidden border-r-[1px] pr-[10px]">
          <ul className="flex flex-row justify-between uppercase font-semibold">
            {MenuItems.map((val, index) => {
              return (
                <>
                  <li key={index}>{val.name}</li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="md:w-[15%] w-full flex flex-row justify-end pr-[30px] md:pr-0 md:justify-start md:px-[50px] gap-6 items-center">
          <BsSearch className="text-[20px]" />
          <div className="relative">
            <BsCart3 className="text-[20px]" />
            <div className="absolute top-[-10px] right-[-10px] flex justify-center items-center p-[2px] bg-[#FFC30B] rounded-full w-[17px] h-[17px]">
              1
            </div>
          </div>
        </div>
        <div
          className="md:hidden block pr-[15px]"
          onClick={() => setToggle(true)}
        >
          <FaBars className="text-[20px]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
