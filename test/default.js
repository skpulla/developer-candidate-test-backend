const request = require('supertest');
const appRoot = require('app-root-path');

const { app } = require(`${appRoot.path}/src/index.js`);

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
