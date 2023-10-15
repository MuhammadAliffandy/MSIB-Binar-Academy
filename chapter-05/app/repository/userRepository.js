const { v4: uuidv4 } = require('uuid');
const  { users ,cars }  = require('../models/models');

const getListUsers = () => {
    return users.findAll();
}

const createUser = (payload) => {
    const { name, phone , address , role , email , password  } = payload;
    return users.create({
        id : uuidv4(),
        name : name,
        phone :phone,
        address : address,
        role : role ,
        email : email ,
        password : password,
        createdAt : new Date(),
        updatedAt : new Date(),
    });
}


const findUserByEmail = ( email ) => {
    return users.findOne({ where : {
        email : email,
    }});
}

const findUserById = ( id ) => {
    return users.findOne({ 
        where : {id : id,},
        include : [
            { model: cars, as: 'createdCars' },
            { model: cars, as: 'updatedCars' },
        ],
});
}


module.exports = {
    createUser,
    getListUsers,
    findUserByEmail,
    findUserById,
}