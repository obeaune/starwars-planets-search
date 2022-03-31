import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function TablePlanets() {
  const { data, filterPlanets, filterByNumericValues } = useContext(MyContext);

  const headerTitles = ['Name', 'Rotation Period', 'Orbital Period',
    'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL'];

  // https://stackoverflow.com/questions/47458697/using-filter-in-combination-with-includes-to-get-partial-matches
  const planetsNames = data
    .filter((planet) => planet.name.toLowerCase()
      .includes(filterPlanets.filterByName.name.toLowerCase()))
    .filter((planet) => filterByNumericValues
      .every(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        if (comparison === 'igual a') {
          return Number(planet[column]) === Number(value);
        }
        // Nunca chega nesse return, porque o valor comparison sempre vai ser um dos três acima.
        return true;
      }));

  return (
    <table>
      <thead>
        <tr>
          { headerTitles.map((title) => (
            <th key={ title }>
              {title}
            </th>))}
        </tr>
      </thead>
      <tbody>
        { planetsNames.map((planet, index) => (
          <tr key={ index }>
            {Object.values(planet).map((infos) => (
              <td key={ infos }>
                {infos}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

  );
}

export default TablePlanets;
