const { json } = require('body-parser');
const express = require('express' );
const fs = require('fs')
const router = express.Router();
const cars = './models/data.json';

router.get('/', ( req , res ) => {
    fs.readFile( cars , function(err, data) {
        if (err) {
            return res.status(500).json({message : `Error while reading the file: ${err} `})
        }        
        try{
            return res.status(200).json(JSON.parse(data));
        }
        catch (err) {
            return res.status(500).json({message : `Error while parsing JSON data: ${err}`});
        }
    });
})
.get('/:id' , ( req, res ) => {

    const id = req.params['id'];

    
    fs.readFile( cars , function(err, data) {
        if (err) {
            return res.status(500).json({message : `Error while reading the file: ${err} `})
        }        
        try{
            const jsonCars = JSON.parse(data);

            const foundCar = jsonCars.find(car => car.id == id);
            
            if (foundCar) {
                return res.status(200).json(foundCar);
            } else {
                return res.status(404).json({ message: 'Car not found' });
            }
        }
        catch (err) {
            return res.status(500).json({message : `Error while parsing JSON data: ${err}`})
        }
    });
})
.post('/', ( req , res  ) => {

    const body = req.body;

    fs.readFile( cars , function(err, data) {
        if (err) {
            return res.status(500).json({message : `Error while reading the file: ${err} `})
        }        
        try{
            const jsonCars = JSON.parse(data);

            const dataCars = [...jsonCars]

            dataCars.push(body);

            fs.writeFile(cars, JSON.stringify(dataCars) , function (err) {
                if (err) throw err;
                return res.status(200).json({message : 'data cars has been created'})
            });
        }
        catch (err) {
            return res.status(500).json({message : `Error while parsing JSON data: ${err}`})
        }
    });
})
.put('/:id' ,( req, res ) => {

    const id = req.params['id'];
    const body = req.body;

    fs.readFile( cars ,  function(err, data) {
        if (err) {
            return res.status(500).json({message : `Error while reading the file: ${err} `})
        }        
        try{
            const jsonCars = JSON.parse(data);

            const dataCars = [...jsonCars];

            const newData = dataCars.map((car) => {
                if( car.id == id ){
                    return body;
                }
                return car;
            })

            fs.writeFile(cars, JSON.stringify(newData) , function (err) {
                if (err) throw err;
                return res.status(200).json({message : 'data cars has been updated'});
            });

        }
        catch (err) {
            return res.status(500).json({message : `Error while parsing JSON data: ${err}`})
        }
    });
})
.delete('/:id' , (req , res ) => {

    const id = req.params['id'];
    
    fs.readFile( cars , function(err, data) {
        if (err) {
            return res.status(500).json({message : `Error while reading the file: ${err} `})
        }        
        try{
            const jsonCars = JSON.parse(data);

            const dataCars = [...jsonCars];

            const newData =  dataCars.filter((car) => {
                return car.id != id;
            })

            fs.writeFile(cars, JSON.stringify(newData) , function (err) {
                if (err) throw err;
                return res.status(200).json({message : 'data cars has been deleted '});
            });

        }
        catch (err) {
            return res.status(500).json({message : `Error while parsing JSON data: ${err}`})
        }
    });
})

module.exports = router;