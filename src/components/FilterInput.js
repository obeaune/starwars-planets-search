import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterInput() {
  const { filterPlanets, setFilterPlanets } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFilterPlanets({
      ...filterPlanets,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <form>
      <input
        placeholder="Filter planets by name"
        type="text"
        name="filter"
        id="filter"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </form>
  );
}

export default FilterInput;
