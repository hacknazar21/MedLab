const {API_Results, API_User} = require('../models/models')
const jwt = require("jsonwebtoken");
const config = require("config");

// TODO how to create file
class resultControllers {
    async createResult(req, res) {
        try {
            const {title_result, isReady, file, APIUser_id} = req.body

            if (!title_result && !isReady && !file && !APIUser_id) {
                return res.status(400).json({message: 'All input is required'})
            }

            const resultExists =  await API_Results.findOne({
                where: {
                    title_result
                }
            })

            if (resultExists) {
                return res.status(400).json({message: 'Result already exists'})
            }

            const createResult = API_Results.create({
                title_result,
                isReady,
                file,
                APIUser_id
            })
            console.log(createResult)
            return res.status(201).json({message: 'Result is created succesfully'})
        } catch (e) {
           return  res.status(500).json({message: e.message})
        }
        }

    async allResult(req, res) {
        const allResult = await API_Results.findAll()
        return res.json(allResult)
    }

    async getUserResults(req, res) {
        try{
            const data = await API_User.findAll({
            include: [{
                model: API_Results,
                as: 'API_Result'
            }],
            where: {
                id: 7
            }
        })
            return res.status(200).json(data)

        } catch (e) {
            return res.status(500).json({message: e.message})
        }

    }
}


module.exports = new resultControllers()