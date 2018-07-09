const express = require('express');
const path = require('path');
const app = express();
const passport = require('passport');
const Strategy = require('passport-github').Strategy;
const bodyParser = require('body-parser');
const expressSession = require('express-session');

require('dotenv').config();

passport.use(new Strategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/login/github/return'
},
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));

passport.serializeUser((user, cb) => cb(null, user.id));
passport.deserializeUser((user, cb) => {
  // User.findById(id).then((user) => {
  cb(null, user)
  // });
});


app.use(expressSession({ secret: process.env.EXPRESS_KEY, resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.get('/login/github/return',
  passport.authenticate('github', { failureRedirect: '/error' }),
  function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
  }
);
app.get('/', passport.authenticate('github', { failureRedirect: '/error' }))
app.use(express.static('build'));

app.post('/test', (req, res) => {
  logRequest(req);
  res.end();
})

app.use((req, res) => res.status(404).send('error!'));

app.listen(3000, () => console.log('listening at port 3000...'));

logRequest = function ({ body, headers, query, cookies }) {
  console.log({ body, headers, query, cookies })
}