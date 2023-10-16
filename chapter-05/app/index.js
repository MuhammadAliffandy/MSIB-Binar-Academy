require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require("cookie-parser");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const sessions = require('express-session');
const routes = require("./controller/route/route");
const { Database } = require("../db/libs/dbStatus");

/**
 * 
 * configuration use method for api and routing
 * 
 * */ 

const oneHour = 1000 * 60 * 60 ;
app.use(sessions({
    secret: process.env.SESSION_KEY,
    saveUninitialized:true,
    cookie: { maxAge: oneHour },
    resave: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/users/auth/google/callback',
},
(accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/users/auth/facebook/callback'
    }, function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/',routes);

/**
 * 
 * initialization current method in my api
 * 
 * */ 

app.get('/', async(req, res) => {
    await new Database().checkConnection();
    res.status(200).json({ message: "Ping successfully" });
})
.get('/dashboard', (req, res) => {
    res.json({
        status : 'OK',
        message : 'Welcome And Enjoy your activity'
    });
})
.all('*', (req, res) => {
    res.status(404).json({ message : 'method and endpoint its not available' })
})

app.listen(5000, async () => {
    console.log('listening on http://localhost:5000');
});

module.exports = app;