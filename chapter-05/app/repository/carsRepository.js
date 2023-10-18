const  { cars }  = require('../models/models');
const { v4: uuidv4 } = require('uuid');
const { sequelize } = require('../../db/libs/dbStatus');

const getListCars =  () => {
    return cars.findAll();
}

const getCars = (id ) => {
    return cars.findOne({
        where : {
            id : id,
        }
    });
}

const createCars = (payload , image , userId) => {
    const { name, size , rentPerDay } = payload;
    return cars.create({
        id : uuidv4(),
        name : name,
        image : image,
        size : size,
        rentPerDay : rentPerDay, 
        createdAt : new Date(),
        updatedAt : new Date(),
        deletedAt : null,
        createdBy: userId , 
        updatedBy: userId,
        deletedBy: null,
    });

}

const updateCars = (id , payload ) => {
    cars.update({
        ...payload
    },{
        where : {
            id : id
        }
    })
};


const deleteCars =  (id ,deletedById ) => {

    sequelize.transaction(async (t) => {
        await cars.update(
            { deletedBy: deletedById },
            {
                where: {
                    id: id,
                },
                transaction: t
            }
        );

        await cars.destroy({
            where: {
                id: id,
            },
            transaction: t
        });

    });



}

module.exports = {
    getListCars,
    getCars,
    createCars,
    updateCars,
    deleteCars
}
