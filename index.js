const config = require('config')
const http = require('http')
const express = require('express')
const app = express()
const PORT = config.get('port') || 5000
const httpServer = http.createServer(app)
const sequelize = require('./config/Database')
const {API_User, API_Results, API_Notifications, API_Appointments} = require('./models/models')
const fileUpload = require('express-fileupload')
const path = require('path')


// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.0.118:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(fileUpload({}))
app.use('/api/auth', require('./routes/auth_routes'))
app.use('/api/user', require('./routes/userInfo_routes'))
app.use('/api/front', require('./routes/frontInfo_routes'))
app.use('/api/dashboard', require('./routes/dashboard_routes'))



const start = async () => {
    try {
        await sequelize.authenticate()
        // await sequelize.sync({alter:true})
        httpServer.listen(PORT, '192.168.0.118', ()=> console.log(`Server started on port ${PORT}`))
    }  catch (e) {
        console.log(e)
    }
}

start()

//association between tables

API_User.hasMany(API_Results,
    {foreignKey: 'APIUser_id',
            as: 'API_Result'})

API_Results.belongsTo(API_User,
    {foreignKey: 'APIUser_id',
            as: 'API_User'})

API_User.hasMany(API_Appointments,
    {foreignKey: 'APIUser_id',
              as: 'API_Appointment'})

API_Appointments.belongsTo(API_User,
    {foreignKey: 'APIUser_id',
             as: 'API_User'})

API_User.hasMany(API_Notifications,
    {foreignKey: 'APIUser_id',
            as: 'API_Notification'})

API_Notifications.belongsTo(API_User,
    {foreignKey: 'APIUser_id',
             as: 'API_User'})


module.exports = app