const express = require('express');
const app = express();
const passport = require('passport');
const Strategy = require('passport-github').Strategy;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

require('dotenv').config();

passport.use(new Strategy ({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/welcome'
},
  (accessToken, refreshToken, profile, cb) => {
    console.log(Object.entries(profile));
    return cb(null, profile);
  }
));

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession({secret: 'pick a winner', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.send('we are connected!'));
app.get('/login', (req, res) => res.send('regular login here'));
app.get('/login/github', passport.authenticate('github'));
app.get('/welcome', (req, res) => {
  res.send('post-authentication redirect failure/success')
});
app.get('/profile', (req, res) => res.send('require login, render user profile/form page'))



app.post('/test', (req, res) => {
  logRequest(req);
  res.end();
})
app.get('*', (req, res) => res.status(404).send('error!'));


app.listen(3000, () => console.log('listening at port 3000...'));

logRequest = function({ body, headers, query, cookies }) {
  console.log({ body, headers, query, cookies })
}