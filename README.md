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
- The API can be accessed at https://api.ambit.darkskape.com and a playground API can be accessed at https://api-test.ambit.darkskape.com
- Swagger API Documentation is avialable at https://api.ambit.darkskape.com/docs
- Postman
  - Download the collection from https://www.getpostman.com/collections/991fffb4d65504c8cf05
  - \[ OR \] run in postman using this button [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/991fffb4d65504c8cf05)

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
