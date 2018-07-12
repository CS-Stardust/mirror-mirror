const db = require('../../db')

const dbController = {};

dbController.getInterviews = (req, res, next) => {
  const queryText = `SELECT i.company, i.position, u.display_name as displayName, COUNT(q.id) as questionCount, i.id as interviewId, u.user_name, u.photo_url, i.notes, i.type, i.interview_date
  FROM interviews i JOIN users u ON u.id = i.user_id
  INNER JOIN questions q ON q.interview_id = i.id
  GROUP BY i.company, i.position, u.display_name, q.interview_id, i.interview_date, i.id, u.user_name, u.photo_url, i.notes, i.type, i.interview_date
  ORDER BY i.interview_date DESC;`

  // TODO: add handling for results.rows = 0
  db.query(queryText)
    .then(result => {
      res.locals.interviews = result.rows;
      next();
    })
    .catch(e => console.error(e.stack));
}

dbController.getQuestions = (req, res, next) => {
  const queryText = `SELECT questions.id as question_id, interviews.id as interview_id, questions.interview_id, questions.question_text 
  FROM questions 
  JOIN interviews ON interviews.id = questions.interview_id;`;

  // TODO: add handling for results.rows = 0
  db.query(queryText)
    .then(result => {
      res.locals.questions = result.rows;
      next();
    })
    .catch(e => console.error(e.stack));
}

module.exports = dbController;
