const winston = require('winston');
require('winston-logstash-transport');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Logstash({
      host: 'localhost', 
      port: 5001, 
      ssl_enable: false, 
      max_connect_retries: -1, 
    }),
  ],
});

module.exports = logger;
