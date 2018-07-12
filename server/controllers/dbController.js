const db = require('../../db')

const dbController = {};


dbController.getInterviews = (req, res, next) => {
  const queryText = `SELECT i.company, i.position, u.display_name as displayName, COUNT(q.id) as questionCount, i.id as interviewId, u.user_name, u.photo_url, i.notes, i.type, i.interview_date
  FROM interviews i JOIN users u ON u.id = i.user_id
  INNER JOIN questions q ON q.interview_id = i.id
  GROUP BY i.company, i.position, u.display_name, q.interview_id, i.interview_date, i.id, u.user_name, u.photo_url, i.notes, i.type, i.interview_date
  ORDER BY i.interview_date DESC;`
  db.query(queryText)
    .then(result => res.json(result.rows))
    .catch(e => console.error(e.stack))
}

dbController.getQuestions = (req, res, next) => {
  const queryText = 'SELECT interview_id, id as question_id, question_text FROM questions WHERE interview_id = $1;'

  db.query(queryText)
    .then(result => res.json(result.rows))
    .catch(e => console.error(e.stack))
}

module.exports = dbController;