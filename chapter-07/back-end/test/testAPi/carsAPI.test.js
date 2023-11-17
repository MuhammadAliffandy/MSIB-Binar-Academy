const request = require('supertest');
const app = require('../../app');
const imagePath = 'D:/Holiday Project/MSIB-Binar-Academy/chapter-07/back-end/test/car_vw.jpg';

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

    const auth2 = await request(app)
        .post('/users/auth')
        .send({
            email: "sandy@gmail.com",
            password: "sandy123"
        })   

    tokenMember = auth2.body.token;

    const createCar = await request(app)
        .post('/cars')
        .set('Authorization',`Bearer ${token}`)
        .field('data', JSON.stringify({
            name: "car dummy",
            rentPerDay: 0,
            size: "car dummy"
        }))
        .attach('car-image', imagePath)

    carDummy = createCar.body.data.id
});


describe('cars API', () => {
    describe('GET /cars', () => {
        it('should return cars list and status code 200', async () => {
            return request(app)
                .get('/cars')
                .set('Authorization',`Bearer ${token}`)
                .then((res)=>{
                    expect(res.statusCode).toBe(200)
                })

        });

        it('should return cars list if not authorization and status code 401', async () => {
            await request(app)
                .get('/cars')
                .then((res)=>{
                    expect(res.statusCode).toBe(401)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                })
        });
        
    });

    describe('GET /cars/:id', () => {
        it('should return cars data and status code 200', async () => {
            await request(app)
                .get(`/cars/${carDummy}`)
                .set('Authorization',`Bearer ${token}`)
                .then((res)=>{
                    expect(res.statusCode).toBe(200)
                })
        });

        it('should return cars data if not auth  and status code 401', async () => {
            await request(app)
                .get(`/cars/${carDummy}`)
                .then((res)=>{
                    expect(res.statusCode).toBe(401)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                    
                })
        });
    });

    describe('POST /cars', () => {
        it('should create cars data and status code 200', async () => {
            await request(app)
                .post('/cars')
                .set('Authorization',`Bearer ${token}`)
                .field('data', JSON.stringify({
                    name: "car dummy",
                    rentPerDay: 0,
                    size: "car dummy"
                }))
                .attach('car-image', imagePath)
                .then((res)=>{
                    expect(res.statusCode).toBe(201)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                    expect(res.body).toHaveProperty('data')
                    expect(res.body.status).toBe('OK')
                    expect(res.body.message).toBe('cars data has been created')
                })
        });
        
        it('should create cars data if image not exits and status code 400', async () => {
            await request(app)
                .post('/cars')
                .set('Authorization',`Bearer ${token}`)
                .field('data', JSON.stringify({
                    name: "car dummy",
                    rentPerDay: 0,
                    size: "car dummy"
                }))
                .then((res)=>{
                    expect(res.statusCode).toBe(400)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                    expect(res.body.status).toBe('FAIL')
                    expect(res.body.message).toBe('Image is Undefined , Please check your input ! ')
                })
        });
        
        it('should create cars data if data structure invalid and status code 400', async () => {

            const requireData = [ 'name' , 'rentPerDay' , 'size'];

            await request(app)
                .post('/cars')
                .set('Authorization',`Bearer ${token}`)
                .field('data', JSON.stringify({
                    nameCar: "car dummy",
                    size: "car dummy",
                    rentPerDay: 0
                }))
                .attach('car-image', imagePath)
                .then((res)=>{
                    expect(res.statusCode).toBe(400)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                    expect(res.body.status).toBe('FAIL')
                    expect(res.body.message).toBe(`Invalid data structure. Please check your input and must to be ${requireData} `)
                })
        });

    });

    describe('UPDATE /cars/:id', () => {
        it('should update cars data and status code 200', async () => {
            await request(app)
                .put(`/cars/${carDummy}`)
                .set('Authorization',`Bearer ${token}`)
                .field('data', JSON.stringify({
                    name: "car dummy",
                }))
                .then((res)=>{
                    expect(res.statusCode).toBe(201)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                    expect(res.body).toHaveProperty('data')
                    expect(res.body.status).toBe('OK')
                    expect(res.body.message).toBe('cars data has been updated')
                })
        });

        it('should update cars if cars is null data and status code 400', async () => {
            await request(app)
                .put('/cars/306e96bb-2aa4-4032-bfbc-14a68129e8d6')
                .set('Authorization',`Bearer ${token}`)
                .field('data', JSON.stringify({
                    name: "car dummy",
                }))
                .then((res)=>{
                    expect(res.statusCode).toBe(400)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                    expect(res.body.status).toBe('FAIL')
                    expect(res.body.message).toBe('car not found')
                })
        });

        it('should update cars if req body is invalid and status code 400', async () => {
            await request(app)
                .put(`/cars/${carDummy}`)
                .set('Authorization',`Bearer ${token}`)
                .field('data', JSON.stringify({
                    nameC: "car dummy",
                }))
                .then((res)=>{
                    expect(res.statusCode).toBe(400)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                    expect(res.body.status).toBe('FAIL')
                    expect(res.body.message).toBe('Invalid data structure. Please check your input ')
                })
        });

        it('should update cars if not authentication and status code 401', async () => {
            await request(app)
                .put(`/cars/${carDummy}`)
                .field('data', JSON.stringify({
                    nameC: "car dummy",
                }))
                .then((res)=>{
                    expect(res.statusCode).toBe(401)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                })
        });
    });

    describe('DELETE /cars/:id', () => {
        it('should delete cars and status code 200', async () => {
            await request(app)
                .delete(`/cars/${carDummy}`)
                .set('Authorization',`Bearer ${token}`)
                .then((res)=>{
                    expect(res.statusCode).toBe(201)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                    expect(res.body.status).toBe('OK')
                    expect(res.body.message).toBe('cars data has been deleted')
                })
        });

        it('should delete cars if not authorization and status code 401', async () => {
            await request(app)
                .delete(`/cars/${carDummy}`)
                .set('Authorization',`Bearer ${token}`)
                .then((res)=>{
                    expect(res.statusCode).toBe(201)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                    expect(res.body.status).toBe('OK')
                    expect(res.body.message).toBe('cars data has been deleted')
                })
        });

        it('should delete cars if user invalid access and status code 401', async () => {
            await request(app)
                .delete(`/cars/${carDummy}`)
                .set('Authorization',`Bearer ${tokenMember}`)
                .then((res)=>{
                    expect(res.statusCode).toBe(403)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                })
        });
        
        it('should delete cars if users not authorization and status code 401', async () => {
            await request(app)
                .delete(`/cars/${carDummy}`)
                .then((res)=>{
                    expect(res.statusCode).toBe(401)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                })
        });
    });
    
});
