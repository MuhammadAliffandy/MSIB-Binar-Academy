const express = require('express' );
const router = express.Router();

const car = require('../api/car')

router.use('/cars', car);

module.exports = router;