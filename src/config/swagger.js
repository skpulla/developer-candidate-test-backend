import swaggerJsdoc from 'swagger-jsdoc';

const appRoot = require('app-root-path');

console.log('appRoot', appRoot);

const options = {
  swaggerDefinition: {
    info: {
      title: 'Ambit Developer Test API',
      version: '1.0.0',
      description: 'Ambit Developer Test API',
    },
  },
  apis: [`${appRoot.path}/src/routes/*.js`],
};

const specs = swaggerJsdoc(options);

export default {
  specs,
};
