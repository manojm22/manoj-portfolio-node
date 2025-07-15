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

exports.createFeedback = async (req, res) => {
    try {
        const { Name, Designation, Company, Comment } = req.body;

        if (!Name || !Designation || !Company, Comment) {
            return res.status(400).json({ message: 'Name, Designation, Company, Comment are required' });
        }

        const feedback = await Feedback.create(req.body);
        res.status(201).json(feedback);
    } catch (error) {
        console.error('Error creating feedback:', error);
        logger.error('Error creating feedback:', error);

        res.status(500).json({ message: 'Error creating feedback', error });
    }
}