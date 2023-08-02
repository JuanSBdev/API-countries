import React, { useEffect, useState } from "react"
import styles from './Form.module.css'
import { Link, Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createActivity, getActivities } from "../../redux/actions"
import validate from "../../../views/form/validate"

export default function Form(){
    let imgForm = 'https://wallpaperaccess.com/full/352320.jpg'
    
    let dispatch = useDispatch()
    const [errors, setErrors] = useState({error: 'fill all information '})
    let [season, setSeason] = useState('spring')
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
        setErrors(validate({
            ...form,
            [errors]: value
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
    let addPlace = (e)=>{
        e.preventDefault()
            if(countries.length > 0){
            setForm((prevValues)=>({
                ...prevValues,
                places: [...prevValues.places, countries]
    
            }))

        }
        else{
            alert('add a valid country for your activity')
        }
        setCountries('')
    }

    let removeCountry = (index) => {
        const updatedCountries = form.places.filter((country, idx) => idx !== index);
        setForm((prevValues) => ({
            ...prevValues,
            places: updatedCountries,
        }));
    };

    let submitForm =(e)=>{
        e.preventDefault()
        if(!errors.name && !errors.places && !errors.time && !errors.duration){
            dispatch(createActivity(form))
            console.log(errors.ok + 'clean')
        }
        else{

            console.log(errors)
        }
        }

return(
    <div className={styles.wrapper}>
           

            <div className={styles.wrapper_form}>
                <div className={styles.img_form}>
                    <img src={imgForm} alt="" />
                </div>

                <form action=""
            onChange={handleForm}
            onSubmit={submitForm}
            className={styles.form}
            >
                            <h1 className={styles.h1}>Add Activity</h1>

                <label >Name:</label>
                <input type="text" name="name" />
                {errors.name ? ( <p className={styles.p_error}>add name </p>
            
                ): null}

                <label > dificulty:</label>
                <input type="number" id="numero" name="dificulty" min="1" max="5" placeholder="1-5" required />
                {errors.dificulty ? ( <p className={styles.p_error}>add name </p>
                ): null}

                <label >Duration:</label>
                <input type="time" id="hora" name="time" min="1" max="24" required />
                {errors.time ? ( <p className={styles.p_error}>add duration </p>
                ): null}


                <label >Season:</label>
                 <select name="season" id="season"
                 onChange={handleSelect}>
                      <option value="spring">Spring</option>
                      <option value="summer">Summer</option>
                      <option value="autumn">Autumn</option>
                      <option value="winter">Winter</option>
                </select>
        

                <label >Place:</label>
                <div className={styles.inputPlace}>
                <input type="text" onChange={handleCountries} name="countries" id="countries"
                value={countries}
                 placeholder=""  maxLength="500"/>
                <button onClick={addPlace}>+</button>
                </div>
                
                
                <div className={styles.countriesSelected}>
                    {form.places.length > 0 ? (
                        form.places.map((country, index) => (
                            <p key={index} onClick={()=>removeCountry(index)}>
                                {country}
                                </p>
                        ))
                    ) : (
                        <p>none</p>
                    )}
                    
                </div>
                {errors.places ? ( <p className={styles.p_error}>add places </p>
                ): null}


                <button
                className={styles.btn_submit}
                type="submit">
                    Submit
                </button>
                        {errors.error ? (<p className={styles.p_error}> error</p>): null}
            </form>
            </div>
    </div>
)
}