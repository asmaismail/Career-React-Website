// import { render } from '@testing-library/react';
import {Route, Routes} from "react-router-dom";
import React from 'react';
import './App.css';
import FaqPage from "./Pages/FaqPage";  
import HomePage from "./Pages/HomePage";  
import ShopPage from "./Pages/ShopPage";  
import BlogPage from "./Pages/BlogPage";  
import EventPage from "./Pages/EventPage";  
import AboutPage from "./Pages/AboutPage"; 
import CoursesPage from "./Pages/CoursesPage"; 
import ContactPage from "./Pages/ContactPage";   


function App() {
  return (
    <>
    <Routes>
    <Route path="/faq" element={<FaqPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/courses" element={<CoursesPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/event" element={<EventPage />} />
    <Route path="/shop" element={<ShopPage />} />
    <Route path="/" element={<HomePage />} />



    </Routes>
    
    </>

);
}

export default App;
