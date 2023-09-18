const Cars = require('../../models/car.js');

const handlerReadCars = async (req , res) => {
    const data = await new Cars().read();
    return res.status(200).json(data);
}

const handleFindCars = async (req , res ) => {
    const data = await new Cars().find(req.params['id']);
    return res.status(200).json(data);
}

const handleWriteCars = async (req , res ) => {
    const data = await new Cars().create(req.body)
    return res.status(201).json({
        message : 'data cars has been created',
        data : data,
    });
}
const handleUpdateCars = async (req , res ) => {
    const data = await new Cars().update(req.params['id'] , req.body)
    return res.status(200).json({message : 'data cars has been updated'});
}

const handleDeleteCars = async (req , res ) => {
    const data = await new Cars().delete(req.params['id']);
    return res.status(200).json({message : 'data cars has been deleted'});
}

module.exports = {
    handlerReadCars,
    handleFindCars,
    handleWriteCars,
    handleUpdateCars,
    handleDeleteCars,
}
