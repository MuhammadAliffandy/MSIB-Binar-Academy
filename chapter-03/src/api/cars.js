const express = require('express' );
const router = express.Router();
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
.get('/cars/:id' , validation , handleFindCars)
.post('/cars', createValidation ,handleCreateCars)
.put('/cars/:id' , updateValidation , handleUpdateCars)
.delete('/cars/:id' ,  validation , handleDeleteCars )

module.exports = router;