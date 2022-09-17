const {Router} = require('express')
const {check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const express = require('express')
const app = express()
const {normalizeEmail} = require("validator");
const passport = require('passport')
const router = Router()
const db = require('../config/Database')
const {API_User} = require("../models/models");
// const authController = require('../controlers/authController')


//api/auth/register
router.post('/register',
    [
        check('name', 'Not a string').isString(),
        check('email', 'Invalid email').isEmail(),
        check('phone_number', 'Invalid phone number').isString(),
        check('password', 'It has to be more than 6 symbols').isLength({min : 6})
    ],
    async (req, res) => {
    try {
        console.log(req.body)
        const {name, email, password, phone_number} = req.body;
        if (!name || !email || !password || !phone_number) {
            return res.status(400).json({message: 'All input is required'});
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        await db.sync()
        const existedUser = await User.findOne({
            where: {
                phone_number
            }
        });
        if (existedUser) {
            return res.status(409).json({message: 'User already exists'});
        }
         //creating new user
        const user = await User.create(
            {
                name,
                email: email.toLowerCase(),
                phone_number,
                password: hashedPassword
            });

        //create token
        let token;
        token = jwt.sign(
            {user_id: user.id, email},
            config.get('jwtSecret'),
            {expiresIn: '5h'}
        );
        //save user token
        user.token = token;
        return res.status(201).json({message: "Registration successful"});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
   })


// api/auth/login
router.post('/login',
    [
        check('phone_number', 'Invalid phone number').isString(),
        check('password', 'Invalid password').exists()
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array(), message: 'Invalid data'})
        }
        const {phone_number, password} = req.body

        if (!phone_number || !password)  {
            return res.status(400).json({message: 'Input is required'})
        }

        const user = await API_User.findOne({
            where: {phone_number}
        })

        if (!user) {
            return res.status(400).json({message: 'Invalid login or password. Try again'})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({message: 'Invalid login or password. Try again'})
        }

         const token = jwt.sign(
        {userId: user.id},
        config.get('jwtSecret'),
        {expiresIn: '24h'}
    )
         res.json({token, userId: user.id})
    } catch (e) {
        return res.status(500).json({message: "Something went wrong. Try again", e: e.message})
    }
    }
    )

module.exports = router