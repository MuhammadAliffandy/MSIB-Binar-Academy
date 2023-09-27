const { Cars } = require('../middleware/migration');

const handlerReadCars = async (req , res) => {
    const data = await Cars.findAll(
        {
            order: ['id'],
        }
    );
    return res.status(200).json(data);
}

const handleFindCars = async (req , res ) => {
    const data = await Cars.findAll({
        where : {
            id : req.params['id'],
        }
    });
    return res.status(200).json(data);
}

const handleCreateCars = async (req , res ) => {

    const {
        name,
        image,
        size,
        rentPerDay,
        description,
    } = req.data;

    const data = await Cars.create({
        name : name,
        image : image,
        size : size,
        rentPerDay : rentPerDay, 
        description : description,
        createdAt : new Date(),
        updatedAt : new Date(),
    });

    return res.status(201).json({
        message : 'data cars has been created',
        data : data,
    });
}

const handleUpdateCars = async (req , res ) => {
    
    const body = req.data;
    
    const data = await Cars.update({
        ...body
    },{
        where : {
            id : req.params['id']
        }
    })

    return res.status(200).json({message : 'data cars has been updated',data : data});
}

const handleDeleteCars = async (req , res ) => {
    await Cars.destroy({
        where : {
            id : req.params['id'],
        }
    });
    
    return res.status(200).json({message : 'data cars has been deleted'});
}

module.exports = {
    handlerReadCars,
    handleFindCars,
    handleCreateCars,
    handleUpdateCars,
    handleDeleteCars,
}
