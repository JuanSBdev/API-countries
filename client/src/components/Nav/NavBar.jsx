import React, { useState } from 'react'
import styles from './navBar.module.css'
import { useDispatch } from 'react-redux';
import { getCountry } from '../../redux/actions';
import { Link } from 'react-router-dom';
import FormActivity from '../../../views/form/FormActivity';

let logoWorld = 'https://climate-adapt.eea.europa.eu/es/metadata/projects/the-farmers-toolbox-for-climate-change-mitigation/image_large'
let logoBuscar = 'https://www.seekpng.com/png/full/958-9588716_buscar-buscarlogo-buscador-lupalogo-lupa-search-icon-search.png'
export default function NavBar() {
    let dispatch = useDispatch()

    let [pais, setPais] = useState('')

    let handleInput = (e)=>{
        let {value} = e.target
        setPais(value)
    }
    let buscarPais = ()=>{
        dispatch(getCountry(pais))
    }

    
  return (
    <div className={styles.wrapper}>
        <div className={styles.divLogo}>
            <img className={styles.imgLogo}
            src={logoWorld} alt="" />
        </div>
        <div className={styles.divInput}>
                <input onChange={handleInput}
                 type="text"
                 placeholder='search country'
                 className={styles.inputText} />
                <img src={logoBuscar} 
                 alt="lupa"
                 onClick={buscarPais} />
                
        </div>
        <Link
        className={styles.btn_activity}
         to={'/activity'}>
                    <button className={styles.button_86} role="button" >activities</button>
                </Link>
    </div>
  )
}
