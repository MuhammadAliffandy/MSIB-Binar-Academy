const express = require('express');
const router = express.Router();
const passport = require('passport');

const UsersController = require('../userController');

router
.get('/', UsersController.getListUsers)
.get('/current-user',UsersController.getCurrentUser)
.post('/regis', UsersController.registrationValidation ,UsersController.registration)
.post('/auth',UsersController.loginValidation ,UsersController.login)


module.exports = router;