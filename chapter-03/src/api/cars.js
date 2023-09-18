const express = require('express' );
const router = express.Router();
const validation = require('../middleware/validation.js');
const { 
    handlerReadCars, 
    handleFindCars , 
    handleWriteCars,
    handleUpdateCars,
    handleDeleteCars,
} = require('../handlers/handler.js')

router.get('/', handlerReadCars )
.get('/:id' , validation , handleFindCars)
.post('/', handleWriteCars)
.put('/:id' ,  validation , handleUpdateCars)
.delete('/:id' ,  validation , handleDeleteCars )

module.exports = router;