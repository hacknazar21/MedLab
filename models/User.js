const {DataTypes} = require("sequelize");
const db = require("../config/Database");

 const User = db.define('user', {
    name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   email: {
     type: DataTypes.STRING,
     allowNull: false
   },
   password: {
     type: DataTypes.STRING,
   },
   phone_number: {
     type: DataTypes.STRING,
   }

})
module.exports = User