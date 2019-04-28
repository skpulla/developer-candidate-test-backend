import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import routes from './routes';
import swagger from './config/swagger';
import winston from './config/winston';

const app = express();

app.use(morgan('combined', { stream: winston.stream }));


app.get('/', (req, res) => res.send('Received a GET HTTP method'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger.specs));
app.use('/people', routes.people);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  winston.info(`Example app listening on port ${port}!`);
});

module.exports.app = app;
