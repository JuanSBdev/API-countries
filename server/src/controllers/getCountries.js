const URL = 'http://localhost:5000/countries'
const axios = require('axios')
const { Country, Activity } = require('../db')

let getCountries = async (req, res)=>{
try {
   const response = await axios.get(URL)
   const data = response.data;
   const pais = data.map((country)=> (
       {
                    id: country.cca3,
                    nombre: country.name.common,
                    bandera: country.flags.png,
                    continente: country.continents,
                    capital: country.capital ? country.capital[0] : 'None',
                    subregion: country.subregion,
                    area: country.area ? country.area[0] : 'None',
                    poblacion: country.population,
                  }

   )
   );
   let paises = await Country.bulkCreate(pais)
   res.status(200).json(paises)

   

   
} catch (error) {
    res.status(400).json({error: error.message})
}
}
module.exports = getCountries;

