const { Country, Activity } = require('../db.js');
let getActivities = async (req, res) =>{
    try {
        const actividades = await Activity.findAll({
            include: Country
            }
            )

        res.status(200).json(actividades)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
module.exports= {
    getActivities
}