import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const api = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState([]);
  const [newInput, setNewInput] = useState('');
  const [newData, setNewData] = useState([]);
  const [filterByName, setSearchFilter] = useState([]);
  const [firstFilter, setFirstFilter] = useState('population');
  const [secondFilter, setSecondFilter] = useState('maior que');
  const [thirdFilter, setThirdFilter] = useState(0);
  const [colums, setColum] = useState(['population', 'orbital_period',
    'rotation_period', 'surface_water', 'diameter']);
  // criar um estado para armazenar o nome das colunas já filtradas-criar um array para isso.
  useEffect(() => {
    const planets = async () => {
      const { results } = await fetch(api).then((response) => response.json());
      setData(results);
      setNewData(results);
    };
    planets();
  }, []);

  useEffect(() => {
    const starWarsInput = data.filter((newDt) => newDt
      .name.toLowerCase().includes(newInput));
    setNewData(starWarsInput);
    setSearchFilter({ name: newInput });
  }, [newInput]);

  const clickConditions = () => {
    // const firstFilterConst = newData.map((newDt) => newDt[firstFilter]);
    // console.log(firstFilterConst);
    // console.log(firstFilter);
    if (secondFilter === 'maior que') {
      const thirdFilterCond1 = newData
        .filter((planet) => Number(planet[firstFilter]) > Number(thirdFilter));
      setNewData(thirdFilterCond1);
      const removeColum = colums.filter((colum) => colum !== firstFilter);
      setColum(removeColum);
      // salvar o valor do firstFilter no array que for setado no estado que será criado em cada condicional
      console.log(removeColum);
    }
    if (secondFilter === 'menor que') {
      const thirdFilterCond2 = newData
        .filter((planet) => Number(planet[firstFilter]) < Number(thirdFilter));
      setNewData(thirdFilterCond2);
      const removeColum = colums.filter((colum) => colum !== firstFilter);
      setColum(removeColum);
      // const thirdFilterCond2 = firstFilterConst
      //   .filter((oneFilter) => Number(oneFilter) < Number(thirdFilter));
      // setNewData(thirdFilterCond2);
    }
    if (secondFilter === 'igual a') {
      const thirdFilterCond3 = newData
        .filter((planet) => Number(planet[firstFilter]) === Number(thirdFilter));
      setNewData(thirdFilterCond3);
      const removeColum = colums.filter((colum) => colum !== firstFilter);
      setColum(removeColum);
      // const thirdFilterCond3 = firstFilterConst
      //   .filter((oneFilter) => Number(oneFilter) === Number(thirdFilter));
      // setNewData(thirdFilterCond3);
      // console.log('entrou 3');
    }
    // const mapData = newData.map((index) => {
    //   const trueFilters = data.filter((newDt) => !newDt[firstFilter]
    //     .includes(newDt));
    //   console.log(trueFilters);
    //   return trueFilters;
    // });
    const mapData = data.filter((planet) => newData.includes(planet[firstFilter]));
    console.log(mapData);
    // setNewData(trueFilters);
  };

  const handleChangeInput = (target) => {
    setNewInput(target.value);
  };

  const hCFFilter = (target) => {
    setFirstFilter(target.value);
  };

  const hCSFilter = (target) => {
    setSecondFilter(target.value);
  };

  const hCTFilter = (target) => {
    setThirdFilter(target.value);
  };

  const hClick = () => {
    clickConditions();
  };

  const colunas = () => {
    const totColums = ['population', 'orbital_period',
      'rotation_period', 'surface_water', 'diameter'];
    setColum(totColums);
  };

  const totProps = {
    data,
    newData,
    handleChangeInput,
    newInput,
    filterByName,
    hCFFilter,
    hCSFilter,
    hCTFilter,
    hClick,
    thirdFilter,
    colums,
    colunas,
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
