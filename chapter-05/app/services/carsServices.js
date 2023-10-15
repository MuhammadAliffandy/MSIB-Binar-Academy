const CarsRepository = require('../repository/carsRepository')

const getListCars = () => {
    try {
        return CarsRepository.getListCars();
    } catch (error) {
        return error;
    }
}

const getCars = (id) => {
    try {
        return CarsRepository.getCars(id);
    } catch (error) {
        return error;
    }
}

const createCars = (payload, image ,userId) => {
    try {
        return CarsRepository.createCars(payload, image , userId);
    } catch (error) {
        return error;
    }
}

const updateCars = (id, payload) => {
    try {
        return CarsRepository.updateCars(id, payload);
    } catch (error) {
        return error;
    }
}

const deleteCars = (id) => {
    try {
        return CarsRepository.deleteCars(id);
    } catch (error) {
        return error;
    }
}

module.exports = {
    getListCars,
    getCars,
    createCars,
    updateCars,
    deleteCars
}