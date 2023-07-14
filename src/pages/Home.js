import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// pages
import Accessories from '../products/home/Accessories';
import Clothes from '../products/home/Clothes';
import Smartphones from '../products/home/Smartphones';

const Home = () => {
  return (
    <div>
      <Accessories/>
      <Clothes/>
      <Smartphones/>
    </div>
  )
}

export default Home
