import React, { useEffect, useContext } from 'react';
import MyContext from '../context/MyContext';

function TablePlanets() {
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { data, setData } = useContext(MyContext);

  useEffect(() => {
    const fetchPlanets = async () => {
      const { results } = await fetch(endPoint).then((response) => response.json());
      setData(results);
      console.log('results:', results);
    };
    fetchPlanets();
  }, [setData]);

  const headerTitles = ['Name', 'Rotation Period', 'Orbital Period',
    'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL'];

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
        { data.map((planet, index) => (
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
