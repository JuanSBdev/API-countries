import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Activities.module.css'
// import { delActivity } from '../../redux/actions'

import { Link } from 'react-router-dom'


export default function Activities(props) {
    let dispatch = useDispatch()

    let [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        setLoading(false)
        
    },[])
    let theActivities = useSelector(state => state.activities)
    
    // let deleteActivity = (index)=>{
    //     dispatch(delActivity(index))
    // }
    

        
    if(loading && props.loading){
        return (
            <p> loading.. </p>
        )
    }
    
    
  return (
    <div className={styles.wrapper}>
        <div className={styles.wrapper_top}>

        <Link to={'/countries'}
                className={styles.regresar}>
<img src="https://sistagua.com/wp-content/uploads/2020/03/ArrowLeft.png" alt="" />                <h4>BACK</h4> 
            </Link>
        <h1>activities</h1>
        <Link to={'/activity/form'}
        className={styles.link_form}
        > Add Activity</Link>
        </div>

        <div className={styles.wrapper_down}>
             
        { theActivities && theActivities.length > 0 ?(
            
            theActivities.map((act, index)=>(
                <div key={index} className={styles.div_act}>
                    {/* <button onClick={deleteActivity(index)}>X</button> */}
             <h2> {act.nombre}</h2>
            <p>Dificulty: {act.dificultad}</p>
            <p>Duration: {act.duracion}</p>
            <p>Season: {act.temporada}</p>
            <div  className={styles.div_act_country}>
                {
                    act.Countries.map((country, inx) => (
                        <div key={inx} className="">
                            <p> ¿where? {country.nombre}</p>
                        </div>
                    ))
                }
            </div>
           </div>
        ) )):(<p className={styles.p_noactivity}>There is no activities loaded</p>)
        
    }
        </div>
        </div>
        )
}
