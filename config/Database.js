const {Sequelize} = require('sequelize')

// const db = new Sequelize('medlab_db', 'devG', '123123', {
//     host: '192.168.0.102',
//     dialect: 'mysql'
// });

const db = new Sequelize('medlab_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});
module.exports = db