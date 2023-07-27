import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../src/redux/actions';
import styles from './Detail.module.css'

export default function Detail() {
  const dispatch = useDispatch()
  const { id } = useParams();
  useEffect(()=>{
    dispatch(getDetail(id))
  },[])
  let detailed = useSelector(state => state.detail)
  return (
    <div className={styles.wrapper_top}>
   {detailed.map(country =>(
    <div className={styles.wrapper}>
      <div className={styles.wrapper_map}>
        <div className={styles.separador}>
          <h1>{country.nombre}</h1>
          <p>#{country.id}</p>
        </div>
        <div className={styles.imgContainer}>
          <img src={country.bandera} alt="flag" />
        </div>
      </div>
       <div className={styles.extras}>
         <p> {`Continente: ${country.continente}`}</p>
         <p>{`Subregion: ${country.subregion}`}</p>
         <p>{`Capital: ${country.capital}`}</p>
         <p>{`Area: ${country.area} km2`}</p>
         <p>{`Population: ${country.poblacion}`}</p>
       </div>
    </div>

    )
    )}

    </div>
  )
}
// ID (Código de tres letras).
// Nombre.
// Imagen de la bandera.
// Continente.
// Capital.
// Subregión (si tiene).
// Área (si tiene).
// Población.