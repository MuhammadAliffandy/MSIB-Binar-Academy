
const fs = require('fs')
const cars = './models/data.json';

const validation = (req , res , next) => {

    const id = req.params['id'];

    fs.readFile( cars , function(err, data) {       
        try{
            const jsonCars = JSON.parse(data);

            const dataCars = [...jsonCars];

            const foundCar = jsonCars.find(car => car.id == id);

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

module.exports = validation;