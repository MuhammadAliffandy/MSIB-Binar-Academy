
const UsersController = require('../userController')
const AuthServices = require('../../services/authServices')
const UserServices = require('../../services/userServices')

jest.mock( '../../services/userServices' , () => ({
    getListUsers : jest.fn(),
    findUserById : jest.fn(),
    createUserMember: jest.fn(),
    createUser: jest.fn(),
    findUserByEmail: jest.fn(),
}))

jest.mock( '../../services/authServices' , () => ({
    getToken : jest.fn(),
    decodeToken: jest.fn(),
    getNewToken: jest.fn(),
    setSession: jest.fn(),
    encryptUserPassword: jest.fn(),
    compareUserPassword : jest.fn()
}))


describe('#userController', () => {

    describe('#getListUsers', () => {
        it(' should return list users and status code 200', async () => {

            const users = [{
                id: "296cc6e3-2b6e-44d5-85b6-a251480bbece",
                name: "Aliffandy",
                phone: "083456785678",
                address: "Tokyo, Japan",
                role: "superadmin",
                email: "aliffandy@gmail.com",
                password: "$2b$10$e8dC5u/mxy5HExlcv5.RpOFUlbDwWy0GFgdvYKzzDH5PYzmu9xG2u",
                createdAt: "2023-10-20T11:30:23.147Z",
                updatedAt: "2023-10-20T11:30:23.147Z"
            }]

            const mockReq = {}

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            UserServices.getListUsers.mockReturnValue(users)
            await UsersController.getListUsers(mockReq,mockRes)
            
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith(users);

        });
        
        it('should return error status 404 on failure', async () => {

            const mockError = new Error('An error occurred');
    
            UserServices.getListUsers.mockRejectedValue(mockError);

            
            const mockReq = {}

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await UsersController.getListUsers(mockReq, mockRes);
    
            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: mockError.message
            });
        });
    });
    
    describe('#login', () => {
        it('should return token if user auth and status code 200', async () => {
            const mockReq = {
                user : {
                    id: 123,
                    name : 'aliffandy@gmail.com',
                    password: 'fandy12345'
                },
                session : 'dummySession'
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            const token = 'this is token';

            AuthServices.getToken.mockReturnValue(token)
            AuthServices.setSession.mockReturnValue(mockReq.session);
            await UsersController.login(mockReq,mockRes);

            expect(AuthServices.setSession).toHaveBeenCalled();
            expect(AuthServices.getToken).toHaveBeenCalled();
            expect(AuthServices.getToken).toHaveBeenCalledWith({ id: 123 });
            expect(AuthServices.setSession).toHaveBeenCalledWith(mockReq.session, true, token);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : 'OK',
                message : 'Authentication is successfull',
                token: token,
            });
        });

        it('should return error status 404 on failure', async () => {

            const mockError = new Error('An error occurred');

            const mockReq = {
                user : {
                    name : 'aliffandy@gmail.com',
                    password: 'fandy12345'
                },
                session : 'dummySession'
                
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            const token = 'this is token';

            AuthServices.getToken.mockRejectedValue(mockError);
            AuthServices.setSession.mockRejectedValue(mockError);
            await UsersController.login(mockReq,mockRes);

            expect(AuthServices.setSession).toHaveBeenCalled();
            expect(AuthServices.getToken).toHaveBeenCalled();
            expect(AuthServices.getToken).toHaveBeenCalledWith({ id: 123 });
            expect(AuthServices.setSession).toHaveBeenCalledWith(mockReq.session, true, token);
            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: mockError.message,
            });
        });
        
    });

    describe('#loginOauth', () => {
        it('should return token if user oauth and status code 200', async () => {
            const mockReq = {
                user : {
                    name : 'aliffandy@gmail.com',
                    password: 'fandy12345'
                },
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            const token = 'this is token';

            AuthServices.getToken.mockReturnValue(token)
            await UsersController.loginOAuth(mockReq,mockRes);

            expect(AuthServices.getToken).toHaveBeenCalledWith({ user : { ...mockReq.user , role : 'member'}});
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : 'OK',
                message : 'Authentication OAuth is successfull',
                token: token,
            });
        });

        it('should return error status 404 on failure', async () => {

            const mockError = new Error('An error occurred');

            const mockReq = {
                user : {
                    name : 'aliffandy@gmail.com',
                    password: 'fandy12345'
                },
                
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            AuthServices.getToken.mockRejectedValue(mockError);
            await UsersController.loginOAuth(mockReq,mockRes);

            expect(AuthServices.getToken).toHaveBeenCalledWith({ user : { ...mockReq.user , role : 'member'}});
            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: mockError.message,
            });
        });
        
    });

    describe('#registerMember', () => {
        it('should return new user data and status code 201', async () => {

            const user = {
                id: "296cc6e3-2b6e-44d5-85b6-a251480bbece",
                name: "Aliffandy",
                phone: "083456785678",
                address: "Tokyo, Japan",
                role: "superadmin",
                email: "aliffandy@gmail.com",
                password: "$2b$10$e8dC5u/mxy5HExlcv5.RpOFUlbDwWy0GFgdvYKzzDH5PYzmu9xG2u",
                createdAt: "2023-10-20T11:30:23.147Z",
                updatedAt: "2023-10-20T11:30:23.147Z"
            };

            const mockReq = {
                user : {
                    name : 'aliffandy@gmail.com',
                    password: 'fandy12345',
                    role: 'member'
                },
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            UserServices.createUserMember.mockReturnValue(user)
            await UsersController.registrationMember(mockReq,mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(201);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : 'OK',
                message: 'registration is successfull',
                data: user,
            });
        });

        it('should return error status 404 on failure', async () => {
            
            const mockError = new Error('An error occurred');

            const mockReq = {
                user : {
                    name : 'aliffandy@gmail.com',
                    password: 'fandy12345',
                    role: 'member'
                },
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            UserServices.createUserMember.mockRejectedValue(mockError)
            await UsersController.registrationMember(mockReq,mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: mockError.message,
            });
        });

    });

    describe('#registerAdmin', () => {
        it('should return new user data admin and status code 201', async () => {

            const user = {
                id: "296cc6e3-2b6e-44d5-85b6-a251480bbece",
                name: "Aliffandy",
                phone: "083456785678",
                address: "Tokyo, Japan",
                role: "superadmin",
                email: "aliffandy@gmail.com",
                password: "$2b$10$e8dC5u/mxy5HExlcv5.RpOFUlbDwWy0GFgdvYKzzDH5PYzmu9xG2u",
                createdAt: "2023-10-20T11:30:23.147Z",
                updatedAt: "2023-10-20T11:30:23.147Z"
            };

            const mockReq = {
                user : {
                    name : 'aliffandy@gmail.com',
                    password: 'fandy12345',
                    role: 'admin'
                },
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            UserServices.createUser.mockReturnValue(user)
            await UsersController.registrationAdmin(mockReq,mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(201);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : 'OK',
                message: 'registration is successfull',
                data: user,
            });
        });

        it('should return error status 404 on failure', async () => {
            
            const mockError = new Error('An error occurred');

            const mockReq = {
                user : {
                    name : 'aliffandy@gmail.com',
                    password: 'fandy12345',
                    role: 'member'
                },
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            UserServices.createUser.mockRejectedValue(mockError)
            await UsersController.registrationAdmin(mockReq,mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: mockError.message,
            });
        });
    });

    describe('#logout', () => {
        it('should clear cookie, logout, and redirect', () => {
            const mockReq = {};
            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            mockRes.clearCookie = jest.fn();
            mockRes.redirect = jest.fn().mockReturnValue('/')
            mockReq.logout = jest.fn(callback => callback(null));
            
            mockReq.session = {
                user : 'none'
            };
            
            UsersController.logout( mockReq , mockRes);
            
            expect(mockRes.clearCookie).toHaveBeenCalledWith('connect.sid');
            expect(mockReq.logout).toHaveBeenCalled();
            expect(mockReq.session).toBeNull(); 
            expect(mockRes.redirect).toHaveBeenCalledWith('/');
        });
            
    });
        
    describe('#registrationValidation', () => {
        it('should next and checked validation',  async() => {
    
            const mockReq = {
                body : {
                    name: "Aliffandy",
                    phone: "083456785678",
                    address: "Tokyo, Japan",
                    email: "aliffandy@gmail.com",
                    password: "fandy123",
                },
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            UserServices.findUserByEmail.mockResolvedValue(null);
            AuthServices.encryptUserPassword.mockResolvedValue('hashed')
        
            await UsersController.registrationValidation(mockReq,mockRes,mockNext);

            expect(UserServices.findUserByEmail).toHaveBeenCalledWith(mockReq.body.email)
            expect(AuthServices.encryptUserPassword).toHaveBeenCalledWith(mockReq.body.password)
            expect(mockNext).toHaveBeenCalled();

        });

        it('should req its empty',  async() => {
    
            const mockReq = {
                body : {
                },
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

        
            await UsersController.registrationValidation(mockReq,mockRes,mockNext);

            expect(mockNext).not.toHaveBeenCalled();
            expect(mockRes.status).toHaveBeenCalledWith(400)
            expect(mockRes.json).toHaveBeenCalledWith({
                status : 'FAIL',
                message : 'Please check your input '
            })

        });

        it('should email is exist and status code 400',  async() => {
    
            const mockReq = {
                body : {
                    name: "Aliffandy",
                    phone: "083456785678",
                    address: "Tokyo, Japan",
                    email: "aliffandy@gmail.com",
                    password: "fandy123",
                },
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            UserServices.findUserByEmail.mockResolvedValue(mockReq.body);
        
            await UsersController.registrationValidation(mockReq,mockRes,mockNext);

            expect(UserServices.findUserByEmail).toHaveBeenCalledWith(mockReq.body.email)
            expect(mockNext).not.toHaveBeenCalled();
            expect(mockRes.status).toHaveBeenCalledWith(400)
            expect(mockRes.json).toHaveBeenCalledWith({
                status : 'FAIL',
                message : 'Email is Exist, please repeat your input'
            })

        });

        it('should error and status code 404',  async() => {
    
            const mockReq = {
                body : {
                    name: "Aliffandy",
                    phone: "083456785678",
                    address: "Tokyo, Japan",
                    email: "aliffandy@gmail.com",
                    password: "fandy123",
                },
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            UserServices.findUserByEmail.mockRejectedValue(new Error());
        
            await UsersController.registrationValidation(mockReq,mockRes,mockNext);

            expect(mockNext).not.toHaveBeenCalled();
            expect(mockRes.status).toHaveBeenCalledWith(404)
            expect(mockRes.json).toHaveBeenCalledWith({
                status : 'FAIL',
                message : new Error().message
            })

        });

        
    })

    describe('#loginValidation', () => {
        it('should return next method', async () => {


            const user = {
                id : 1,
                name: "Aliffandy",
                phone: "083456785678",
                address: "Tokyo, Japan",
                email: "aliffandy@gmail.com",
                password: "43sadasdh0and209h20h",
            }

            const mockReq = {
                body : {
                    email: "aliffandy@gmail.com",
                    password: "fandy123",
                },

                session : {
                    id : 1,
                    token: 'this is token',
                    authenticated : false
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            UserServices.findUserByEmail.mockReturnValue(user);
            AuthServices.compareUserPassword.mockReturnValue(true);
            AuthServices.decodeToken.mockReturnValue('');
            UserServices.findUserById.mockReturnValue({})

            await UsersController.loginValidation(mockReq,mockRes,mockNext);

            expect(UserServices.findUserByEmail).toHaveBeenCalledWith(mockReq.body.email)
            expect( AuthServices.compareUserPassword).toHaveBeenCalledWith(mockReq.body.password,user.password)
            expect(mockNext).toHaveBeenCalled()

        });

        it('should return email is not exist and status code 400', async () => {


            const user = {
                id : 1,
                name: "Aliffandy",
                phone: "083456785678",
                address: "Tokyo, Japan",
                email: "aliffandy@gmail.com",
                password: "43sadasdh0and209h20h",
            }

            const mockReq = {
                body : {
                    email: "aliffandy@gmail.com",
                    password: "fandy123",
                },

                session : {
                    id : 1,
                    token: 'this is token',
                    authenticated : false
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            UserServices.findUserByEmail.mockReturnValue(null);

            await UsersController.loginValidation(mockReq,mockRes,mockNext);

            expect(UserServices.findUserByEmail).toHaveBeenCalledWith(mockReq.body.email)
            expect(mockRes.status).toHaveBeenCalledWith(400)
            expect(mockRes.json).toHaveBeenCalledWith({
                status : 'FAIL',
                message: 'email is not exist or not correct' 
            })
            expect(mockNext).not.toHaveBeenCalled()

        });
        
        it('should return compared password is failed and status code 400', async () => {


            const user = {
                id : 1,
                name: "Aliffandy",
                phone: "083456785678",
                address: "Tokyo, Japan",
                email: "aliffandy@gmail.com",
                password: "43sadasdh0and209h20h",
            }

            const mockReq = {
                body : {
                    email: "aliffandy@gmail.com",
                    password: "fandy123",
                },

                session : {
                    id : 1,
                    token: 'this is token',
                    authenticated : false
                }
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }
            
            const mockNext = jest.fn()

            UserServices.findUserByEmail.mockReturnValue(user);
            AuthServices.compareUserPassword.mockReturnValue(false);

            await UsersController.loginValidation(mockReq,mockRes,mockNext);

            expect(UserServices.findUserByEmail).toHaveBeenCalledWith(mockReq.body.email)
            expect( AuthServices.compareUserPassword).toHaveBeenCalledWith(mockReq.body.password,user.password)
            expect(mockRes.status).toHaveBeenCalledWith(400)
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message:'password is wrong, please check your input !!'
            })
            expect(mockNext).not.toHaveBeenCalled()

        });
    });

    it('should return authenticated is true and status code 200', async () => {


        const user = {
            id : 1,
            name: "Aliffandy",
            phone: "083456785678",
            address: "Tokyo, Japan",
            email: "aliffandy@gmail.com",
            password: "43sadasdh0and209h20h",
        }

        const mockReq = {
            body : {
                email: "aliffandy@gmail.com",
                password: "fandy123",
            },

            session : {
                id : 1,
                token: 'this is token',
                authenticated : true
            }
        }

        const mockRes = {
            status : jest.fn().mockReturnThis(),
            json : jest.fn().mockReturnThis()
        }
        
        const mockNext = jest.fn()

        UserServices.findUserByEmail.mockReturnValue(user);
        AuthServices.compareUserPassword.mockReturnValue(true);
        AuthServices.decodeToken.mockReturnValue(user);
        UserServices.findUserById.mockReturnValue(user)

        await UsersController.loginValidation(mockReq,mockRes,mockNext);

        expect(UserServices.findUserByEmail).toHaveBeenCalledWith(mockReq.body.email)
        expect( AuthServices.compareUserPassword).toHaveBeenCalledWith(mockReq.body.password,user.password)
        expect(AuthServices.decodeToken).toHaveBeenCalledWith(mockReq.session.token)
        expect(UserServices.findUserById).toHaveBeenCalledWith(user.id)
        expect(mockRes.status).toHaveBeenCalledWith(200)
        expect(mockRes.json).toHaveBeenCalledWith({
            status : 'OK',
            message : 'Your account has been authenticated',
            token: mockReq.session.token,
        })
        expect(mockNext).not.toHaveBeenCalled()

    });
    
    it('should return fail and status code 404', async () => {

        const mockError = new Error();

        const mockReq = {
            body : {
                email: "aliffandy@gmail.com",
                password: "fandy123",
            },

            session : {
                id : 1,
                token: 'this is token',
                authenticated : true
            }
        }

        const mockRes = {
            status : jest.fn().mockReturnThis(),
            json : jest.fn().mockReturnThis()
        }
        
        const mockNext = jest.fn()

        UserServices.findUserByEmail.mockRejectedValue(mockError);

        await UsersController.loginValidation(mockReq,mockRes,mockNext);

        expect(UserServices.findUserByEmail).toHaveBeenCalledWith(mockReq.body.email)
        expect(mockRes.status).toHaveBeenCalledWith(404)
        expect(mockRes.json).toHaveBeenCalledWith({
            status: 'FAIL',
            message: mockError.message,
        })
        expect(mockNext).not.toHaveBeenCalled()

    });
    

});
