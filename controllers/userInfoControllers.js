const {API_User} = require('../models/models')
const fs = require('fs')
const path = require('path')
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

class userInfoControllers {

    '/api/user/createInfo'
    async createUserInfo(req, res) {

        try{
            const {username, email} = req.body
            let avatarFile = null
            if(req.files) avatarFile = req.files.avatar



            const token = req.headers.authorization?.split(' ')[1]
            if (!token) {
                return res.status(400).json({message: 'All input is required'});
            }
            const decodedToken = await jwt.verify(token, config.get('jwtSecret'))
            const userExistsId = await API_User.findOne({
                 where: {id: decodedToken.userId}
            })

            if (avatarFile) {
                try{
                    await fs.accessSync(`static/avatar-${userExistsId.id}`, fs.constants.R_OK)
                    await fs.promises.rmdir(`static/avatar-${userExistsId.id}`, {recursive: true})
                }catch (e) {}

                await fs.promises.mkdir(`static/avatar-${userExistsId.id}`, {recursive: true})
                await avatarFile.mv(path.resolve(__dirname, '..', `static/avatar-${userExistsId.id}`, avatarFile.name))
                const avatarPath = `http://192.168.0.118:8081/api/user/static/avatar-8/${avatarFile.name}`
                await API_User.update({ username, avatar: avatarPath, email}, {where: {id: userExistsId.id}})
                return res.status(201).json({message: "User info is created"})
            } else {
                await API_User.update({ username, email }, {where: {id: userExistsId.id}})
                return res.status(200).json({message: "User info is created1"})
            }
        } catch (e) {
            return res.status(500).json({message: e.message})
        }

    }


    '/api/user/updateInfo'
    async updateUserInfo(req, res) {
        try{
            const {lastname, firstname, phone_number, email, address, password, avatar} = req.body

            let avatarFile = avatar;
            if(req.files) avatarFile = req.files[0]
            console.log(avatarFile)

            const token = req.headers.authorization?.split(' ')[1]


            if (!token) {
                return res.status(400).json({message: 'All input is required'});
            }
            const decodedToken = await jwt.verify(token, config.get('jwtSecret'))
            const userExistsId = await API_User.findOne({
                 where: {id: decodedToken.userId}
            })
            // let avatarFile1 = 'image.png';
            // await fs.promises.mkdir('static', {recursive: true})
            // await fs.promises.access('static/', fs.constants.F_OK, (err) => {
            //     if (err) {
            //         if (avatarFile === undefined){
            //         fs.mkdir('static/' + `avatar-${userExistsId}`, {recursive: true}, (err) =>{
            //             if (err) console.log((`Error creating directory ${err}`))
            //             else console.log("Directory is created successfully")
            //         })
            //         fs.access('static/' + `avatar-${userExistsId}/` + avatarFile1, fs.constants.W_OK)
            //
            //
            // }
            //     }
            // })

            const hashedPassword = await bcrypt.hash(password, 12);

            if (!userExistsId) {
                return res.status(400).json({message: "User doesn't exist"})
            }

             const updateInfo = await API_User.update(
                {
                    lastname,
                    firstname,
                    phone_number,
                    email,
                    address,
                    password:hashedPassword,
                    avatar:avatarFile
                },
                {
                    where: {id: userExistsId.id},
                }
            )

            return res.status(201).json({message: "User is updated"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

}

module.exports = new userInfoControllers()