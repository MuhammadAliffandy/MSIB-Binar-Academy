
const AuthController = require('../authController')
const AuthServices = require('../../services/authServices')
const UsersServices = require('../../services/userServices')

jest.mock( '../../services/authServices' , () => ({
    getToken : jest.fn(),
    decodeToken: jest.fn(),
    getNewToken: jest.fn(),
}))

jest.mock( '../../services/userServices' , () => ({
    findUserById : jest.fn(),
}))


describe('#authorizationController', () => {

    // auth for all user role

    describe('#Authorization middleware to all users', () => {
        it(' authorizationToAllUsers should for all role', async () => {

            const mockReq = {
                user : {
                    role : 'member'
                },
                headers: { authorization: 'Bearer mockToken' }, 
            }

            const mockRes = {
            }

            const mockNext = jest.fn()

            AuthServices.getNewToken.mockResolvedValue({ id: '1', exp: Math.floor(Date.now() / 1000) + 3600 });
            AuthServices.decodeToken.mockReturnValue('newMockToken');

            await AuthController.authorizationToAllUsers(mockReq,mockRes,mockNext)
            
            expect(mockNext).toHaveBeenCalled();

        });

        it('authorizationToAllUsers should return 403 for invalid role', async () => {

            const mockReq = {
                user : {
                    role : 'ninja'
                },
                headers: { authorization: 'Bearer mockToken' }, 
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            const mockNext = jest.fn()

            await AuthController.authorizationToAllUsers(mockReq,mockRes,mockNext)
            
            expect(mockRes.status).toHaveBeenCalledWith(403);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: 'You dont has been permission for this action'  
            });

        });
        
    });

    //  auth for resource 

    describe('#Authorization middleware for user to resource', () => {
        it(' authorizationToAllUsers should user role  to resource', async () => {

            const mockReq = {
                user : {
                    role : 'admin'
                },
                headers: { authorization: 'Bearer mockToken' }, 
            }

            const mockRes = {}

            const mockNext = jest.fn()

            AuthServices.getNewToken.mockResolvedValue({ id: '1', exp: Math.floor(Date.now() / 1000) + 3600 });
            AuthServices.decodeToken.mockReturnValue('newMockToken');

            await AuthController.authorizationToResource(mockReq,mockRes,mockNext)
            
            expect(mockNext).toHaveBeenCalled();

        });

        it('authorizationToAllUsers should return 403 for invalid role', async () => {

            const mockReq = {
                user : {
                    role : 'ninja'
                },
                headers: { authorization: 'Bearer mockToken' }, 
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            const mockNext = jest.fn()

            await AuthController.authorizationToResource(mockReq,mockRes,mockNext)
            
            expect(mockRes.status).toHaveBeenCalledWith(403);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: 'You dont has been permission for this action'  
            });

        });
        
    });

    // auth for superadmin

    describe('#Authorization middleware for superadmin role', () => {
        it(' authorizationToAllUsers should user role for superadmin', async () => {

            const mockReq = {
                user : {
                    role : 'superadmin'
                },
                headers: { authorization: 'Bearer mockToken' }, 
            }

            const mockRes = {}

            const mockNext = jest.fn()

            AuthServices.getNewToken.mockResolvedValue({ id: '1', exp: Math.floor(Date.now() / 1000) + 3600 });
            AuthServices.decodeToken.mockReturnValue('newMockToken');

            await AuthController.authorizationToAdmin(mockReq,mockRes,mockNext)
            
            expect(mockNext).toHaveBeenCalled();

        });

        it('authorizationToAllUsers should return 403 for invalid role', async () => {

            const mockReq = {
                user : {
                    role : 'ninja'
                },
                headers: { authorization: 'Bearer mockToken' }, 
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            const mockNext = jest.fn()

            await AuthController.authorizationToAdmin(mockReq,mockRes,mockNext)
            
            expect(mockRes.status).toHaveBeenCalledWith(403);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: 'You dont has been permission for this action'  
            });

        });
        
    });

    describe('#getCurrentUser', () => {
        it(' should return user data and status code 200', async () => {

            const users = {
                id: "296cc6e3-2b6e-44d5-85b6-a251480bbece",
                name: "Aliffandy",
                phone: "083456785678",
                address: "Tokyo, Japan",
                role: "superadmin",
                email: "aliffandy@gmail.com",
                password: "$2b$10$e8dC5u/mxy5HExlcv5.RpOFUlbDwWy0GFgdvYKzzDH5PYzmu9xG2u",
                createdAt: "2023-10-20T11:30:23.147Z",
                updatedAt: "2023-10-20T11:30:23.147Z"
            }

            const mockReq = {
                user : {
                    id : '296cc6e3-2b6e-44d5-85b6-a251480bbece'
                },
                headers: { authorization: 'Bearer mockToken' }, 
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            AuthServices.getNewToken.mockResolvedValue({ id: '1', exp: Math.floor(Date.now() / 1000) + 3600 });
            AuthServices.decodeToken.mockReturnValue('newMockToken');

            UsersServices.findUserById.mockReturnValue(users)
            await AuthController.getCurrentUser(mockReq,mockRes)
            
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({
                status : 'OK',
                message : 'current user data is successfull',
                data : users,    
            });

        });
        
        it('should return error status 404 on failure', async () => {
            
            const mockError = new Error('An error occurred');

            const mockReq = {
                user : {
                    id : '296cc6e3-2b6e-44d5-85b6-a251480bbece'
                },
                headers: { authorization: 'Bearer mockToken' }, 
            }

            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn().mockReturnThis()
            }

            
            AuthServices.getNewToken.mockResolvedValue({ id: '1', exp: Math.floor(Date.now() / 1000) + 3600 });
            AuthServices.decodeToken.mockRejectedValue(mockError);

            await AuthController.getCurrentUser(mockReq, mockRes);
    
            expect(mockRes.status).toHaveBeenCalledWith(401);
            expect(mockRes.json).toHaveBeenCalledWith({
                status: 'FAIL',
                message: mockError.message
            });
        });
    });

});
