const db = require('../model/index');
const logger = require('../config/logger');
const Feedback = db.Feedback;



exports.getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.findAll();
        res.status(200).send(feedbacks);
    } catch (error) {
        console.error('Error retrieving feedbacks:', error);
        logger.error('Error retrieving feedbacks:', error);

        res.status(500).json({ message: 'Error retrieving feedbacks', error });
    }
}