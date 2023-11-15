const request = require('supertest');
const app = require('../../../../app');
const imagePath = 'MSIB-Binar-Academy/chapter-07/back-end/app/view/car_view.jpg';


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


describe('cars API', () => {
    describe('GET /cars', () => {
        it('should return cars list and status code 200', async () => {
            await request(app)
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
                .get('/cars/280ec708-3bcb-4bb8-8aeb-39a72bec3193')
                .set('Authorization',`Bearer ${token}`)
                .then((res)=>{
                    expect(res.statusCode).toBe(200)
                })
        });

        it('should return cars data if not auth  and status code 200', async () => {
            await request(app)
                .get('/cars/280ec708-3bcb-4bb8-8aeb-39a72bec3193')
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
                    expect(res.statusCode).toBe(200)
                    expect(res.body).toHaveProperty('status')
                    expect(res.body).toHaveProperty('message')
                    expect(res.body).toHaveProperty('data')
                    expect(res.body.status).toBe('OK')
                    expect(res.body.message).toBe('cars data has been created')
                })
        });
        
    });

    describe('UPDATE /cars/:id', () => {
        
    });

    describe('DELETE /cars/:id', () => {
        
    });
    
});
