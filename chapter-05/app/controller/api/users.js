const express = require('express');
const router = express.Router();
const UsersController = require('../userController');
const AuthServices = require('../../services/authServices');

router
.get('/', UsersController.getListUsers)
.get('/current-user',UsersController.getCurrentUser)
.post('/register', UsersController.registrationValidation ,UsersController.registrationMember)
.post('/register-admin', UsersController.authorizationToAdmin , UsersController.registrationValidation ,UsersController.registrationAdmin)
.post('/auth',UsersController.loginValidation ,UsersController.login)
.get('/auth/google',AuthServices.googleAuth)
.get('/auth/google/callback',AuthServices.googleAuthCallback, UsersController.redirectDashboard)
.get('/auth/facebook',AuthServices.facebookAuth)
.get('/auth/facebook/callback',AuthServices.facebookAuthCallback, UsersController.redirectDashboard)
.post('/logout',UsersController.logout)


module.exports = router;