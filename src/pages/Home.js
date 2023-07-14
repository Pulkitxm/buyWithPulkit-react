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
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
        <a className="navbar-brand" style={{ cursor: 'pointer' }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <a>Home</a>
            </li>
          </ol>
        </a>
        <ul className="nav nav-pills">
          <li className="navbar-brand nav-item">
            <a className="nav-link" href="/smartphones">
              Smartphones
            </a>
          </li>
          <li className="navbar-brand nav-item">
            <a className="nav-link" href="/accessories">
              Accessories
            </a>
          </li>
          <li className="navbar-brand nav-item">
            <a className="nav-link" href="/clothing">
              Clothing
            </a>
          </li>
        </ul>
      </nav>
      <Smartphones/>
      <Accessories/>
      <Clothes/>
    </div>
  )
}

export default Home
