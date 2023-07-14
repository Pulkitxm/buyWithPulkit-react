import React from 'react';

const Card = (props) => {
  return (
    <div className="card" style={{ width: '18rem', display: 'inline-block', margin: 50 }}>
      <div id="carouselExampleControls" className="carousel slide" style={{ overflow: 'hidden', height: '300px' }} data-bs-ride="carousel">
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
        <button className="carousel-control-prev" style={{ backgroundColor: 'rgb(139, 139, 139)' }} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" style={{ backgroundColor: 'rgb(139, 139, 139)' }} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.item_name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.item_price}</li>
        <li className="list-group-item">{props.item_specs}</li>
      </ul>
      <div className="card-body">
        <a href="/smartphones">
          <button className="btn btn-primary"> view more</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
