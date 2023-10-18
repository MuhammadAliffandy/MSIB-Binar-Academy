const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({storage})

const CarsController = require('../carsController');
const UsersController = require('../userController');

router.get('/',UsersController.authorizationToResource, CarsController.getListCars)
.get('/:id', UsersController.authorizationToResource , CarsController.getCars)
.post('/' ,  UsersController.authorizationToResource , upload.single('car-image'), CarsController.createCarsValidation , CarsController.createCars)
.put('/:id', UsersController.authorizationToResource , upload.single('car-image') , CarsController.updateCarsValidation , CarsController.updateCars)
.delete('/:id',UsersController.authorizationToResource, CarsController.deleteCars )

module.exports = router;