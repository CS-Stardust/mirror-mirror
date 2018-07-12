const db = require('../../db')

const dbController = {};


dbController.getInterviews = (req, res, next) => {
  const queryText = `SELECT i.company, i.position, u.display_name as displayName, 
  COUNT(q.id) as questionCount, i.id as interviewId
FROM interviews i JOIN users u ON u.id = i.user_id
INNER JOIN questions q ON q.interview_id = i.id
GROUP BY i.company, i.position, u.display_name, q.interview_id, i.interview_date, i.id
ORDER BY i.interview_date DESC; `
  db.query(queryText)
    .then(result => res.json(result.rows))
    .catch(e => console.error(e.stack))
  // next();
}

dbController.getQuestions = (req, res, next) => {
  
}

// this.state.questions = [
//   {
//     interviewId: 'ajsdklas;klfj',
//     questions: ['alksjf;lasdf', 'jkljafljsdf']
//   }
// ]


module.exports = dbController;