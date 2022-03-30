import React from 'react';
import TablePlanets from './components/TablePlanets';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <TablePlanets />
    </Provider>
  );
}

export default App;
