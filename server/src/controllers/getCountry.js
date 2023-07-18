const URL = 'http://localhost:5000/countries'
const axios = require('axios')
const { Country, Activity } = require('../db')

let getCountries = async (req, res)=>{
try {
   const response = await axios.get(URL)
   const data = response.data;

   let id = data.tld ? (data.tld.length > 0 ? data.tld[0] : undefined) : 777;
      console.log(id)
//     let pais = {
//         id: data.tld,
//         nombre: data.name,
//         bandera: data.flags,
//         continente: data.continents,
//         capital: data.capital,
//         subregion: data.subregion,
//         poblacion:data.population,

//     }
//     let paises =  await Country.create(pais)
//    res.status(201).json(paises)
   
} catch (error) {
    res.status(400).json({error: error.message})
}
}
module.exports = getCountries;