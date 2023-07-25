import React from 'react'
import NavBar from '../../src/components/Nav/NavBar'
import Cards from '../../src/components/Cards/Cards'
import Filtros from '../../src/components/Filters/Filtros'

export default function Inicio() {
  return (
    <div>
        <NavBar/>
        <Filtros/>
        <Cards/>
    </div>
  )
}
