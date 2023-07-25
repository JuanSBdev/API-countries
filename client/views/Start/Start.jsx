import React, {useEffect} from 'react'
import styles from './Start.module.css'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCountries } from '../../src/redux/actions'


export default function Start() {
  let dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getCountries())
    console.log('semanda')
  }, [])
  
  return (
    <div>
      <h1>Find your country</h1>
      <Link to='/countries'>
        <button className={styles.btn_start}>
                          start
        </button>
      </Link>
        <p>developed by juansb.dev@gmail.com</p>
    </div>
  )
}
