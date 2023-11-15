const request = require('supertest');
const app = require('../../../../app');

beforeAll(async () => {

    const auth = await request(app)
        .post('/users/auth')
        .send({
            email: "aliffandy@gmail.com",
            password: "fandy12345"
        })   

    token = auth.body.token;

    const auth1 = await request(app)
        .post('/users/auth')
        .send({
            email: "fara@gmail.com",
            password: "fara123"
        })   

    tokenAdmin = auth1.body.token;
});

describe('users API', () => {
    describe('GET /users', () => {
        it('should get users list ', async () => {
            await request(app)
                .get("/users")
                .set('Authorization', `Bearer ${token}`) 
                .then((res) => {
                    expect(res.statusCode).toBe(200)
                })
            });

        it('should get users if not superadmin role ', async () => {
            await request(app)
                .get("/users")
                .set('Authorization', `Bearer ${tokenAdmin}`) 
                .then((res) => {
                    expect(res.statusCode).toBe(403)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                })
            });
        });
        
    describe('GET /users/current-user', () => {
        it('should get users list ', async () => {
            await request(app)
                .get("/users")
                .set('Authorization', `Bearer ${token}`) 
                .then((res) => {
                    expect(res.statusCode).toBe(200)
                })
            });
        });
        
    describe('POST /users/auth', () => {
        it('should login user and return a token', async () => {
            await request(app)
            .post("/users/auth")
            .send({
                email: "aliffandy@gmail.com",
                password: "fandy12345"
            })            
            .then((res) => {
                expect(res.statusCode).toBe(200)
                expect(res.body).toHaveProperty('status')
                expect(res.body).toHaveProperty('message')
                expect(res.body).toHaveProperty('token')
                expect(res.body.status).toBe('OK')
            })
        });

        it('should login user is failed and return status 400', async () => {
            await request(app)
            .post("/users/auth")
            .send({})            
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res.body).toHaveProperty('status')
                expect(res.body).toHaveProperty('message')
                expect(res.body.status).toBe('FAIL')
                expect(res.body.message).toBe('please input email & pasword' )
            })
        });

        it('should login user if email not exist and return status 400', async () => {
            await request(app)
            .post("/users/auth")
            .send({
                email: "alify@gmail.com",
                password: "fandy12345"
            })            
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res.body).toHaveProperty('status')
                expect(res.body).toHaveProperty('message')
                expect(res.body.status).toBe('FAIL')
                expect(res.body.message).toBe('email is not exist or not correct' )
            })
        });

        it('should login user if password is wrong and return status 400', async () => {
            await request(app)
            .post("/users/auth")
            .send({
                email: "aliffandy@gmail.com",
                password: "fandy12"
            })            
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res.body).toHaveProperty('status')
                expect(res.body).toHaveProperty('message')
                expect(res.body.status).toBe('FAIL')
                expect(res.body.message).toBe('password is wrong, please check your input !!' )
            })
        });

        it('should login user if have something error and return status 400', async () => {
            await request(app)
            .post("/users/auth")
            .send({
                email: "aliffandy@gmail.com",
                password: "fandy12"
            })            
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res.body).toHaveProperty('status')
                expect(res.body).toHaveProperty('message')
                expect(res.body.status).toBe('FAIL')
                expect(res.body.message).toBe('password is wrong, please check your input !!' )
            })
        });
    });    
        
    describe('POST /users/register', () => {
        // it('should register or add new account and return status code 200', async () => {
        //     await request(app)
        //     .post("/users/register")
        //     .send({
        //         name: "test",
        //         phone: "66666666666",
        //         address: "test",
        //         email: "test@gmail.com",
        //         password: "test"
        //     })            
        //     .then((res) => {
        //         expect(res.statusCode).toBe(201)
        //         expect(res.body).toHaveProperty('status')
        //         expect(res.body).toHaveProperty('message')
        //         expect(res.body.status).toBe('OK')
        //         expect(res.body.message).toBe('registration is successfull')
        //     })
        // });
        
        it('should register user is failed and return status 400', async () => {
            await request(app)
            .post("/users/register")
            .send({})            
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res.body).toHaveProperty('status')
                expect(res.body).toHaveProperty('message')
                expect(res.body.status).toBe('FAIL')
                expect(res.body.message).toBe('Please check your input ' )
            })
        });

        it('should register user if email is exist and return status 400', async () => {
            await request(app)
            .post("/users/register")
            .send({
                name: "test",
                phone: "66666666666",
                address: "test",
                email: "test@gmail.com",
                password: "test"
            })            
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res.body).toHaveProperty('status')
                expect(res.body).toHaveProperty('message')
                expect(res.body.status).toBe('FAIL')
                expect(res.body.message).toBe('Email is Exist, please repeat your input' )
            })
        });
    });
    
    describe('POST /users/register-admin', () => {
        // it('should register or add new account and return status code 200', async () => {
        //     await request(app)
        //     .post("/users/register-admin")
        //     .set('Authorization', `Bearer ${token}`) 
        //     .send({
        //         name: "test",
        //         phone: "66666666666",
        //         address: "test",
        //         email: "test@gmail.com",
        //         password: "test"
        //     })            
        //     .then((res) => {
        //         expect(res.statusCode).toBe(201)
        //         expect(res.body).toHaveProperty('status')
        //         expect(res.body).toHaveProperty('message')
        //         expect(res.body.status).toBe('OK')
        //         expect(res.body.message).toBe('registration is successfull')
        //     })
        // });
        
        it('should register admin is failed and return status 400', async () => {
            await request(app)
            .post("/users/register-admin")
            .set('Authorization', `Bearer ${token}`) 
            .send({})            
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res.body).toHaveProperty('status')
                expect(res.body).toHaveProperty('message')
                expect(res.body.status).toBe('FAIL')
                expect(res.body.message).toBe('Please check your input ' )
            })
        });

        it('should register admin if email is exist and return status 400', async () => {
            await request(app)
            .post("/users/register-admin")
            .set('Authorization', `Bearer ${token}`) 
            .send({
                name: "test",
                phone: "66666666666",
                address: "test",
                email: "test@gmail.com",
                password: "test"
            })            
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res.body).toHaveProperty('status')
                expect(res.body).toHaveProperty('message')
                expect(res.body.status).toBe('FAIL')
                expect(res.body.message).toBe('Email is Exist, please repeat your input' )
            })
        });


        it('should register or add new account and return status code 200', async () => {
            await request(app)
            .post("/users/register-admin")
            .set('Authorization', `Bearer ${tokenAdmin}`) 
            .send({
                name: "test",
                phone: "66666666666",
                address: "test",
                email: "test@gmail.com",
                password: "test"
            })            
            .then((res) => {
                expect(res.statusCode).toBe(403)
                expect(res.body).toHaveProperty('status')
                expect(res.body).toHaveProperty('message')
            })
        });
    });

});




