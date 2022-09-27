const {API_Reviews, API_User} = require('../../models/models')
const jwt = require("jsonwebtoken");
const config = require("config");
const {where} = require("sequelize");


class reviewControllersFront {
    async getAllReviews(req, res) {
        try {
            const allReviews = await API_Reviews.findAll()
            return res.status(200).json(allReviews)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    async createReviews(req, res) {
        try {
            const {firstname, lastname, username, avatar, text_review, date} = req.body

            if (!firstname && !lastname && !username && !avatar && !text_review && !date) {
                return res.status(400).json({message: "All input is required"})
            }

            const findUserbyFullName = await API_User.findOne({
                where: {
                    lastname, firstname
                }
            })

            const findUserbyUsername = await API_User.findOne({
                where: {
                    username
                }
            })

            if (!findUserbyFullName && !findUserbyUsername) {
                return res.status(400).json({message: "User doesn't exist"})
            }

            const token = req.headers.authorization?.split(' ')[1]
            if (!token) {
                return res.status(400).json({message: 'All input is required'});
            }
            const decodedToken = await jwt.verify(token, config.get('jwtSecret'))
            const userExistsId = await API_User.findOne({
                where: {id: decodedToken.userId}
            })

            const text_reviewExist = await API_Reviews.findOne(
                {
                    where: {
                        text_review
                    }
                }
            )

            if (text_reviewExist) {
                return res.status(400).json({message: "Text of review exists"})
            }

            await API_Reviews.create({
                firstname: userExistsId.firstname,
                lastname: userExistsId.lastname,
                username: userExistsId.username,
                avatar: userExistsId.avatar, text_review, date
            })

            return res.status(201).json({message: "Reviews is created succesfully"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    async updateReview(req, res) {
        try {
            const {firstname, lastname, username, avatar, text_review, date} = req.body
            if (!firstname && !lastname && !username && !avatar && !text_review && !date) {
                return res.status(400).json({message: "All input is required"})
            }

            const findUserbyFullName = await API_User.findOne({
                where: {
                    lastname, firstname
                }
            })

            const findUserbyUsername = await API_User.findOne({
                where: {
                    username
                }
            })

            if (!findUserbyFullName && !findUserbyUsername) {
                return res.status(400).json({message: "User doesn't exist"})
            }

            await API_Reviews.update({text_review}, {where: {lastname, firstname, username}})

            return res.status(200).json({message: "Reviews was updated"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    async deleteReviews(req, res) {
        try {
            const {text_review} = req.body
            const deleteReview = await API_Reviews.findOne({where: {text_review}})
            if (!deleteReview) {
                return res.status(404).json({message: "Review doesn't exist"})
            }
            await deleteReview.destroy()

            return res.status(410).json({message: "Review was deleted"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }


    }
}



module.exports = new reviewControllersFront()
