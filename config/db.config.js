const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

module.exports = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME: process.env.DB_NAME || 'mydatabase',
    DB_PORT: process.env.DB_PORT || 3030,
    DB_DIALECT: process.env.DB_DIALECT || 'mysql',
    ORIGIN: process.env.ORIGIN || '*',
    pool:{
        DB_POOL_MAX: process.env.DB_POOL_MAX ? parseInt(process.env.DB_POOL_MAX) : 5,
        DB_POOL_MIN: process.env.DB_POOL_MIN ? parseInt(process.env.DB_POOL_MIN) : 0,
        DB_POOL_ACQUIRE: process.env.DB_POOL_ACQUIRE ? parseInt(process.env.DB_POOL_ACQUIRE) : 30000,
        DB_POOL_IDLE: process.env.DB_POOL_IDLE ? parseInt(process.env.DB_POOL_IDLE) : 10000
    }
    };
    