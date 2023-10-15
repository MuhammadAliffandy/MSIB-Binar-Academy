const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({storage})

const CarsController = require('../carsController');
const UsersController = require('../userController');

router.get('/', CarsController.getListCars)
.get('/:id', CarsController.findCarsbyId , CarsController.getCars)
.post('/' ,  UsersController.authorizationAdmin , upload.single('car-image'), CarsController.createCarsValidation , CarsController.createCars)
.put('/:id', UsersController.authorizationAdmin , upload.single('car-image') , CarsController.updateCarsValidation , CarsController.updateCars)
.delete('/:id',UsersController.authorizationAdmin, CarsController.findCarsbyId  , CarsController.deleteCars )

module.exports = router;