import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DrawerComp from "./Drawer";
import Topbar from './Topbar'

const Navbar = () => {
  const [value, setValue] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Topbar />
      <AppBar sx={{ background: "#FFFFFF" }}>
        <Toolbar>
        <div style={{ display: "flex", alignItems: "center" }}>
            <AutoStoriesOutlinedIcon sx={{ transform: "scale(2)", color: "#002147", marginTop: "4px" }} />
            <Link to="/">
              <Typography sx={{ fontSize: "2rem", paddingLeft: "20%", color: "#002147" }}>
                 Sikkha
               </Typography></Link>

                     </div>

          {isMatch ? (
            <>
              {/* <Typography sx={{ fontSize: "2rem", paddingLeft: "10%", color: "#002147" }}>
                Sikkha
              </Typography> */}
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="#002147"
                color="#002147"
                fontSize="2rem"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="About us" sx={{marginLeft: "40px"}} component={Link} to="/about"/>
                <Tab label="Our Course" component={Link} to="/Courses" />
                <Tab label="Blog" component={Link} to="/blog"/>
                <Tab label="Events" component={Link} to="/event"/>
                <Tab label="Shop" component={Link} to="/shop"/>  
                <Tab label="Conact us" component={Link} to="/contact" />
                <Tab label="FAQ's"  component={Link} to="/faq"/>
              </Tabs>
              <SearchOutlinedIcon sx={{ marginLeft: "auto" , color: "#002147"}}/>
              <ShoppingCartOutlinedIcon sx={{ marginLeft: "10px" , color: "#002147"}}/>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;

