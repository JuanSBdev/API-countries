const URL = 'http://localhost:5000/countries'
const axios = require('axios')
const uuid = require('uuid');
const { Op } = require('sequelize')

const { Country, Activity } = require('../db');


const postActivity = async (req, res)=>{
    let { name,  dificulty, places, season, time } = req.body
    let id = uuid.v4()
    try {
        let actividad = {
            id: id,
            nombre: name,
            lugar: places,
            dificultad: dificulty,
            duracion: time,
            temporada: season
        }
        let nuevaActividad = await Activity.create(actividad)
            
        let countriesFound = await Country.findAll({
            where:{
                nombre:{
                    [Op.or]: places.map(place => ({ [Op.iLike]: `%${place}%` }))
                }
            }
    })
            console.log(countriesFound)
        await nuevaActividad.addCountry(countriesFound)

        res.status(201).json(countriesFound)
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}
module.exports = {
    postActivity
}