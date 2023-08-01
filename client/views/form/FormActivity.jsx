import React, { useEffect, useState } from "react"
import styles from './FormActivity.module.css'
import {  Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getActivities } from "../../src/redux/actions"
import Activities from "../../src/components/activities/Activities"
import Form from "../../src/components/activities/Form"

export default function FormActivity(){

    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getActivities())
    },[])
    return(

<div className={styles.wrapper}>
    <div className={styles.main}>
            <Form/>
    </div>
    <div className={styles.back}>
    
            <Link to={'/countries'}
                className={styles.regresar}>
                <img src="https://sistagua.com/wp-content/uploads/2020/03/ArrowLeft.png" alt="" />
                <h4>BACK</h4> 
            </Link>
    </div>
</div>

            )

}
