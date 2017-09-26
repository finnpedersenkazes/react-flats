import React, { Component } from 'react';

const Flat = (props) => {

  // JS dans un string. Interpolation classic dans JavaScript dans un string.
  const imageStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${props.flat.imageUrl})`
    }

  const handleClick = (event) => {
      props.handleClick(props.flat);
      event.preventDefault();
  }

  return (
    <div
      className="card"
      style={imageStyle}>
      <div className="card-category">{props.flat.price} {props.flat.priceCurrency}</div>
      <div className="card-description">
        <h2>{props.flat.name}</h2>
      </div>
      <a className="card-link" href="#" onClick={handleClick}></a>
    </div>
  );
}

export default Flat;

//JS dans JSX
