import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  return (
    // <p>{console.log(data)}</p>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>

        </tr>
      </thead>
      <tbody>
        { data.map((dt, index) => (
          <tr key={ index }>
            <td>{ dt.name }</td>
            <td>{ dt.rotation_period}</td>
            <td>{dt.orbital_period}</td>
            <td>{dt.diameter}</td>
            <td>{dt.climate}</td>
            <td>{dt.gravity}</td>
            <td>{dt.terrain}</td>
            <td>{dt.surface_water}</td>
            <td>{dt.population}</td>
            <td>{dt.films}</td>
            <td>{dt.created}</td>
            <td>{dt.edited}</td>
            <td>{dt.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
