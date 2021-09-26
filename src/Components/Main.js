import React, { useContext } from 'react';
import logo from '../assets/logo.svg';
import { v4 as uuidv4 } from 'uuid';
import Context from '../Context/Context';
import Card from './card';

function Main() {
  const { data } = useContext(Context);

  if (!data.length) {
    return(
      <div className="progress">
        <div
          className="progress-bar background-dashed animate-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="80"
  ></div>
      </div>
    );
  }

  return (
    <>
      <header>
        <img className="img-fluid" src={ logo } alt="squid-logo" />
      </header>
      <main className="container-fluid">
        { data.map((insta) => {
          return (
          <Card
            key={uuidv4()}
            image={insta.imagens.thumbnail.url}
            link={ insta.link }
          />
        )})}
      </main>
    </>
  );
}

export default Main;
