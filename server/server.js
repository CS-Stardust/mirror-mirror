const express = require('express');
const app = express();
const passport = require('passport');
const Strategy = require('passport-github').Strategy;
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const controllers = require('./controllers/index.js');
var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://test:password@localhost:5432/mirror_mirror');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('mirror_mirror', 'test','password', {
  dialect: 'postgres'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config();

passport.use(new Strategy ({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/login/github/return'
},
  function(accessToken, refreshToken, profile, cb) {
    db.any('SELECT github_id FROM "Users" WHERE github_id = 22566842').then(
      (array)=> {
        if (!array.length) controllers.user.create(profile);
      }).catch((err) => {
        console.log(err);
      });
    return cb(null, profile);
}));

passport.serializeUser((user, cb) => cb(null, user.id));
passport.deserializeUser((user, cb) => {
    cb(null, user)
});

app.use(expressSession({secret: process.env.EXPRESS_KEY, resave: true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req, res) => res.send('we are connected!'));
app.get('/login', (req, res) => res.send('regular login here'));
app.get('/login/github', passport.authenticate('github'));
app.get('/profile', isLoggedIn, (req, res, next) =>{
  console.log(req.user);
  next();
},(req, res) => res.send('this is the exclusive secret page for logged-in codesmith alumni only'));

app.get('/login/github/return',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    if (isLoggedIn) res.redirect('/profile')
});

app.get('/logout', (req, res) => {
  req.logout();
  passport.user = null;
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) return next();
  res.redirect('/')
}

app.post('/interview', (req, res) => {
  console.log(req);
  //method will create a new interview entry witin the database 
  controllers.interview.create(req.body, req.session.passport.user);
  
  logRequest(req);
  res.end();
})

app.use(express.static('build'));

app.use((req, res) => res.status(404).send('error!'));

app.listen(3000, () => {
  console.log('listening at port 3000...');
});

logRequest = function({ body, headers, query, cookies }) {
 // console.log('This is my logRequest -->>',{ body, headers, query, cookies })
}
