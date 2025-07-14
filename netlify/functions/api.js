const serverless = require('serverless-http');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const db = require('../../model/index');
const logger = require('../../config/logger');
const FeedbackController = require('../../controller/feedback.controller');

const app = express();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));
app.use(helmet.frameguard({ action: 'deny' }));
app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet.noSniff());

// Feedback routes
app.get('/feedback', FeedbackController.getAllFeedback);
// Uncomment and implement these as needed
// app.get('/feedback/:id', FeedbackController.getFeedbackById);
// app.put('/feedback/:id', FeedbackController.updateFeedbackById);
// app.delete('/feedback/:id', FeedbackController.deleteFeedbackById);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the API',
    status: 'success',
  });
});

module.exports.handler = serverless(app);
