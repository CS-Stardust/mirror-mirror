const user = require('../models/users');

module.exports = {
  create(req, res) {
    return user().create({
        github_Username: req.github_Username,
        github_DisplayName: req.github_DisplayName,
        email: req.email,
        accessToken: req.accessToken,
        profilePic: req.profilePic,
      })
      .then(interview => res.status(201).send(interview))
      .catch(error => res.status(400).send(error));
  },
};