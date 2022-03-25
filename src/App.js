import React from 'react';
import './App.css';
import Table from './Table';
import StarWarsProvider from './StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <span>Hello, App!</span>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
