const {API_Reviews, API_User} = require('../models/models')


class reviewInfoControllers {
    async getAllReviews(req, res) {
        try{
            const allReviews = await API_Reviews.findAll()
            return res.status(200).json(allReviews)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    async createReviews(req, res) {
        try {
            const {firstname, lastname, avatar, text_review, date} = req.body

        if (!firstname && !lastname && !avatar && !text_review && !date) {
            return res.status(400).json({message: "All input is required"})
        }

        const findUser = await API_User.findOne({
            where: {
                lastname, firstname
            }
        })

        if (!findUser) {
            return res.status(400).json({message: "User doesn't exist"})
        }

        await API_Reviews.create({firstname, lastname, avatar, text_review, date})

        return res.status(201).json({message: "Reviews is created succesfully"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }

    }
}



module.exports = new reviewInfoControllers()
