import React from 'react';

import offer from '../assets/new.gif'

const Card = (props) => {

    let u4 = '/'; // Initial value for u4

    if (props.hasOwnProperty('url4')) {
        u4 = props.url4; // Update u4 if myProp is passed
    }

    return (
        <div className="card" style={{ width: '18rem', display: 'inline-block', margin: 50 }}>
            <div id="carouselExampleSlidesOnly" className="carousel slide" style={{ overflow: 'hidden', height: '300px' }} data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.url1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={props.url2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={props.url3} className="d-block w-100" alt="..." />
                    </div>
                </div>

            </div>
            <div className="card-body">
                <h5 className="card-title">{props.item_name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.item_price}</li>
                <li className="list-group-item">{props.item_specs}</li>
            </ul>
            <div className="card-body">
                <a href={u4}>
                    <button className="btn btn-primary"> view more</button><img src={offer} width={50} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Card;
