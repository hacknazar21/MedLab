const {API_Results, API_User} = require('../models/models')
const jwt = require("jsonwebtoken");
const config = require("config");

// TODO how to create file
class resultControllers {
    //api/dashboard/result/create
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

            const userExists = await API_User.findOne({
                where: {
                    id: APIUser_id
                }
            })

            if (!userExists) {
                return res.status(400).json({message: "User doesn't exist"})
            }

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
    //api/dashboard/result/allResult
    async allResult(req, res) {
        const allResult = await API_Results.findAll({
            order: [['id', 'ASC']]
        })
        return res.json(allResult)
    }
    //api/dashboard/result/getUserResults
    async getUserResults(req, res) {
        try{
            const {user_id} = req.body

            const data = await API_User.findAll({
            include: [{
                model: API_Results,
                as: 'API_Result'
            }],
            where: {
                id: user_id
            }
        })
            return res.status(200).json(data)

        } catch (e) {
            return res.status(500).json({message: e.message})
        }

    }
}


module.exports = new resultControllers()