import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  return (
    // <p>{console.log(data)}</p>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Rotation Period</td>
          <td>Orbital Period</td>
          <td>Diameter</td>
          <td>Climate</td>
          <td>Gravity</td>
          <td>Terrain</td>
          <td>Surface Water</td>
          <td>Population</td>
          <td>Films</td>
          <td>Created</td>
          <td>Edited</td>
          <td>URL</td>

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
