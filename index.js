const config = require('config')
const http = require('http')
const mariadb = require('mysql2')
const express = require('express')
const app = express()
const PORT = config.get('port') || 5000
const httpServer = http.createServer(app)
const connection = mariadb.createConnection(config.get('mariadb'))

const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const {normalizeEmail} = require("validator");


httpServer.listen(PORT, 'localhost')
app.get('/api/news', (req,res)=> {
    connection.query('SELECT * FROM News LIMIT 0, 1000', (err, results, fields) => {
        if(err){
            res.status(500)
            res.contentType('application/json')
            return res.send(JSON.stringify({error: err}))
        }
        res.status(200)
        res.contentType('application/json')
        return res.send(JSON.stringify(results))
    })
})
app.get('/api/reviews', (req,res)=>{
    connection.query('SELECT * FROM Reviews LIMIT 0, 1000', (err, results, fields) => {
        if(err){
            res.status(500)
            res.contentType('application/json')
            return res.send(JSON.stringify({error: err}))
        }
        res.status(200)
        res.contentType('application/json')
        return res.send(JSON.stringify(results))
    })
})
app.get('/api/analysis', (req,res)=>{
    connection.query(`SELECT * FROM Analysis WHERE type='${req.query.type}' LIMIT 0, 1000`, (err, results, fields) => {
        if(err){
            res.status(500)
            res.contentType('application/json')
            return res.send(JSON.stringify({error: err}))
        }
        res.status(200)
        res.contentType('application/json')
        return res.send(JSON.stringify(results))
    })
})

app.post('/api/login',
    [
        check('email', 'Enter valid email').normalizeEmail().isEmail(),
        check('password', 'Enter a password').exists()
    ],
    (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array(), message: 'Invalid data'})}


    // Validate user input
    if (!(email && password)) {
        res.status(400).json({message: 'Input is required'})
    }

    //Validate if user exist in db
    const user = User.findOne({email})
    const isMatch = bcrypt.compare(password, user.password)
    if ((!user || isMatch)) {
        return res.status(400).json({message: 'Invalid login or password. Try again'})
    }

    //create token
    const token = jwt.sign(
        {userId: user.id},
        config.get('jwtSecret'),
        {expiresIn: '1h'}
    )
    res.json({token, userId:user.id})


     } catch (e) {
        res.status(500).json({message: "Something went wrong. Try again"})
    }
    }

)

app.post('/api/register',
    [
        check('firstName', 'Not a string').isString(),
        check('lastName', 'Not a string').isString(),
        check('email', 'Invalid email').isEmail(),
        check('password', 'It has to be more than 6 symbols').isLength({min : 6})
    ],
    (req, res) => {
    try {

        //Validating input data
        const {firstName, lastName, password, email} = req.body;
        if (!(firstName && lastName && password && email)) {
            res.status(400).json({message: 'All input is required'});
        }

        //creating new user
        const hashedPassword = bcrypt.hash(password, 12)
        const user = User.create(
            {
                firstName: firstName,
                lastName: lastName,
                email: email.toLowerCase(),
                password: hashedPassword
            })
        user.save()
        res.status(201).json({message: 'User created'})

        // validating if user exists
        const existedUser = User.findOne({email});
        if (existedUser) {
            return res.status(409).json({message: 'User already exists'})
        }
        {
            res.status(500).json({message: "Something went wrong. Check input"})
        }

        //create token
        let token;
        token = jwt.sign(
            {user_id: user.id, email},
            config.get('jwtSecret'),
            {expiresIn: '5h'}
        ); //save user token
        user.token = token
        res.json({message: "Registration successful"})
    } catch (e) {
        res.status(500).json({message: "Something went wrong. Check input"})
    }
   }
   )

module.exports = app