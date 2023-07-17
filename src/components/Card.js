import React from 'react';

const Card = (props) => {

  let anchor = () => {
    return (
      <a href={props.url4}>
        <button className="btn btn-primary">view more</button>
      </a>
    )
  }
  if (props.url4 !== '/smartphones' && props.url4 !== '/accessories' && props.url4 !== '/clothing') {
    anchor = () =>{
      return(
        <a href={props.url4} target='_blank'>
          <button className="btn btn-primary">buy now</button>
        </a>
      )
    }
  }
  
  const callanchor = anchor();

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
        {callanchor}
      </div>
    </div>
  );
};

export default Card;
