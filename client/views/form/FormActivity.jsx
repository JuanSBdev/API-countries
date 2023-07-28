import React from "react"
export default function FormActivity(){
return(
    <div className="">
        <h1>soyelform</h1>
            <form action="">
                <input type="text" name="name" />
                <input type="text" name="place" /> 
                <input type="number" id="numero"
                 name="numero" min="1" max="5" placeholder="1-5" required />
                 <input type="number" id="hora" name="time" 
                 min="1" max='24'required/>
                 <input type="text" name="season"  />
                 <select name="season" id="season">
                      <option value="spring">Spring</option>
                      <option value="summer">Summer</option>
                      <option value="autumn">Autumn</option>
                      <option value="winter">Winter</option>
                </select>
            </form>
    </div>
)
}

// let actividad = {
//     id: id,
//     nombre,
//     lugar,
//     dificultad,
//     duracion,
//     temporada
// }