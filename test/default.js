const request = require('supertest');
const should = require('chai').should();

const { app } = require('../src/server.js');

describe('default', () => {
  it('GET /', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('GET /people', (done) => {
    request(app)
      .get('/people')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('GET /people should return an array', (done) => {
    request(app)
      .get('/people')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, results) => {
        if (err) return done(err);
        results.body.should.be.an('array');
        done();
      });
  });
});
