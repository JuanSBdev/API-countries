import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Activities.module.css'
import { getActivities } from "../../redux/actions"


export default function Activities(props) {
    let dispatch = useDispatch()

    let [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        console.log(theActivities)
        setLoading(false)
        
    },[])
    let theActivities = useSelector(state => state.activities)
    
    

        
    if(loading && props.loading){
        return (
            <p> loading.. </p>
        )
    }
    
    
  return (
    <div className={styles.wrapper}>
        <h1>activities</h1>
        <div className={styles.wrapper_down}>
             
        { theActivities && theActivities.length > 0 ?(
            
            theActivities.map((act, index)=>(
                
                <div key={index} className={styles.div_act}>
             <p>{act.nombre}</p>
            <p>{act.dificultad}</p>
            <p>{act.duracion}</p>
            <p>{act.temporada}</p>
            <div className={styles.div_act_country}>
                {
                    act.Countries.map((country, inx) => (
                        <div key={inx} className="">
                            <p>{country.nombre}</p>
                        </div>
                    ))
                }
            </div>
           </div>
        ) )):(<p>Loading activities...</p>)
        
    }
        </div>
        </div>
        )
}
