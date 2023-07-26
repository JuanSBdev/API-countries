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
                    continente: country.continents[0],
                    capital: country.capital ? country.capital[0] : 'None',
                    subregion: country.subregion,
                    area: country.area ? country.area : 'None',
                    poblacion: country.population,
                  }

   )
   );
   let paises = await Country.bulkCreate(pais)
   res.status(200).json(paises)

}  catch (error) {
    if (error.message === "llave duplicada viola restricción de unicidad «Countries_pkey»" ) {
        let countries = await Country.findAll()
        res.status(200).json(countries)

    } else {
        
        res.status(400).json({error: error.message})
    }
}
}
module.exports = getCountries;

