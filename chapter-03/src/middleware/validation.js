
const fs = require('fs')
const cars = './models/data.json';

const validation = (req , res , next) => {

    const id = req.params['id'];

    fs.readFile( cars , function(err, data) {     
        if (err) {
            return res.status(500).json({message : `Error while reading the file: ${err} `})
        }    
        try{
            const jsonCars = JSON.parse(data);
            const dataCars = [...jsonCars];
            const foundCar = dataCars.find(car => car.id == id);
            if(!foundCar){
                return res.status(404).json({message : "car not found"})
            }
            next();
        }
        catch (err) {
            return res.status(500).json({message : `Error while parsing JSON data: ${err}`})
        }
    });

}

const createValidation = (req , res , next) => {

    const body = req.body;

    fs.readFile( cars , function(err, data) {     
        if (err) {
            return res.status(500).json({message : `Error while reading the file: ${err} `})
        }    
        try{

            const requireData = [ 'image' , 'capacity' , 'rentPerDay' , 'description' , 'availableAt'];

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
                const isChecked = Object.keys(body).every((key , i)=>{
                    return key === requireData[i];
                });
        
                if(!isChecked){
                    return res.status(404).json({message : `Invalid data structure. Please check your input and must to be ${requireData} `});
                }
            }

            next();
        }
        catch (err) {
            return res.status(500).json({message : `Error while parsing JSON data: ${err}`})
        }
    });

}

const updateValidation = (req , res , next) => {

    const id = req.params['id'];
    const body = req.body;

    fs.readFile( cars , function(err, data) {     
        if (err) {
            return res.status(500).json({message : `Error while reading the file: ${err} `})
        }    
        try{

            const requireData = [ 'image' , 'capacity' , 'rentPerDay' , 'description' , 'availableAt'];

            const jsonCars = JSON.parse(data);
            const dataCars = [...jsonCars];
            const foundCar = dataCars.find(car => car.id == id);
            if(!foundCar){
                return res.status(404).json({message : "car not found"})
            }
            
            const isChecked = Object.keys(body).map((key)=>{
                return requireData.indexOf(key) ;
            })

            if( isChecked.indexOf(-1) > -1 ){
                return res.status(404).json({message : 'Invalid data structure. Please check your input '});
            }

            next();
        }
        catch (err) {
            return res.status(500).json({message : `Error while parsing JSON data: ${err}`})
        }
    });

}


module.exports = {
    validation,
    createValidation,
    updateValidation,
};