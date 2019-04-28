const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  format: format.cli(),
  transports: [
    new transports.Console({
      level: 'debug',
    }),
  ],
});

// create a stream object with a 'write' function that will be used by morgan
logger.stream = {
  write(message) {
    logger.info(message);
  },
};

module.exports = logger;
