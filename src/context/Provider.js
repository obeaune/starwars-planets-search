import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json());
      setData(results);
      console.log('results:', results);
    };
    fetchPlanets();
  }, [setData]);

  return (
    <MyContext.Provider
      value={ { data,
        filterPlanets,
        setFilterPlanets,
        filterByNumericValues,
        setFilterByNumericValues,
      } }
    >
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
