import React from 'react'
import logo from '../assets/icon.jpg'

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg container-fluid navbar-dark bg-dark">
          <div class="container-fluid">
              <a href="/" class="navbar-brand head">
                  <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />              buyWithPulkit
              </a>
              <a class="navbar-brand" href="/">Home</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                          <ul class="navbar-nav">
                              <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Explore
                                  </a>
                                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                      <li><a class="dropdown-item " href="/smartphones">Smartphones</a></li>
                                      <li><a class="dropdown-item disabled" >Electronics</a></li>
                                      <li><a class="dropdown-item" href="/clothing">Clothing</a></li>
                                      <li><a class="dropdown-item" href="/accessories">Accessories</a></li>
                                      <li><a class="dropdown-item  disabled">Beauty and Personal Care</a></li>
                                      <li><a class="dropdown-item disabled">Home and Kitchen</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="/about">About Us</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="/contact">Contact Us</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="/offers">Offers</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="/blogs">Blogs</a>
                      </li>


                  </ul>
                  <form class="d-flex">
                      <a href="/login">
                          <a href="/login" class="btn btn-outline-success">Login/Signup</a>
                      </a>
                  </form>
              </div>
          </div>
      </nav>
  )
}

export default Navbar
