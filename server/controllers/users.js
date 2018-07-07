const user = require('../models').users;

module.exports = {
  create(req, res) {
    return user
      .create({
        github_Username: req.body.github_Username,
        github_DisplayName: req.body.github_DisplayName,
        email: req.body.email,
        accessToken: req.body.accessToken,
        profilePic: req.body.profilePic,
      })
      .then(interview => res.status(201).send(interview))
      .catch(error => res.status(400).send(error));
  },
};