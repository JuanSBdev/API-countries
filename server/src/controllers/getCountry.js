const URL = 'http://localhost:5000/countries'
const axios = require('axios')

let getCountries = async (req, res)=>{
try {
   const response = axios(URL)
   const data = response.data;
   res.status(201).json(data)
   
} catch (error) {
    res.status(400).json({error: error.message})
}
}
module.exports = getCountries;