const config = require('config')
const http = require('http')
const mariadb = require('mysql2')
const express = require('express')
const app = express()
const PORT = config.get('port') || 5000
const httpServer = http.createServer(app)
const connection = mariadb.createConnection(config.get('mariadb'))
const request = require('request')
httpServer.listen(PORT, 'localhost')

app.get('/api/sendsms', async (req, res)=>{
    const { phone } = req.params
    request('https://smsc.kz/sys/send.php?login=v1lasce&psw=bonevo01&phones=+77712556435&mes=For register on MedLab - 2980', {}, function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        if(response.statusCode === 200){
            return res.status(200).json('delivered')
        }
        else{
            return res.status(400).json('Cannot deliver')
        }
    })
})
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
