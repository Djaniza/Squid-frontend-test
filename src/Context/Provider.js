import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const newData = useRef(data);

  useEffect(() => {
    const getPosts = async () => {
    const endpoint = 'https://us-central1-squid-apis.cloudfunctions.net/test-front-basic';
    const result = await fetch(endpoint);
    if (!result.ok) return console.log('Erro na requisição');
    const influencers = await result.json();
    await setData(influencers);
    newData.current = influencers.results;
    };
    getPosts();
  }, [setData]);

  console.log(data);

  const store = {
    data,
    setData,
    newData
    }

    return(
        <Context.Provider value={ store } >
            { children }
        </Context.Provider>
    );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
