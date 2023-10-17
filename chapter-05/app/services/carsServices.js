const fire = require('../../lib/firebase/init')
const{ getStorage, ref, uploadBytes ,getDownloadURL } =  require("firebase/storage");
const CarsRepository = require('../repository/carsRepository');

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

const deleteCars = (id,deletedById ) => {
    try {
        return CarsRepository.deleteCars(id,deletedById );
    } catch (error) {
        return error;
    }
}

const uploadImage = (image) => {
    const storage = getStorage(fire);
    const storageRef = ref(storage, `car-${Date.now()}.jpg`);

    return uploadBytes(storageRef, image).then((snapshot) => {
        return getDownloadURL(storageRef).then((url) => {
            return url;
        }).catch((error) => {
            return error;
        });
    }).catch((error) => {
        return error;
    });
}

module.exports = {
    getListCars,
    getCars,
    createCars,
    updateCars,
    deleteCars,
    uploadImage,
}