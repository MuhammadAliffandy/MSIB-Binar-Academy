const express = require('express');
const router = express.Router();
const passport = require('passport');
const UsersController = require('../userController');


router
.get('/', UsersController.getListUsers)
.get('/current-user',UsersController.getCurrentUser)
.post('/regis', UsersController.registrationValidation ,UsersController.registration)
.post('/auth',UsersController.loginValidation ,UsersController.login)
.get('/auth/google',
    passport.authenticate('google', { scope: ['email','profile'] })
)
.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
)
.get('/logout',(req,res)=>{
    req.session = null;
    res.redirect('/');
})


module.exports = router;