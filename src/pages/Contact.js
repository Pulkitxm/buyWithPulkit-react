import React from 'react';

import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(10%)' }}
      animate={{
        opacity: 1,
        transform: 'translateY(0px)',
        // Add a bounce animation to the translateY property
        motion: {
          staggerChildren: 0.2,
          bounce: {
            duration: 0.5,
            easing: 'ease-in-out',
          },
        },
      }}
      exit={{ opacity: 0, transform: 'translateY(10%)' }}
    >
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
        <a className="navbar-brand" style={{ cursor: 'pointer' }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a>Contact</a>
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
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <div style={{ display: 'inline' }}>
          <h1 style={{ display: 'inline' }}>Let's Get in Touch</h1>
          <br />
          <h1 style={{ display: 'inline' }}>
            Fill in the <a href="/login">sign in</a> form
          </h1>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6511976.73673109!2d-124.59134457211006!3d37.160399536495255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1683558369035!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;
