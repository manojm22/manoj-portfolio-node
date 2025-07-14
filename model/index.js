const sequelize = require('sequelize');
const config = require('../config/db.config');
const logger = require('../config/logger');

const sequelizeInstance = new sequelize.Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASSWORD,
    {
        host: config.DB_HOST,
        dialect: config.DB_DIALECT,
        port: config.DB_PORT,
        // Removed ssl option because server does not support secure connection
        logging: (msg) => logger.info(msg),
        pool: {
            max: config.DB_POOL_MAX,
            min: config.DB_POOL_MIN,
            acquire: config.DB_POOL_ACQUIRE,
            idle: config.DB_POOL_IDLE
        }
    }); 

    const db = {};
db.Sequelize = sequelize;
db.sequelizeInstance = sequelizeInstance;

db.Feedback = require('./feedback')(sequelizeInstance, sequelize.DataTypes);


module.exports = db;