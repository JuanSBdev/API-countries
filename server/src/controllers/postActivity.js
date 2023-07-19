const URL = 'http://localhost:5000/countries'
const axios = require('axios')
const uuid = require('uuid');
const { Country, Activity } = require('../db');


const postActivity = async (req, res)=>{
    let { nombre, lugar, dificultad, duracion, temporada} = req.body
    let id = uuid.v4()
    let  countryId = lugar.slice(0, 3).toUpperCase(); 
    try {
        let actividad = {
            id: id,
            nombre,
            lugar,
            dificultad,
            duracion,
            temporada
        }
        let nuevaActividad = await Activity.create(actividad,
            {include: Country})
            
        let countryFound = await Country.findByPk(countryId)
            // console.log(countryFound)
        await nuevaActividad.addCountry(countryFound)

        res.status(201).json(nuevaActividad)
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}
module.exports = {
    postActivity
}