import React from 'react';

import logo from '../assets/icon.jpg';
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';
import twitter from '../assets/icons/twitter.png';
import yt from '../assets/icons/yt.png';

const Footer = () => {
  return (
    <div class="footer">
      <div class="top">
        <a href="/home">
          <div class="start">
            <img src={logo} alt="" />
            <div class="title" >
              buyWthPulkit
            </div>
          </div>
        </a>
        <div class="mid">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/About">Abouts us</a>
            </li>
            <li>
              <a href="/Contact">Contact us</a>
            </li>
            <li>
              <a href="/Offers">Offers</a>
            </li>
            <li>
              <a href="/Blogs">blogs</a>
            </li>
          </ul>
        </div>

        <div class="end">
          <ul>
            <li>
              <a href="./smartphones">Smartphones</a>
            </li>
            <li>
              <a href="./accessories">Accessories</a>
            </li>
            <li>
              <a href="./clothing">Clothing</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="bot-end">
        <ul>
          <li><img src={facebook} height="35px" width="50px" alt="" /></li>
          <li><img src={instagram} height="35px" width="50px" alt="" /></li>
          <li><img src={linkedin} height="35px" width="120px" alt="" /></li>
          <li><img src={twitter} height="35px" width="50px" alt="" /></li>
          <li><img src={yt} height="35px" width="120px" alt="" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
