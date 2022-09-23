const {API_User} = require('../models/models')
const fs = require('fs')
const path = require('path')
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

class userInfoControllers {
    '/api/user/updateInfo'
    // FIXME avatarPath url doesn't lead anywhere
    async updateUserInfo(req, res) {
        try{
            const {lastname, firstname, phone_number, email, address, password, avatar} = req.body

            let avatarFile = avatar
            if(req.files) avatarFile = req.files.avatar

            const token = req.headers.authorization?.split(' ')[1]
            if (!token) {
                return res.status(400).json({message: 'All input is required'});
            }
            const decodedToken = await jwt.verify(token, config.get('jwtSecret'))
            const userExistsId = await API_User.findOne({
                 where: {id: decodedToken.userId}
            })
            const hashedPassword = await bcrypt.hash(password, 12);

            if (avatarFile) {
                try{
                    await fs.accessSync(`static/avatar-${userExistsId.id}`, fs.constants.R_OK)
                    await fs.promises.rm(`static/avatar-${userExistsId.id}`, {recursive: true})
                }catch (e) {}

                await fs.promises.mkdir(`static/avatar-${userExistsId.id}`, {recursive: true})
                await avatarFile.mv(path.resolve(__dirname, '..', `static/avatar-${userExistsId.id}`, avatarFile.name))
                const avatarPath = `http://192.168.0.118:8081/api/user/static/avatar-${userExistsId.id}/${avatarFile.name}`
                await API_User.update(
                    {lastname, firstname, phone_number, avatar: avatarPath, email, address, password: hashedPassword},
                    {
                        where: {id: userExistsId.id}
                    }
                )
                return res.status(201).json({message: "User info is created"})
            } else {
                await API_User.update(
                    {lastname, firstname, phone_number, email, address, password: hashedPassword},
                    {
                        where: {id: userExistsId.id}
                    }
                    )
                return res.status(200).json({message: "User info is created1"})
            }

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

}

module.exports = new userInfoControllers()