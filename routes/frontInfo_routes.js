const express = require('express')
const {Router} = require("express");
const app = express()
const router = Router()
const config = require('config')
const mariadb = require('mysql2')

const connection = mariadb.createConnection(config.get('mariadb'))


app.get('/news', (req,res)=> {
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
app.get('/reviews', (req,res)=>{
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
app.get('/analysis', (req,res)=>{
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

module.exports = router