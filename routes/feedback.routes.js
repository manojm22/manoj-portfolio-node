const router = require('express').Router();
const FeedbackController = require('../controller/feedback.controller');

// Route to create feedback

module.exports = (app) => {
    router.post('/feedback', FeedbackController.createFeedback);
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

    
}
