import { Drawer } from "@mui/material";
import * as React from "react";
import { FaTimes } from "react-icons/fa";

const SideBar = ({ toggle, setToggle }) => {
  const MenuItems = [
    // { name: "Home" },
    { name: "About", url: "/about" },
    { name: "Courses" },
    { name: "Events" },
    { name: "Blogs" },
    { name: "Pages" },
    { name: "Shop" },
    { name: "Contact" },
  ];
  return (
    <div>
      <Drawer open={toggle}>
        <div className="w-[300px]">
          <div className="flex flex-row p-[10px] justify-end">
            <FaTimes onClick={() => setToggle(false)} />
          </div>
          <ul className="p-[15px] flex flex-col gap-4">
            {MenuItems.map((val, index) => {
              return (
                <>
                  <li key={index} className="text-[20px]">{val.name}</li>
                </>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;
