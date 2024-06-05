const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const app = require('../server');
const User = require('../models/User');

describe('Auth API', () => {
    before((done) => {
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => done())
            .catch((err) => done(err));
    });

    after((done) => {
        mongoose.connection.close(() => done());
    });

    beforeEach((done) => {
        User.deleteMany({}, (err) => done());
    });

    it('should register a user', (done) => {
        request(app)
            .post('/api/auth/register')
            .send({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' })
            .expect(200)
            .expect((res) => {
                res.body.should.have.property('token');
            })
            .end(done);
    });

    it('should login a user', (done) => {
        const user = new User({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' });
        user.password = user.hashPassword('password123');
        user.save((err) => {
            if (err) return done(err);
            request(app)
                .post('/api/auth/login')
                .send({ email: 'john.doe@example.com', password: 'password123' })
                .expect(200)
                .expect((res) => {
                    res.body.should.have.property('token');
                })
                .end(done);
        });
    });
});
