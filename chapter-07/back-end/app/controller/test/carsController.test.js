
const CarsController = require('../carsController');
const CarsServices = require('../../services/carsServices');

jest.mock('../../services/carsServices', () => ({ 
    getListCars: jest.fn(),
    getCars: jest.fn(),
    createCars : jest.fn(),
    updateCars : jest.fn(),
    deleteCars : jest.fn(),
}));

describe('#carsController ', () => {

    // Get list Cars

    describe('GET /cars', () => {
        it('should return car data and status code 200', async () => {
            
            const cars = [{
                id : '1',
                name : 'Batman Cars',
                image: 'https://images.com',
                size: 'Large',
                rentPerDay: '100000',
                createdAt: new Date(),
                updatedAt: new Date(),
            }];

            const mockReq = {
                query: {}
            };
            
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            };

            CarsServices.getListCars.mockReturnValue(cars)
            await CarsController.getListCars(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith(cars);
        });

        it('should return error status 404 on failure', async () => {

            const mockError = new Error('An error occurred');
    
            CarsServices.getListCars.mockRejectedValue(mockError);

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await CarsController.getListCars(null, mockRes);
    
            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: mockError.message
            });
        });
    });

    // Get Cars

    describe('GET /cars/:id', () => {
        it('should return car data and status code 200', async () => {
            
            const cars = {
                id : '1',
                name : 'Batman Cars',
                image: 'https://images.com',
                size: 'Large',
                rentPerDay: '100000',
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            const mockReq = {
                params: {
                    id: '1'
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            };

            CarsServices.getCars.mockReturnValue(cars)
            await CarsController.getCars(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith(cars);
        });

        it('should return error status 404 on failure', async () => {

            const mockError = new Error('An error occurred');
    
            CarsServices.getCars.mockRejectedValue(mockError);

            const mockReq = {
                params: {
                    id: '1'
                }
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await CarsController.getCars(mockReq, mockRes);
    
            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: mockError.message
            });
        });
    });

    // Post Cars

    describe('POST /cars', () => {
        it('should create car data and status code 201', async () => {
            
            const cars = [{
                id : '1',
                name : 'Batman Cars',
                image: 'https://images.com',
                size: 'Large',
                rentPerDay: '100000',
                createdAt: new Date(),
                updatedAt: new Date(),
            }];

            const mockReq = {
                data: {
                    name : 'Batman Cars',
                    size: 'Large',
                    rentPerDay: '100000',
                },
                fileImage : 'https://images.com',
                user: {
                    id : '2'
                }
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis(),
            };

            CarsServices.createCars.mockReturnValue(cars)
            await CarsController.createCars(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(201);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : 'OK',
                message : 'cars data has been created',
                data : cars,
            });
        });

        it('should return error status 404 on failure', async () => {

            const mockError = new Error('An error occurred');
    
            CarsServices.createCars.mockRejectedValue(mockError);

            const mockReq = {
                data: {
                    name : 'Batman Cars',
                    size: 'Large',
                    rentPerDay: '100000',
                },
                fileImage : 'https://images.com',
                user: {
                    id : '2'
                }
            }

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await CarsController.createCars(mockReq, mockRes);
    
            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: mockError.message
            });
        });
    });

    // PUT cars

    describe('PUT /cars/:id', () => {
        it('should update car data and status code 201', async () => {
            
            const cars =   [
                1,
                [
                    {
                        dataValues: {      id : '1',
                        name : 'Batman Cars',
                        image: 'https://images.com',
                        size: 'Large',
                        rentPerDay: '100000',
                        createdAt: new Date(),
                        updatedAt: new Date(),},
                        }
                    ]
                ]
            
            const mockReq = {
                params:{
                    id : '1'
                },
                data: {
                    name : 'Batman Cars'
                },
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            CarsServices.updateCars.mockReturnValue(cars)
            await CarsController.updateCars(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(201);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : 'OK',
                message : 'cars data has been updated',
                data : cars[1][0].dataValues,
            });
        });

        it('should return error status 404 on failure', async () => {

            const mockError = new Error('An error occurred');
    
            CarsServices.updateCars.mockRejectedValue(mockError);

            const mockReq = {
                params:{
                    id : '1'
                },
                data: {
                    name : 'Batman Cars'
                },
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await CarsController.updateCars(mockReq, mockRes);
    
            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: mockError.message
            });
        });
    });

    // DELETE cars 
    describe('DELETE /cars/:id', () => {
        it('should delete car data and status code 200', async () => {

            
            const mockReq = {
                params:{
                    id : '1'
                },
                user:{
                    id : '1'
                },
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            CarsServices.deleteCars.mockReturnValue()
            await CarsController.deleteCars(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(201);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : 'OK',
                message : 'cars data has been deleted', 
            });
        });

        it('should return error status 404 on failure', async () => {

            const mockError = new Error('An error occurred');
    
            CarsServices.deleteCars.mockRejectedValue(mockError);

            const mockReq = {
                params:{
                    id : '1'
                },
                user:{
                    id : '1'
                },
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await CarsController.deleteCars(mockReq, mockRes);
    
            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: mockError.message
            });
        });
    });

});
