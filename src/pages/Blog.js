import React from 'react'

import bg from "../assets/img1.webp";

import { motion } from 'framer-motion'

const Blog = () => {
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
              <a>Blog</a>
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
      <div>
        <div className="whoami">
          <div className="ques">
            Who<br /> are<br /> we
          </div>
          <div className="ans">
            buyWithPulkit is guided by four principles: customer obsession rather than competitor focus, passion for invention,
            commitment to operational excellence, and long-term thinking. buyWithPulkit strives to be Earth’s most
            customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click
            shopping, personalized recommendations, Prime, Fulfillment by buyWithPulkit, AWS, Kindle Direct Publishing, Kindle,
            Career Choice, Fire tablets, Fire TV, buyWithPulkit Echo, Alexa, Just Walk Out technology, buyWithPulkit Studios,
            and The Climate Pledge are some of the things pioneered by buyWithPulkit.
          </div>
        </div>
        <div className="card-row">
          <div className="card" style={{ width: '18rem', display: 'inline-block' }}>

            <h5 className="card-header">Leadership Principles</h5>
            <div className="card-body">
              <p className="card-text">Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide
                our discussions and decisions every day.</p>
              <a href="../home/index.html" className="btn btn-primary">learn more</a>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', display: 'inline-block' }}>

            <h5 className="card-header">Our Positions</h5>
            <div className="card-body">
              <p className="card-text">While our positions are carefully considered and deeply held, there is much room for healthy
                debate and differing opinions. We hope being clear about our positions is helpful.1</p>
              <a href="../home/index.html" className="btn btn-primary">learn more</a>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', display: 'inline-block' }}>

            <h5 className="card-header">Public Policy</h5>
            <div className="card-body">
              <p className="card-text">We engage with policymakers on a wide range of issues that are important to our customers and
                employees. Learn more about our views on current policy issues.</p>
              <a href="../home/index.html" className="btn btn-primary">learn more</a>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', display: 'inline-block' }}>

            <h5 className="card-header">Awards and Recognition</h5>
            <div className="card-body">
              <p className="card-text">We are honored to be recognized for the work we do on behalf of our customers, employees, and
                communities every day.1</p>
              <a href="../home/index.html" className="btn btn-primary">learn more</a>
            </div>
          </div>


        </div>
        <div className="img" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>

          <img src={bg} alt="" />
        </div>

        <div className="text">
          <div className="text-1">
            buyWithPulkit’s “Day 1” mentality is our approach of doing everything with the energy and entrepreneurial spirit of
            a new organization on its first day.
          </div>
          <div className="text-2">
            Working to earn and keep our customers’ trust is the single biggest driver of buyWithPulkit’s Day 1 approach.
            buyWithPulkit’s decision-making process that asks employees to consider whether an action is a one-way
            door—consequential and nearly irreversible—or a two-way door, easy to change course and go back. Discover more about
            who we are through our Annual Letters to Shareholders from 1997 through today.
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Blog
