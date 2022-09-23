const {Router} = require('express')
const {check, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const express = require('express')
const app = express()
const router = Router()
const {API_User} = require('../models/models')
const db = require('../config/Database')
const {OP} = require('sequelize')
const userInfoControllers = require('../controllers/userInfoControllers')



router.post('/updateInfo', userInfoControllers.updateUserInfo)


module.exports = router