import React from 'react';

function Card({ image, link }, key) {
  console.log(image);
  return(
    <a 
      rel="noopener noreferrer"
      href={ link }
      target="_blank"
      className="box"
      key={ key }
    >
      <img src={ image } alt="" className="fit-image" />
    </a>
  );
}

export default Card;