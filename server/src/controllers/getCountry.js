const { Country, Activity } = require('../db.js');
let getCountry = async (req, res) =>{
    let { id } = req.params
    try {
        const pais = await Country.findOne(
            {where:{id}},
            {include: Activity}
            
            )
        res.status(200).json(pais)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
module.exports= {
    getCountry
}