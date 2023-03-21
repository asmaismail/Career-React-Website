import { Drawer } from "@mui/material";
import * as React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = ({ toggle, setToggle }) => {
  const MenuItems = [
    //  { name: "Home" },
    { name: "About", url: "/about" },
    { name: "Courses", url: "/courses" },
    { name: "Events", url: "/event" },
    { name: "Blogs", url: "/blog" },
    { name: "FAQ's", url: "/faq" },
    { name: "Shop", url: "/shop" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <div>
      <Drawer open={toggle}>
        <div className="w-[300px] cursor-pointer">
          <div className="flex flex-row p-[10px] justify-end">
            <FaTimes onClick={() => setToggle(false)} />
          </div>
          <ul className="p-[15px] flex flex-col gap-4">
            {MenuItems.map((val, index) => {
              return (
                <li key={index} className="text-[20px] cursor-pointer">
                  <Link to={val.url} onClick={() => setToggle(false)}>
                    {val.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;

