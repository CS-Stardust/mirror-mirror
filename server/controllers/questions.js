const question = require('../models/questions');

module.exports = {
  create(req, res) {
    return question().create({
        question: req.question,
        interview_id: req.interview_id
      })
      .then(question => res.status(201).send(questions))
      .catch(error => res.status(400).send(error));
  },
};