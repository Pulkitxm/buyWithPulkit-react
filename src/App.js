import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';
//compenents
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <AnimatedRoutes/>
          <Footer />
        </div>
      </Router>

    </>
  );
};

export default App