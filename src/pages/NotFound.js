import React from 'react';

import _404 from '../assets/404.gif'

const NotFound = () => {
    return (
        <>
            <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
                <a className="navbar-brand" style={{ cursor: 'pointer' }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <a href="/about">About</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <a href="/contact">Contact</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <a href="/offers">Offers</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <a href="/blogs">Blogs</a>
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
            <div className="not-found-container">
                <h1 className="not-found-heading">404 - Page Not Found</h1>
                <p className="not-found-description">
                    Oops! The page you are looking for does not exist.
                </p>
                <img
                    src={_404}
                    alt="Page Not Found"
                    className="not-found-image"
                />
                <p className="not-found-back-link">
                    <a href="/">Go back to the home page</a>
                </p>
            </div>
        </>
    );
};

export default NotFound;