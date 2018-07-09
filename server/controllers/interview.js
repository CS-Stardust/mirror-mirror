const Interview = require('../models/interviews');

module.exports = {
  create(req, res) {
    console.log(req);
    return Interview().create({
      user_id: 1,
      company: req.company,
      notes: req.notes,
      interview_date: req.date,
      position: req.position,
      type: req.type 
    })
    // .then(interview => res.status(201).send(interview))
    // .catch(error => res.status(400).send(error)));
    // return Interview
    //   .create({
    //     user_id: 'Chris',
    //     company: req.company,
    //     notes: req.notes,
    //     interviewDate: req.date,
    //     position: req.position 
    //   })
    //   .then(interview => res.status(201).send(interview))
    //   .catch(error => res.status(400).send(error));
  },
};