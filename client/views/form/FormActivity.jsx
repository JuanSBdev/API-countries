import React, { useEffect, useState } from "react"
import styles from './FormActivity.module.css'
import {  Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createActivity } from "../../src/redux/actions"
import Activities from "../../src/components/activities/Activities"
import Form from "../../src/components/activities/Form"

export default function FormActivity(){
    return(

        <div>
            <Form/>
            <Activities/>
        <div>
        <Link to={'/countries'}
            className={styles.regresar}>
            <img src="https://cdn-icons-png.flaticon.com/512/318/318493.png?w=360" alt="" />
            <h4>BACK</h4> 
        </Link>
        </div>
</div>

            )

}
