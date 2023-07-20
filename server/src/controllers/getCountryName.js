const { Country, Activity,  } = require('../db.js');
const { Op } = require('sequelize')
let getCountryName = async (req, res) =>{
    let { name } = req.params
    console.log(name)
    try {
        const pais = await Country.findOne({
            where: {
                nombre: {
                    [Op.iLike]: name,
                       },
            },
            include: Activity,
        });
        res.status(200).json(pais)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
module.exports= {
    getCountryName
}