import React, { useState, useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterForNumericValues() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(MyContext);
  const [inputValues, setInputValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const arrayOfColumns = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const arrayOfOperators = ['maior que', 'menor que', 'igual a'];

  const handlGenerico = ({ target: { name, value } }) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <form>
      <label htmlFor="column-filter">
        Column:
        <select
          name="column"
          id="column-filter"
          data-testid="column-filter"
          value={ inputValues.column }
          onChange={ handlGenerico }
        >
          {arrayOfColumns.map((col) => (
            <option key={ col } value={ col }>
              {col}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Operator:
        <select
          name="comparison"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ inputValues.comparison }
          onChange={ handlGenerico }
        >
          {arrayOfOperators.map((oper) => (
            <option key={ oper } value={ oper }>
              {oper}
            </option>
          ))}
        </select>
      </label>

      <input
        name="value"
        id="value-filter"
        data-testid="value-filter"
        type="number"
        value={ inputValues.value }
        onChange={ handlGenerico }
      />

      <button
        data-testid="button-filter"
        type="button"
        name="button-filter"
        id="button-filter"
        onClick={ () => {
          setFilterByNumericValues([
            ...filterByNumericValues,
            inputValues,
          ]);
        } }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterForNumericValues;
