import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';
import styles from './Cards.module.css'

export default function Cards() {
    let paises = useSelector(state => state.paises)
  return (
    <div className={styles.wrapper}>
        {paises ?  paises[0] && (
            paises[0].map((pais, index) =>(
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
            )
                )
        ):'no hay paises'}
    </div>
  )
}
