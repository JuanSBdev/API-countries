import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {
  let imgFlag = props.flag
  return (
    <div className={styles.wrapper}>
        <div className={styles.separador}>
          <h1 className={styles.h1_name}>{props.name}, {props.capital}</h1>
          <p className={styles.p_id}>#{props.id}</p>
        </div>
        <img className={styles.img_flag} src={imgFlag} alt="flag" />
    </div>
  )
}
