const URL = 'http://localhost:5000/countries'
const axios = require('axios')
const { Country, Activity } = require('../db')

let getCountries = async (req, res)=>{
try {
   const response = axios(URL)
   const data = response.data;
    let pais = {
        id : data.id,
        nombre: data.name.official,
        bandera: data.flags.png,
        continente: data.continents,
        capital: data.capital,
        subregion: data.subregion,
        poblacion:data.population,

    }

   res.status(201).json(data)
   
} catch (error) {
    res.status(400).json({error: error.message})
}
}
module.exports = getCountries;