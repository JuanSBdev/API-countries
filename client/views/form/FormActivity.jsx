import React, { useEffect, useState } from "react"
import styles from './FormActivity.module.css'

export default function FormActivity(){
    let [season, setSeason] = useState('Spring')
    let [form, setForm] = useState({
        name:'',
        place:'',
        time:'',
        season: season
    })
    let handleForm = (e)=>{
        let {value, name} = e.target
        e.preventDefault()
        setForm((prevValues)=>({
            ...prevValues,
            [name]: value,

        }))
    }
    let handleSelect = (e)=>{
        e.preventDefault()
        let {value} = e.target
        setSeason(value)
    }
    let submitForm =(e)=>{
        e.preventDefault()

        console.log(form)

    }

return(
    <div className={styles.wrapper}>
            <h1>Add Activity</h1>
            <form action=""
            onChange={handleForm}
            onSubmit={submitForm}
            className={styles.form}
            >
                <label >Name:</label>
                <input type="text" name="name" />


                <label > dificulty:</label>
                <input type="number" id="numero" name="numero" min="1" max="5" placeholder="1-5" required />

                <label >Duration:</label>
                <input type="number" id="hora" name="time" min="1" max="24" required />

                <label >Season:</label>
                 <select name="season" id="season"
                 onChange={handleSelect}>
                      <option value="spring">Spring</option>
                      <option value="summer">Summer</option>
                      <option value="autumn">Autumn</option>
                      <option value="winter">Winter</option>
                </select>

                <label >Place:</label>
                <input type="text" name="countries" id="countries" placeholder="Country 1, Country 2, Country 3, ..." required maxlength="500"/>
                
                <button
                className={styles.btn_submit}
                 type="submit">Submit</button>
            </form>
    </div>
)
}

