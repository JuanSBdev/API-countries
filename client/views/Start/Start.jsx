import React, {useEffect} from 'react'
import styles from './Start.module.css'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCountries } from '../../src/redux/actions'


export default function Start() {
  let dispatch = useDispatch()
  
  useEffect(()=>{
    console.log('semanda')
  }, [])
  
  return (
    <div className={styles.wrapper}>
        <div className={styles.separador}>
             <h1 className={styles.h1_start}>Countries API</h1>
           <Link to='/countries' 
           onClick={()=>dispatch(getCountries())}
           className={styles.btn_start}>
                               start
           </Link>
        </div>
        <p className={styles.p_start}>developed by juansb.dev@gmail.com</p>
    </div>
    
      
    
  )
}
