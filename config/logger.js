const {format, createLogger, transports} = require('winston');
const {combine, timestamp, printf , errors} = format;
const level = process.env.LOG_LEVEL || 'info';

const levelFormat = printf(({level, message, stack, timestamp}) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});


const logger = createLogger({
    format: combine(
        format.colorize(),
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        errors({stack: true}),
        levelFormat
    ),
    transports: [
        new transports.Console({
            level: level,   
        }),
        new transports.File({
            filename: 'app.log',
            level: level,
        }),
    ]});



module.exports = logger;
