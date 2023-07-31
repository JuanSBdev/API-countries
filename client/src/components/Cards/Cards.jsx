import React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import Card from './Card';
import styles from './Cards.module.css'
import Filtros from '../Filters/Filtros';

import { getActivities } from '../../redux/actions';

export default function Cards() {
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getActivities())
      },[])
    let paises = useSelector(state => state.paises)
  return (
    <div className={styles.wrapper}>
        {paises ?  paises[0] && (
            paises.map((pais, index) =>(
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
        ):(
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
            }
    </div>
  )
}
