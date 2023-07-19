const URL = 'http://localhost:5000/countries'
const axios = require('axios')
const uuid = require('uuid');
const { Country, Activity } = require('../db');

let id = uuid.v4()

const postActivity = async (req, res)=>{
    let { nombre, dificultad, duracion, temporada } = req.body
    try {
        let actividad = {
            id: id,
            nombre,
            dificultad,
            duracion,
            temporada
        }
        let nuevaActividad = Activity.create(actividad)
        res.status(201).json(nuevaActividad)
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}
module.exports = {
    postActivity
}