const URL = 'http://localhost:5000/countries'
const axios = require('axios')
const { Country, Activity } = require('../db')

let getCountries = async (req, res)=>{
try {
   const response = await axios.get(URL)
   const data = response.data;
   for(let i = 0; i < data.length; i++){
       const country = data[i];

       const capital = country.capital ? country.capital[0] : 'No encontró'; 
        let subregion = country.subregion ? country.subregion : 'no existe';
        let continente = country.continents ? country.continents[0] : 'no existe';

        const pais = {
            id: country.cca3,
            nombre: country.name.common,
            bandera: country.flags.png,
            continente: continente,
            capital: capital,
            subregion: subregion,
            area: country.area,
            poblacion: country.population,
          };
        

          let paises =  await Country.create(
            pais)
        }
        res.status(201).json({ message: 'paises creados'})
   
} catch (error) {
    res.status(400).json({error: error.message})
}
}
module.exports = getCountries;