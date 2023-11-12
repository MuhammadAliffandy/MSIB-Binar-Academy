const UsersController = require('../userController')
const AuthController = require('../authController')
const UsersServices = require('../../services/userServices')
const AuthServices = require('../../services/authServices')

jest.mock( '../../services/userServices' , () => ({
    getListUsers : jest.fn(),
    findUserById : jest.fn(),
}))

jest.mock( '../../services/authServices' , () => ({
    getToken : jest.fn(),
    decodeToken: jest.fn(),
    getNewToken: jest.fn(),
}))


describe('users API', () => {
    // GET users
    describe('GET /users', () => {
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
            
            UsersServices.getListUsers.mockReturnValue(users)
            await UsersController.getListUsers(mockReq,mockRes)
            
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith(users);

        });
        
        it('should return error status 404 on failure', async () => {

            const mockError = new Error('An error occurred');
    
            UsersServices.getListUsers.mockRejectedValue(mockError);

            
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
    
    // GET current - users
    describe('GET /current-users', () => {
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
