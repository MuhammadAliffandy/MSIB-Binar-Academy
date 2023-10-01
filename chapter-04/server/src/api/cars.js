const express = require('express' );
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({storage})

const {
    validation,
    createValidation,
    updateValidation,
} = require('../middleware/validation.js');
const { 
    handlerReadCars, 
    handleFindCars , 
    handleCreateCars,
    handleUpdateCars,
    handleDeleteCars,
} = require('../handlers/handler.js')

router.get('/cars', handlerReadCars )
.get('/cars/:id', validation , handleFindCars)
.post('/cars' ,   upload.single('car-image'), createValidation ,handleCreateCars)
.put('/cars/:id', upload.single('car-image') , updateValidation , handleUpdateCars)
.delete('/cars/:id', validation , handleDeleteCars )

module.exports = router;