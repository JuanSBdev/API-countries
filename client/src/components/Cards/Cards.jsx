import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';
export default function Cards() {
    let paises = useSelector(state => state.paises)
  return (
    <div>
        {paises ?  paises[0] && (
            paises.map((pais, index) =>(
                <Card
                    key={index}
                    id={pais.id}
                    name={pais.nombre}
                    flag={pais.flag}
                    continent={pais.continente}
                    capital={pais.capital}
                    region={pais.region}
                    subregion={pais.subregion}
                    population={pais.poblacion}
                />
            )
                )
        ):'no hay paises'}
    </div>
  )
}
