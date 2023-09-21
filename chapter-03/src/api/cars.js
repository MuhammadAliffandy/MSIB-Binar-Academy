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

router.get('/', handlerReadCars )
.get('/:id' , validation , handleFindCars)
.post('/', createValidation ,handleCreateCars)
.put('/:id' , updateValidation , handleUpdateCars)
.delete('/:id' ,  validation , handleDeleteCars )

module.exports = router;