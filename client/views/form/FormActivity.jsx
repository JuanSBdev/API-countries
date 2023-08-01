import React, { useEffect, useState } from "react"
import styles from './FormActivity.module.css'
import {  Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getActivities } from "../../src/redux/actions"
import Activities from "../../src/components/activities/Activities"
import Form from "../../src/components/activities/Form"

export default function FormActivity(){
    let [loading, setLoading] = useState(true)

    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getActivities())
        .then(setLoading(true))
    },[])
    return(

<div className={styles.wrapper}>
    <div className={styles.main}>
            <Form/>
            <Activities loading={loading}/>
    </div>
    <div className={styles.back}>
    
            <Link to={'/countries'}
                className={styles.regresar}>
                <img src="https://cdn-icons-png.flaticon.com/512/318/318493.png?w=360" alt="" />
                <h4>BACK</h4> 
            </Link>
    </div>
</div>

            )

}
