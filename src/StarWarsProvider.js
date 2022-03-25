import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const api = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState([]);
  const [newInput, setNewInput] = useState('');
  const [newData, setNewData] = useState([]);
  const [filterByName, setSearchFilter] = useState([]);

  // DidMount - uma callback e uma lista vazia
  useEffect(() => {
    const planets = async () => {
      const { results } = await fetch(api).then((response) => response.json());
      setData(results);
      setNewData(results);
    };
    planets();
  }, []);

  useEffect(() => {
    const starWarsInput = newData.filter((newDt) => newDt
      .name.toLowerCase().includes(newInput));
    setData(starWarsInput);
    setSearchFilter({ name: newInput });
  }, [newInput]);

  const handleChangeInput = (target) => {
    setNewInput(target.value);
    console.log(target);
  };

  const totProps = {
    data,
    handleChangeInput,
    newInput,
    filterByName,
  };
  return (
    <main>
      <StarWarsContext.Provider value={ totProps }>
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
