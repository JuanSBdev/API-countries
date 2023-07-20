const { Router } = require("express");
let getCountries = require('../controllers/getCountries')
let {getCountry} = require('../controllers/getCountry');
const { postActivity } = require("../controllers/postActivity");
const { getActivities } = require("../controllers/getActivities");
const { getCountryName } = require("../controllers/getCountryName");


const router = Router();
router.get('/', getCountries)
router.get('/country/:id', getCountry)
router.get('/countries/:name', getCountryName)
router.get('/actividad', getActivities)
router.post('/actividad', postActivity)
module.exports = router;
