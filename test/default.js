const _ = require('underscore');
const request = require('supertest');
const appRoot = require('app-root-path');
const should = require('chai').should();

const { app } = require(`${appRoot  }/src/index.js`);

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
