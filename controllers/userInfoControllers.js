const {API_User} = require('../models/models')
const fs = require('fs')
const jwt = require("jsonwebtoken");
const config = require("config");

class userInfoControllers {
    '/api/user/updateInfo'
    async updateUserInfo(req, res) {
        try{
            const {lastname, firstname, phone_number, email, address, password, avatar} = req.body
            console.log(req.body)

            const userExists = await API_User.findOne({
                where : {
                    phone_number
                }
            })

            if (!userExists) {
                return res.status(400).json({message: "User doesn't exist"})
            }

             const updateInfo = await API_User.update({
                where: {
                    lastname,
                    firstname,
                    phone_number,
                    email,
                    address,
                    password,
                    avatar
                }
            })

            return res.status(201).json({message: "User is updated"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new userInfoControllers()