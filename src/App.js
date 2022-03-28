import React from 'react';
import './App.css';
import NumericFilter from './NumericFilter';
import Table from './Table';
import StarWarsProvider from './StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <span>Hello, App!</span>
      <NumericFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
