import React from 'react'
import styles from './Card.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { delCountry } from '../../redux/actions'

export default function Card(props) {
  let dispatch = useDispatch()
  let imgFlag = props.flag

let deleteCountry = ()=>{
  dispatch(delCountry(props.id))
}
  return (
    <div className={styles.wrapper}>
        <div className={styles.separador}>
          <h1 className={styles.h1_name}>{props.name}</h1>
          <p className={styles.p_id}>#{props.id}</p>
          <button
          className={styles.btn_close}
          onClick={deleteCountry}
          >x</button>
        </div>
        <div className={styles.img_container}>
          <img className={styles.img_flag} src={imgFlag} alt="flag" />
        </div>
    </div>
  )
}
