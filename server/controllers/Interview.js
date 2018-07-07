const Interview = require('../models').interviews;

module.exports = {
  create(req, res) {
    return Interview
      .create({
        user_id: req.body.user_id,
        company: req.body.company,
        notes: req.body.notes,
        interviewDate: req.body.interviewDate,
        questionsID: req.body.questionsID,
        interviewID: req.body.interviewID, 
      })
      .then(interview => res.status(201).send(interview))
      .catch(error => res.status(400).send(error));
  },
};