import React from 'react';
import FilterForNumericValues from './components/FilterForNumericValues';
import FilterInput from './components/FilterInput';
import TablePlanets from './components/TablePlanets';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <h3>Project Star Wars - Trybe</h3>
      <FilterInput />
      <FilterForNumericValues />
      <TablePlanets />
    </Provider>
  );
}

export default App;
