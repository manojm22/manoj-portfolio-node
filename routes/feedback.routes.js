const router = require('express').Router();
const FeedbackController = require('../controller/feedback.controller');
const serverless = require('serverless-http');
// Route to create feedback

module.exports = (app) => {
    
    // Route to get all feedback
    router.get('/feedback', FeedbackController.getAllFeedback);
    /* 
    // Route to get feedback by ID
    router.get('/feedback/:id', FeedbackController.getFeedbackById);
    
    // Route to update feedback by ID
    router.put('/feedback/:id', FeedbackController.updateFeedbackById);
    
    // Route to delete feedback by ID
    router.delete('/feedback/:id', FeedbackController.deleteFeedbackById); */
    
    app.use('/api', router);

    
    module.exports.handler = serverless(app);
}


module.exports.handler = serverless(app);