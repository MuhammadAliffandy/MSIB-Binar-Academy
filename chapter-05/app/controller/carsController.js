const CarsServices = require('../services/carsServices');

const getListCars = async (req , res) => {
    try {
        const data = await CarsServices.getListCars();
        return res.status(200).json(data);
    } catch (error) {
        return res.json({
            status: 'FAIL',
            message : error.message
        })
    }
}

const getCars = async (req , res) => {
    
    try {
        const id = req.params['id'];
        const data = await CarsServices.getCars(id);
        return res.status(200).json(data);
    } catch (error) {
        return res.json({
            status: 'FAIL',
            message : error.message
        })
    }
}

const createCars = async (req , res) => {
    try {
        const payload = req.data;
        const image = req.fileImage;
        const userId = req.user.id;
        const data = await CarsServices.createCars(payload,image,userId);
        return res.status(201).json({
            status : 'OK',
            message : 'data cars has been created',
            data : data,
        });
    } catch (error) {
        return res.json({
            status: 'FAIL',
            message : error.message
        })
    }
}

const updateCars = async (req , res) => {
    try {
        const payload = req.data;
        const id = req.params['id'];
        const data = await CarsServices.updateCars(id , payload);
        return res.status(201).json({
            status : 'OK',
            message : 'data cars has been updated', 
            data : data,
        });
    } catch (error) {
        return res.json({
            status: 'FAIL',
            message : error.message
        })
    }
}

const deleteCars = async (req , res) => {
    
    try {
        const id = req.params['id'];
        const data = await CarsServices.deleteCars(id);
        return res.status(201).json({
            status : 'OK',
            message : 'data cars has been deleted', 
            data : data,
        });
    } catch (error) {
        return res.json({
            status: 'FAIL',
            message : error.message
        })
    }
}


const findCarsbyId = async (req , res , next) => {
    const id = req.params['id'];
    const isExisting = await CarsServices.getCars(id);
    if(isExisting === null){
        return res.status(404).json({message : "car not found"});
    }
    next()
}

const createCarsValidation = (req , res , next) => {

    if( req.file == null ){
        return res.status(404).json({message : `Image is Undefined , Please check your input ! `});
    }

    const body = JSON.parse((req.body.data));
    if( req.file == null ){
        return res.status(404).json({message : `Image is Undefined , Please check your input ! `});
    }
    const image = req.file.buffer;
    const requireData = [ 'name' , 'rentPerDay' , 'size'];
    if(Array.isArray(body)){
        const isCheckedData = body.map((car)=> { 
            const currentData = Object.keys(car);
                return currentData.every((key , i)=>{
                    return key === requireData[i];
                })
        })
        if(isCheckedData.indexOf(false) > -1){
            return res.status(404).json({message : `Invalid data structure. Please check your input and must to be ${requireData} `});
        }
    }else{

        if(Object.keys(body).length < 3 || Object.keys(body).length > 3  ){

            return res.status(404).json({message : `Invalid data structure. Please check your input  `});
        }
        const isChecked = Object.keys(body).every((key , i)=>{
            return key === requireData[i];
        });
        if(!isChecked){
            return res.status(404).json({message : `Invalid data structure. Please check your input and must to be ${requireData} `});
        }
    }

    req.data = body ;
    req.fileImage = image; 

    next();

}

const updateCarsValidation = async(req , res , next) => {

    const id = req.params['id'];
    let body = req.body.data;
    const image = req.file;
    const requireData = [ 'name' , 'rentPerDay' , 'size'  ];

    const isExisting = await CarsServices.getCars(id);

    if(isExisting === null){
        return res.status(404).json({message : "car not found"});
    }
    
    if(body != null){

        body = JSON.parse(req.body.data);
    
        const isChecked = Object.keys(body).map((key)=>{
            return requireData.indexOf(key) ;
        })
    
        if( isChecked.indexOf(-1) > -1 ){
            return res.status(404).json({message : 'Invalid data structure. Please check your input '});
        }
    }

    if(image != null && body != null  ){
        req.data = {...body , image : image.buffer  };
    }else if(image != null && body == null){
        req.data = { image : image.buffer };
    }else if(image == null && body != null){
        req.data = body;
    }else if(image == null && body != null){
        req.data = body;
    }

    next();

}

module.exports = {
    getListCars,
    getCars,
    createCars,
    updateCars,
    deleteCars,
    findCarsbyId,
    createCarsValidation,
    updateCarsValidation,
}
