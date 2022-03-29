import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

function NumericFilter() {
  const { hCFFilter, hCSFilter,
    hCTFilter, hClick, thirdFilter, colums } = useContext(StarWarsContext);
  return (
    <div>
      <select
        data-testid="column-filter"
        type="select"
        onChange={ ({ target }) => hCFFilter(target) }
      >
        {colums.map((colum, index) => (
          <option key={ index } value={ colum }>{colum}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        type="select"
        onChange={ ({ target }) => hCSFilter(target) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ thirdFilter }
        onChange={ ({ target }) => hCTFilter(target) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ hClick }
      >
        {' '}
        Filtrar
        {' '}

      </button>
    </div>
  );
}

export default NumericFilter;
