import React, { useState } from 'react'
import styles from './navBar.module.css'
import { useDispatch } from 'react-redux';
import { addCountry } from '../../redux/actions';

let logoWorld = 'https://cdn-icons-png.flaticon.com/512/4974/4974772.png'
let logoBuscar = 'https://www.seekpng.com/png/full/958-9588716_buscar-buscarlogo-buscador-lupalogo-lupa-search-icon-search.png'
export default function NavBar() {
    let dispatch = useDispatch()

    let [pais, setPais] = useState('')

    let handleInput = (e)=>{
        let {value} = e.target
        setPais(value)
    }
    let buscarPais = ()=>{
        dispatch(addCountry(pais))
    }

    
  return (
    <div className={styles.wrapper}>
        <div className={styles.divLogo}>
            <img className={styles.imgLogo}
            src={logoWorld} alt="" />
        </div>
            <p className={styles.p}>buscar país</p>
        <div className={styles.divInput}>
            <input onChange={handleInput}
             type="text"
             className={styles.inputText} />
            <img src={logoBuscar}
             alt="lupa"
             onClick={buscarPais} />
        </div>
    </div>
  )
}
