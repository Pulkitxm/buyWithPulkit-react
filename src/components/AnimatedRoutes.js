import React from 'react'
import {  Route, Routes, useLocation } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Offers from '../pages/Offers';
import Blog from '../pages/Blog';
import Smartphones from '../products/main/Smartphones';
import Accessories from '../products/main/Accessories';
import Clothes from '../products/main/Clothes';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';

import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation();

  return (
      <AnimatePresence>
          <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/clothing" element={<Clothes />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/smartphones" element={<Smartphones />} />
              <Route path="/login" element={<Login />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </AnimatePresence>
  )
}

export default AnimatedRoutes