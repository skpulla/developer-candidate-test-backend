const request = require('supertest');

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
});
