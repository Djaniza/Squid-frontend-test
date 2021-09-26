import React from 'react';
import { FaHeart, FaCalendarAlt } from 'react-icons/fa';
import { BsChatFill } from 'react-icons/bs';

function Card({ image, link, username, upvotes, comentarios, calendar }, key) {
  console.log(image);
  return(
    <a
      data-aos="fade-down"
      rel="noopener noreferrer"
      href={ link }
      target="_blank"
      className="box"
      key={ key }
    >
       <div className="mask">
          <p>{`@${username}`}</p>
          <p><FaHeart />{ upvotes }</p>
          <p><BsChatFill/>{ comentarios }</p>
          <p><FaCalendarAlt/>{ calendar }</p>
      </div>
      <img src={ image } alt="" className="fit-image" />
    </a>
  );
}

export default Card;