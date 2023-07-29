import React, { useEffect, useState } from "react"
import styles from './FormActivity.module.css'
import { Link } from "react-router-dom"

export default function FormActivity(){
    let [season, setSeason] = useState('Spring')
    let [countries, setCountries] = useState([])
    let [form, setForm] = useState({
        name:'',
        places:'',
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

    let handleCountries = (e) => {
        let { value } = e.target;
        setCountries(value);
    };
    let addPlace = ()=>{
        console.log(countries)
        setForm((prevValues)=>({
            ...prevValues,
            places: [...prevValues.places, countries]

        }))
        setCountries('')
    }
    let submitForm =(e)=>{
        e.preventDefault()

        console.log(form)

    }

return(
    <div className={styles.wrapper}>
           
            <h1 className={styles.h1}>Add Activity</h1>
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
                <input type="text" onChange={handleCountries} name="countries" id="countries"
                value={countries}
                 placeholder=""  maxLength="500"/>
                <button onClick={addPlace}>+</button>
                
                <div className={styles.countriesSelected}>
                    {form.places.length > 0 ? (
                        form.places.map((country, index) => (
                            <p key={index}>{country}</p>
                        ))
                    ) : (
                        <p>ads</p>
                    )}
                </div>

                <button
                className={styles.btn_submit}
                 type="submit">Submit</button>

            </form>
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

