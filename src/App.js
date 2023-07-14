import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';
//compenents
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import Blog from './pages/Blog';
import Smartphones from './products/main/Smartphones';
import Accessories from './products/main/Accessories';
import Clothes from './products/main/Clothes';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/offers" element={<Offers/>} />
            <Route path="/blogs" element={<Blog/>} />
            <Route path="/clothing" element={<Clothes/>} />
            <Route path="/accessories" element={<Accessories/>} />
            <Route path="/smartphones" element={<Smartphones/>} />
          </Routes>

          <Footer />
        </div>
      </Router>

    </>
  );
};

export default App