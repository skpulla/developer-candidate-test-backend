import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import routes from './routes';
import swagger from './config/swagger';
import winston from './config/winston';

const app = express();

// TODO: Restrict CORS for better security
app.use(cors());
app.use(morgan('combined', { stream: winston.stream }));

app.get('/', (req, res) => res.send('Welcome to Ambit API'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger.specs));
app.use('/people', routes.people);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  winston.info(`Started Ambit API on port ${port}!`);
});

module.exports.app = app;
