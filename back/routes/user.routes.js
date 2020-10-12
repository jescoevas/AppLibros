const express = require('express')
const routes = express.Router()
const {userController} = require('../controllers/user.controller')

routes.post('/signup', userController.newUser)
routes.post('/signin', userController.login)

module.exports = routes