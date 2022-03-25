import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const api = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setApi] = useState([]);

  // DidMount - uma callback e uma lista vazia
  useEffect(() => {
    const planets = async () => {
      const { results } = await fetch(api).then((response) => response.json());
      setApi(results);
    };
    planets();
  }, []);
  return (
    <main>
      <StarWarsContext.Provider value={ { data } }>
        {children}
      </StarWarsContext.Provider>
    </main>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

// link opcional: https://swapi.dev/api/planets/
