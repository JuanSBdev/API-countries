const URL = 'http://localhost:5000/countries'
const axios = require('axios')
const uuid = require('uuid');
const { Op } = require('sequelize')

const { Country, Activity } = require('../db');


const postActivity = async (req, res)=>{
    let { name, countries, dificulty, places, season, time } = req.body
    let id = uuid.v4()
    try {
        let actividad = {
            id: id,
            nombre: name[0],
            lugar: places,
            dificultad: dificulty,
            duracion: time,
            temporada: season
        }
        let nuevaActividad = await Activity.create(actividad)
            
        let countryFound = await Country.findOne({
            where:{
                nombre:{
                    [Op.iLike]: `%${actividad.nombre}%`
                }
            }
    })
            console.log(countryFound)
        await nuevaActividad.addCountry(countryFound)

        res.status(201).json(countryFound)
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}
module.exports = {
    postActivity
}