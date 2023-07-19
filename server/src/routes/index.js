const { Router } = require("express");
let getCountries = require('../controllers/getCountries')
let {getCountry} = require('../controllers/getCountry');
const { postActivity } = require("../controllers/postActivity");


const router = Router();
router.get('/', getCountries)
router.get('/country/:id', getCountry)
router.post('/actividad', postActivity)
module.exports = router;
