import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import styles from './Cards.module.css';
import Filtros from '../Filters/Filtros';

import { getActivities } from '../../redux/actions';
const PAGE_SIZE = 10;

export default function Cards() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  let paises = useSelector(state => state.paises);
  const [currentPage, setCurrentPage] = useState(1);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return paises.slice(startIndex, endIndex);
  };

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(paises.length / PAGE_SIZE)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      {paises && paises.length > 0 ? (
        getCurrentPageItems().map((pais, index) => (
          <Card
            key={index}
            id={pais.id}
            name={pais.nombre}
            flag={pais.bandera}
            continent={pais.continente}
            capital={pais.capital}
            area={pais.area}
            subregion={pais.subregion}
            population={pais.poblacion}
          />
        ))
      ) : (
        <p>No hay países disponibles.</p>
      )}
      {paises && paises.length > PAGE_SIZE && (
        <div className={styles.pagination}>
          <button onClick={handlePreviousPage}>&laquo; </button>
          {Array.from({ length: Math.ceil(paises.length / PAGE_SIZE) }).map((_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
          <button onClick={handleNextPage}> &raquo;</button>
        </div>
      )}
    </div>
  );
}
