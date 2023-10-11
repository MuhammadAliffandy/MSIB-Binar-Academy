const express = require('express' );
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({storage})

const CarsController = require('../carsController');

router.get('/cars', CarsController.getListCars)
.get('/cars/:id', CarsController.findCarsbyId , CarsController.getCars)
.post('/cars' ,   upload.single('car-image'), CarsController.createCarsValidation , CarsController.createCars)
.put('/cars/:id', upload.single('car-image') , CarsController.updateCarsValidation , CarsController.updateCars)
.delete('/cars/:id', CarsController.findCarsbyId  , CarsController.deleteCars )

module.exports = router;