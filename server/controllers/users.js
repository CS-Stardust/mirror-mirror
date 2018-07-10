const user = require('../models/users');


module.exports = {
  create(req, res) {
    return user().create(
      {
        github_username: req.username,
        github_displayName: req.displayName,
        email: req.profileUrl,
        github_id: req.id,
        profile_pic: req.photos[0].value,
      })
      // .then(user => res.status(201).send(user))
      // .catch(error => res.status(400).send(error));
  },
};