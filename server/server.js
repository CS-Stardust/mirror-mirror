const express = require('express');

const app = express();
const passport = require('passport');
const Strategy = require('passport-github').Strategy;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const controllers = require('./controllers/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config();

passport.use(new Strategy ({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/welcome'
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(Object.entries(profile));
    return cb(null, profile);
}));

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(expressSession({secret: 'pick a winner', resave: true, saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.send('we are connected!'));
app.get('/login', (req, res) => res.send('regular login here'));
app.get('/login/github', passport.authenticate('github'));

app.get('/welcome', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    
    res.redirect('/')
});

app.get('/profile', (req, res) => res.send('require login, render user profile/form page'))


app.post('/interview', (req, res) => {

  //method will create a new interview entry witin the database 
  controllers.interview.create(req.body);
  
  logRequest(req);
  res.end();
})
app.use((req, res) => res.status(404).send('error!'));

//check to see if database is actually run correctly
app.listen(3000, () => console.log('listening at port 3000...'));

logRequest = function({ body, headers, query, cookies }) {
  //console.log('I am log request at the bottom of server.js: -->>>',{ body, headers, query, cookies })
}
