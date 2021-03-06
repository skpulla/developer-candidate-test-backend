const _ = require('underscore');
const request = require('supertest');
const should = require('chai').should();

const { app } = require('../src/server.js');

describe('default', () => {
  it('default end-point should work', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});

describe('/people tests', () => {
  it('default end-point should work', (done) => {
    request(app)
      .get('/people')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should return an array', (done) => {
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

  it('limit filter should return exactly 10 items', (done) => {
    request(app)
      .get('/people?limit=10')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, results) => {
        if (err) return done(err);
        results.body.should.be.an('array').of.lengthOf(10);
        done();
      });
  });

  it('skip filter should return an array', (done) => {
    request(app)
      .get('/people?skip=1')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, results) => {
        if (err) return done(err);
        results.body.should.be.an('array');
        done();
      });
  });

  it('gender filter should return only male', (done) => {
    request(app)
      .get('/people?gender=male')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, results) => {
        if (err) return done(err);

        const genderTest = _.every(results.body, item => (item.gender === 'male'));
        genderTest.should.be.eql(true);

        done();
      });
  });

  it('gender filter should return only female', (done) => {
    request(app)
      .get('/people?gender=female')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, results) => {
        if (err) return done(err);

        const genderTest = _.every(results.body, item => (item.gender === 'female'));
        genderTest.should.be.eql(true);

        done();
      });
  });

  it('age filter should return only people aged 20', (done) => {
    request(app)
      .get('/people?age=20')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, results) => {
        if (err) return done(err);

        const genderTest = _.every(results.body, item => (item.age === 20));
        genderTest.should.be.eql(true);

        done();
      });
  });

  it('age filter should return only people under the age of 20', (done) => {
    request(app)
      .get('/people?age[lt]=20')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, results) => {
        if (err) return done(err);

        const genderTest = _.every(results.body, item => (item.age < 20));
        genderTest.should.be.eql(true);

        done();
      });
  });

  it('age filter should return only people under the age over 20', (done) => {
    request(app)
      .get('/people?age[gt]=20')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, results) => {
        if (err) return done(err);

        const genderTest = _.every(results.body, item => (item.age > 20));
        genderTest.should.be.eql(true);

        done();
      });
  });

  it('age filter should return only people between 10 and 15 years age (exclusive)', (done) => {
    request(app)
      .get('/people?age[gt]=10&age[lt]=15')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, results) => {
        if (err) return done(err);

        const genderTest = _.every(results.body, item => (item.age > 10 && item.age < 15));
        genderTest.should.be.eql(true);

        done();
      });
  });

  it('age filter should return only people between 10 and 15 years age (inclusive)', (done) => {
    request(app)
      .get('/people?age[gte]=10&age[lte]=15')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, results) => {
        if (err) return done(err);

        const genderTest = _.every(results.body, item => (item.age >= 10 && item.age <= 15));
        genderTest.should.be.eql(true);

        done();
      });
  });

  it('age filter should return only people under the age of 20 and male', (done) => {
    request(app)
      .get('/people?age[lt]=20&gender=male')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, results) => {
        if (err) return done(err);

        const genderTest = _.every(results.body, item => (item.age < 20 && item.gender === 'male'));
        genderTest.should.be.eql(true);

        done();
      });
  });


  it('invalid age filter should be ignored', (done) => {
    request(app)
      .get('/people?age=foo')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, results) => {
        if (err) return done(err);
        results.body.should.be.an('array');
        done();
      });
  });
});
