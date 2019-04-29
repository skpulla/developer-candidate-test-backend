# refactionjs

Refactoring and showcase exercise for JavaScript.

To run:

```
npm install
npm start
```

Browse to [http://localhost:3000](http://localhost:3000)

## Notes
- The project has been split into 2 repositories. This repository is only for the backend API.
- Added 1000 sample records generated using [Mockaroo](https://mockaroo.com/)
- The API has been deployed on AWS and can be accessed at https://api.ambit.darkskape.com. A playground API can be accessed at https://api-test.ambit.darkskape.com. Following API queries are supported:
  - Everyone: https://api.ambit.darkskape.com/people
  - Male: https://api.ambit.darkskape.com/people?gender=male
  - Female: https://api.ambit.darkskape.com/people?gender=female
  - Everyone Aged 50: https://api.ambit.darkskape.com/people?age=50
  - Male and Aged 20: https://api.ambit.darkskape.com/people?gender=male&age=20
- Swagger API Documentation is avialable at https://api.ambit.darkskape.com/docs
- Postman
  - Download the collection from https://www.getpostman.com/collections/991fffb4d65504c8cf05
  - \[ OR \] run in postman using this button [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/991fffb4d65504c8cf05)
- Frontend repo can be found at https://github.com/skpulla/developer-candidate-test-frontend

## Features
- Runs on the latest version of Node 8.x (and not Node 10.x LTS or 12.x)
- Uses Babel for transpiling to ES2015.
- Uses ESLint for linting.
- Mocha, Chai and SuperTest are used for integration tests.
- Uses Istanbul for code coverage.
- Uses Winston and Morgan for logging.
- CI/CD using AWS CodePipeline
  - <a href="https://imgur.com/XPpcrsL"><img src="https://i.imgur.com/XPpcrsL.png" title="source: imgur.com" /></a>
  - Code committed to Github.
  - Triggers AWS CodePipeline.
  - Mocha tests are run and if the tests pass, an artifact is generated.
  - Code is then deployed to AWS Elastic Beanstalk.
  - AWS Elastic Load Balancer has been set up for the app which currently runs on only 1 instance.
  - Load balancer accepts only HTTPS traffic.
  - Route 53 is configured to use the load balancer as the target for api.ambit.darkskape.com.
- Currently has 100% test code coverage.
  - <a href="https://imgur.com/Pa4SMxQ"><img src="https://i.imgur.com/Pa4SMxQ.png" title="source: imgur.com" /></a>
  - <a href="https://imgur.com/9FaGH62"><img src="https://i.imgur.com/9FaGH62.png" title="source: imgur.com" /></a>
