const request = require('supertest');
const app = require('../../../index');

describe('', () => {
    describe('GET /users', () => {
        it('should get users list ', () => {
            return request(app)
                .get("/users")
                .expect('Content-Type', /json/)
                .set('Authorization', 'Bearer TOKEN')
                .expect(200)
                .then((res) => {
                    expect(res.statusCode).toBe(200)
                })
        });
    });


    describe('POST/users', () => {
        it('should login user and return token ', () => {
            return request(app)
                .post("/auth")
                .expect('Content-Type', /json/)
                .set('Authorization', 'Bearer TOKEN')
                .expect(200)
                .then((res) => {
                    expect(res.statusCode).toBe(200)
                })
        });
    });
});




