const { cars } = require('../middleware/migration');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

const handlerReadCars = async (req , res) => {
    const data = await cars.findAll();
    return res.status(200).json(data);
}

const handleFindCars = async (req , res ) => {
    const data = await cars.findOne({
        where : {
            id : req.params['id'],
        }
    });

    // const base64Image = data.image.toString('base64');
    // const imgHtml = `<img src="data:image/jpeg;base64,${base64Image}" alt="Gambar">`;
    // return res.status(200).send(imgHtml);    

    return res.status(200).json(data);
}

const handleCreateCars = async (req , res ) => {

    const {
        name,
        size,
        rentPerDay,
        description,
    } = req.data;

    const image = req.fileImage;

    const data = await cars.create({
        id : uuidv4(),
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

    await cars.update({
        ...body
    },{
        where : {
            id : req.params['id']
        }
    })

    const data = await cars.findAll({
        where : {
            id : req.params['id'],
        }
    });

    return res.status(200).json({message : 'data cars has been updated',data : data});
}

const handleDeleteCars = async (req , res ) => {
    await cars.destroy({
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
