
const CarsController = require('../carsController');
const CarsServices = require('../../services/carsServices');

jest.mock('../../services/carsServices', () => ({ 
    getListCars: jest.fn(),
    getCars: jest.fn(),
    createCars : jest.fn(),
    updateCars : jest.fn(),
    deleteCars : jest.fn(),
    uploadImage : jest.fn()
}));

describe('#carsController ', () => {

    describe('#getListCars', () => {
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

            expect(CarsServices.getListCars).toHaveBeenCalled();
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

    describe('#getCars', () => {
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

            expect(CarsServices.getCars).toHaveBeenCalledWith('1');
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

    describe('#createCars', () => {
        it('should create car data and status code 201', async () => {
            
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

            expect(CarsServices.createCars).toHaveBeenCalledWith(
                mockReq.data,mockReq.fileImage,mockReq.user.id
            );
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

    describe('#updateCars', () => {

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

            expect(CarsServices.updateCars).toHaveBeenCalledWith(mockReq.params.id , mockReq.data);
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

    describe('#deleteCars', () => {
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

            expect(CarsServices.deleteCars).toHaveBeenCalledWith(mockReq.params.id, mockReq.user.id);
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

    describe('#createCarsValidation', () => {
        it('should return next method', async () => {
            
            const mockReq = {
                body : {
                    data : JSON.stringify({
                        name : 'Batman Cars',
                        rentPerDay: '100000',
                        size: 'Large',
                    })
                },

                file : {
                    buffer : {
                        data : {}
                    }
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue('image source');
            await CarsController.createCarsValidation(mockReq,mockRes,mockNext)

            expect(CarsServices.uploadImage).toHaveBeenCalledWith(mockReq.file.buffer)
            expect(mockNext).toHaveBeenCalled()

        });

        it('should return next method if data body to much', async () => {
            
            const mockReq = {
                body : {
                    data : JSON.stringify([
                        {
                            name : 'Batman Cars',
                            rentPerDay: '100000',
                            size: 'Large',
                        },
                        {
                            name : 'Batman Cars',
                            rentPerDay: '100000',
                            size: 'Large',
                        }
                    ])
                },

                file : {
                    buffer : {
                        data : {}
                    }
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue('image source');
            await CarsController.createCarsValidation(mockReq,mockRes,mockNext)

            expect(CarsServices.uploadImage).toHaveBeenCalledWith(mockReq.file.buffer)
            expect(mockNext).toHaveBeenCalled()

        });

        it('should Invalid data structure and status code 400 ', async () => {
    
            const mockReq = {
                body : {
                    data : JSON.stringify({
                        rentPerDay: '100000',
                        size: 'Large',
                    })
                },

                file : {
                    buffer : {
                        data : {}
                    }
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue('image source');
            await CarsController.createCarsValidation(mockReq,mockRes,mockNext)
            
            expect(CarsServices.uploadImage).toHaveBeenCalledWith(mockReq.file.buffer)
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : "FAIL",
                message : `Invalid data structure. Please check your input  `
            });
            expect(mockNext).not.toHaveBeenCalled()

        });

        it('should Invalid data structure if data body to much and status code 400 ', async () => {
    
            const requireData = [ 'name' , 'rentPerDay' , 'size'];

            const mockReq = {
                body : {
                    data : JSON.stringify([
                        {
                            name : 'Batman Cars',
                            size: 'Large',
                            rentPerDay: '100000',
                        },
                        {
                            name : 'Batman Cars',
                            size: 'Large',
                            rentPerDay: '100000',
                        }
                    ])
                },

                file : {
                    buffer : {
                        data : {}
                    }
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue('image source');
            await CarsController.createCarsValidation(mockReq,mockRes,mockNext)
            
            expect(CarsServices.uploadImage).toHaveBeenCalledWith(mockReq.file.buffer)
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : "FAIL",
                message : `Invalid data structure. Please check your input and must to be ${requireData} `
            });
            expect(mockNext).not.toHaveBeenCalled()

        });

        it('should Invalid data structure and status code 400 ', async () => {

            const requireData = [ 'name' , 'rentPerDay' , 'size'];
            
            const mockReq = {
                body : {
                    data : JSON.stringify({
                        name: 'Batman Cars',
                        rentPerDayCar: '100000',
                        sizeCar: 'Large',
                    })
                },
                file : {
                    buffer : {
                        data : {}
                    }
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue('image source');
            await CarsController.createCarsValidation(mockReq,mockRes,mockNext)

            expect(CarsServices.uploadImage).toHaveBeenCalledWith(mockReq.file.buffer)
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : "FAIL",
                message : `Invalid data structure. Please check your input and must to be ${requireData} `
            });
            expect(mockNext).not.toHaveBeenCalled()

        });

        it('should return image is null and status code 400 ', async () => {
            
            const mockReq = {                
                body : {
                    data : JSON.stringify({
                        name: 'Batman Cars',
                        rentPerDayCar: '100000',
                        sizeCar: 'Large',
                    })
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue('image source');
            await CarsController.createCarsValidation(mockReq,mockRes,mockNext)

            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : "FAIL",
                message : `Image is Undefined , Please check your input ! `
            });
            expect(mockNext).not.toHaveBeenCalled()

        });
        
        it('should return image is null if data body to much  and status code 400 ', async () => {
            
            const mockReq = {                
                body : {
                    data : JSON.stringify([
                        {
                            name: 'Batman Cars',
                            rentPerDayCar: '100000',
                            sizeCar: 'Large',
                        },
                        {
                            name: 'Batman Cars',
                            rentPerDayCar: '100000',
                            sizeCar: 'Large',
                        }
                    ])
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue('image source');
            await CarsController.createCarsValidation(mockReq,mockRes,mockNext)

            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : "FAIL",
                message : `Image is Undefined , Please check your input ! `
            });
            expect(mockNext).not.toHaveBeenCalled()

        });

        it('should return body is null and status code 400 ', async () => {
            
            const mockReq = {                
                file : {
                    buffer : {
                        data : {}
                    }
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue('image source');
            await CarsController.createCarsValidation(mockReq,mockRes,mockNext)

            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : "FAIL",
                message : `req body is Undefined , Please check your input ! `
            });
            expect(mockNext).not.toHaveBeenCalled()

        });
        
    });

    describe('#updateCarsValidation', () => {

        it('should return next method', async () => {

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
                params : {
                    id : 'id'
                },
                body : {
                    data : JSON.stringify({
                        name: 'Batman Cars',
                        rentPerDay: '100000',
                        size: 'Large',
                    })
                },
                file : {
                    buffer : {
                        data : {}
                    }
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue('image source');
            CarsServices.getCars.mockReturnValue(cars);
            await CarsController.updateCarsValidation(mockReq,mockRes,mockNext);

            expect(CarsServices.getCars).toHaveBeenCalledWith(mockReq.params.id)
            expect(CarsServices.uploadImage).toHaveBeenCalledWith(mockReq.file.buffer)
            expect(mockNext).toHaveBeenCalled();

        });

        it('should return next method if body req only data', async () => {

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
                params : {
                    id : 'id'
                },
                body : {
                    data : JSON.stringify({
                        name: 'Batman Cars',
                    })
                },
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue(null);
            CarsServices.getCars.mockReturnValue(cars);
            await CarsController.updateCarsValidation(mockReq,mockRes,mockNext);

            expect(CarsServices.getCars).toHaveBeenCalledWith(mockReq.params.id)
            expect(mockNext).toHaveBeenCalled();

        });
        
        it('should return next method if body req only image', async () => {

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
                params : {
                    id : 'id'
                },
                body : {
                    data : null
                },
                file : {
                    buffer : {
                        data : {}
                    }
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue('image source');
            CarsServices.getCars.mockReturnValue(cars);
            await CarsController.updateCarsValidation(mockReq,mockRes,mockNext);

            expect(CarsServices.getCars).toHaveBeenCalledWith(mockReq.params.id)
            expect(CarsServices.uploadImage).toHaveBeenCalledWith(mockReq.file.buffer)
            expect(mockNext).toHaveBeenCalled();

        });

        it('should car is not existing and status code 400', async () => {
            
            const mockReq = {
                params : {
                    id : 'id'
                },
                body : {
                    data : JSON.stringify({
                        name: 'Batman Cars',
                        rentPerDay: '100000',
                        size: 'Large',
                    })
                },
                file : {
                    buffer : {
                        data : {}
                    }
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue('image source');
            CarsServices.getCars.mockReturnValue(null);
            await CarsController.updateCarsValidation(mockReq,mockRes,mockNext);

            expect(CarsServices.getCars).toHaveBeenCalledWith(mockReq.params.id)
            expect(CarsServices.uploadImage).toHaveBeenCalledWith(mockReq.file.buffer)
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : "FAIL",
                message : "car not found"
            });
            expect(mockNext).not.toHaveBeenCalled();

        });

        it('should return invalid data structure and status code 400', async () => {
            
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
                params : {
                    id : 'id'
                },
                body : {
                    data : JSON.stringify({
                        nameCar: 'Batman Cars',
                        rentPerDayCar: '100000',
                        sizeCar: 'Large',
                    })
                },
                file : {
                    buffer : {
                        data : {}
                    }
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            CarsServices.uploadImage.mockReturnValue('image source');
            CarsServices.getCars.mockReturnValue(cars);
            await CarsController.updateCarsValidation(mockReq,mockRes,mockNext);

            expect(CarsServices.getCars).toHaveBeenCalledWith(mockReq.params.id)
            expect(CarsServices.uploadImage).toHaveBeenCalledWith(mockReq.file.buffer)
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : "FAIL",
                message : 'Invalid data structure. Please check your input '
            });
            expect(mockNext).not.toHaveBeenCalled();

        });       

    });
    

});
