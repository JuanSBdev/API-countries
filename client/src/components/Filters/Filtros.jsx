import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContinents } from '../../redux/actions';

export default function Filtros() {
  const dispatch = useDispatch();
  const [selectedContinent, setSelectedContinent] = useState('');

  const handleSelectChange = (event) => {
    event.preventDefault();
    setSelectedContinent(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(filterContinents(selectedContinent));
    console.log(selectedContinent)
  };

  return (
    <div>
      <h2>Filtros</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedContinent} onChange={handleSelectChange}>
          <option value="All">My List</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
        </select>
        <button type="submit">Filtrar</button>
      </form>
    </div>
  );
}
