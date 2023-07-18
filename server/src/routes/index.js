const { Router } = require("express");
let getCountries = require('../controllers/getCountry')


const router = Router();
router.get('/countries', getCountries)
module.exports = router;
