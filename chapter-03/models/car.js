const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const cars = './models/data.json';

class Car {

    static cars;

    generateData = async() => {
        let records = [];
        await new Promise(function(resolve, reject) {
            fs.readFile(cars, function(err, data) {
                if (err) {
                    reject(err);
                    return;
                }
                const jsonCars = JSON.parse(data);
                
                resolve(jsonCars);
            });
        }).then((data) => {
            records.push(...data);
            return data;
        });
        return records;
    }

    changedData = (newData) => {
        fs.writeFile(cars, JSON.stringify(newData) , function (err) {
            if (err) throw err;
        })
    }

    read = async () => {
        const data = await this.generateData();
        return data;
    }
    
    find = async (params) => {
        const data = await this.generateData();
        const foundCar =  data.filter(car => car.id == params);
        return foundCar;
    }
    
    create = async(body) => {
        const data = await this.generateData();

        if(Array.isArray(body)){
            const newData = [];
            body.map((car)=>{
                const inputData = { id :  uuidv4() , ...car };
                data.push(inputData);
                newData.push(inputData);
            })
            return newData;
        }
        
        const inputData = { id :  uuidv4() , ...body };
        data.push(inputData);
        this.changedData(data)
        return inputData;
    }
    
    update = async(params , body) => {
        const data = await this.generateData();
        const dataCreated = [];
        const newData = data.map((car) => {
            if( car.id == params ){
                Object.keys(body).map((key)=>{
                    car[key] = body[key];
                })
                dataCreated.push(car)
            }
            return car;
        })
        this.changedData(newData);
        return dataCreated;
    }
    
    delete = async (params) => {
        const data = await this.generateData();
        const newData =  data.filter(car => car.id != params);
        this.changedData(newData);
    }
}

module.exports = Car;