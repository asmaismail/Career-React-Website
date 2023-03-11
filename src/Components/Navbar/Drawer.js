// import React, { useState } from "react";
// import {
//   Drawer,
//   IconButton,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// const pages = ["About us", "Contact us", "Blog", "Our Courses", "Our Blog", "Pages"];
// const DrawerComp = () => {
//   const [openDrawer, setOpenDrawer] = useState(false);

//   return (
//     <React.Fragment>
//       <Drawer
//         anchor="right"
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//       >
//         <List>
//           {pages.map((page, index) => (
//             <ListItemButton key={index}>
//               <ListItemIcon>
//                 <ListItemText>{page}</ListItemText>
//               </ListItemIcon>
//             </ListItemButton>
//           ))}
//         </List>
//       </Drawer>
//       <IconButton
//         sx={{ color: "#002147", marginLeft: "auto" }}
//         onClick={() => setOpenDrawer(!openDrawer)}
//       >
//         <MenuIcon color="#002147" />
//       </IconButton>
//     </React.Fragment>
//   );
// };

// export default DrawerComp;

import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { name: "About us", url: "/about" },
  { name: "Contact us", url: "/contact" },
  { name: "Blog", url: "/blog" },
  { name: "Our Courses", url: "/Courses" },
  { name: "Our Blog", url: "/blog" },
  { name: "Event", url: "/event" },
  { name: "Shop", url: "/shop" },
  { name: "FAQ's", url: "/faq" },
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      {/* <div className="overflow-x-hidden"> */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index} component="a" href={page.url}>
              <ListItemIcon />
              <ListItemText primary={page.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#002147", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="#002147" />
      </IconButton>
      {/* </div> */}
    </React.Fragment>
  );
};

export default DrawerComp;

