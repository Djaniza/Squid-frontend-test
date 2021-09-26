import React, { useContext, useEffect } from 'react';
import logo from '../assets/logo.svg';
import { v4 as uuidv4 } from 'uuid';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Context from '../Context/Context';
import Card from './card';

function Main() {
  const { data } = useContext(Context);

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  if (!data.length) {
    return(
      <>
        <header>
          <img className="img-fluid" src={ logo } alt="squid-logo" />
        </header>
        <div className="progress">
          <div
            className="progress-bar background-dashed animate-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="80"
          ></div>
        </div>
      </>
    );
  }

  return (
    <>
      <header>
        <img className="img-fluid" src={ logo } alt="squid-logo" />
      </header>
      <main className="container">
        { data.map((insta) => (
          <Card
            key={ uuidv4() }
            image={ insta.imagens.thumbnail.url }
            link={ insta.link }
            username={ insta.usuario.username }
            upvotes={ insta.upvotes }
            comentarios={ insta.comentarios }
            calendar={ insta.criadoEm }
          />
        ))}
      </main>
    </>
  );
}

export default Main;
