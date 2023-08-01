import React from 'react'
import NavBar from '../../src/components/Nav/NavBar'
import Cards from '../../src/components/Cards/Cards'
import Filtros from '../../src/components/Filters/Filtros'
import styles from './Inicio.module.css'

export default function Inicio() {
  return (
    <div className={styles.wrapper}>
        <NavBar/>
        <Filtros/>
        <Cards/>
    </div>
  )
}
