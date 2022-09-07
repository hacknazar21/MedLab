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

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.0.102:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json())
app.use('/api/auth', require('./routes/auth_routes'))


httpServer.listen(PORT, '192.168.0.118')

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

module.exports = app