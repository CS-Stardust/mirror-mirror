const Interviews = require('../models/interviews')();
//Interviews.sync({force:true});
const Questions = require('../models/questions')();
//Questions.sync({force:true});
const Users = require('../models/users')();



module.exports = {
  create(req, githubId) {
    return Interviews.create({
      user_id: githubId,
      company: req.company,
      notes: req.notes,
      interview_date: req.date,
      position: req.position,
      type: req.type 
    })
  },
};