const express = require('express');
const app = express();
const helmet = require('helmet');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const db = require('./model/index');
const logger = require('./config/logger');
const swaggerDocument = require('./swagger.json');

const corsOptions = {
  origin: '*',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

dotenv.config({path: './.env'});

app.use(cors(corsOptions));
app.use(helmet.frameguard({ action: 'deny' }));
app.use(express.json({type: 'application/json'}));
app.use(express.urlencoded({ extended: true }));
app.use(helmet.noSniff());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the API',
    status: 'success',
  });
});

app.use((req, res, next) => {
    const host = req.hostname;
  
    next();
})

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' ws:; frame-ancestors 'none';");
    next();
})

app.use((err, req, res, next) => {
  logger.error(err.stack);

  res.status(500).send({
    message: 'Internal Server Error',
    error: err.message,
  });
});

const PORT = process.env.PORT || 3030;

require('./routes/feedback.routes')(app);
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
  db.sequelizeInstance.sync()
    .then(() => {
      logger.info('Database connection has been established successfully.');
    })
    .catch(err => {
      logger.error('Unable to connect to the database:', err);
    });
});

