import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContinents, orderBy } from '../../redux/actions';
import styles from './Filtros.module.css'

export default function Filtros() {
  const dispatch = useDispatch();
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState('Alfabetico')

  const handleSelectChange = (event) => {
    event.preventDefault();
    setSelectedContinent(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(filterContinents(selectedContinent));
    console.log(selectedContinent)
  };

  const handleOrder = (e)=>{
    e.preventDefault();
    setSelectedOrder(e.target.value);
  }
  const submitOrder = (e)=>{
    e.preventDefault();
    dispatch(orderBy(selectedOrder))
    console.log(selectedOrder)
  }
  return (
    <div className={styles.wrapper}>
      <form
        className={styles.formFilter}
       onSubmit={handleSubmit}>
        <select 
          className={styles.selectFilter}
        value={selectedContinent}
         onChange={handleSelectChange}>
          <option value="All">My List</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
        </select>
        <button type="submit">Filter</button>
      </form>

      <form
       onSubmit={submitOrder}
        className={styles.formOrder}
      >
        <select value={selectedOrder} 
        onChange={handleOrder}
        className={styles.selectOrder}>
          <option value="Alfabetico">A-Z</option>
          <option value="Population">+Population</option>
        </select>
        <button type='submit' >Order</button>
      </form>

    </div>
  );
}
