const {API_User} = require('../models/models')
const fs = require('fs')

class userInfoControllers {
    '/api/user/updateInfo'
    async updateUserInfo(req, res) {
        const {lastname, firstname, phone_number, email, address, password, avatar} = req.body

        const checkUser = await API_User.findOne({
            where: {
                phone_number,
                email
            }
        })
        if (!checkUser) {
            return res.status(400).json({message: "User doesn't exist"})
        }

        const updateInfo = await API_User.update({

        })

    }
}