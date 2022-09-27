const {API_Results, API_User} =  require('../../models/models');
const fs = require("fs");
const path = require("path");
const handfulThing = require('../test_refactoring')

// FIXME resultPath url doesn't lead anywhere
class resultControllersDashboard {
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

            let resultFile = file
            if(req.files) resultFile = req.files.file

            if (resultFile) {
                try{
                    await fs.accessSync(`resultFile/file-${APIUser_id}`, fs.constants.R_OK)
                    await fs.promises.rm(`resultFile/file-${APIUser_id}`, {recursive: true})
                }catch (e) {}

                await fs.promises.mkdir(`resultFile/file-${APIUser_id}`, {recursive: true})
                await resultFile.mv(path.resolve(__dirname, '../../', `resultFile/file-${APIUser_id}`, resultFile.name))
                const resultPath = `http://192.168.0.118:8081/api/dashboard/resultFile/file-${APIUser_id}/${resultFile.name}`
                await API_Results.create(
                    {title_result, isReady, file: resultPath , APIUser_id},
                )
                  return res.status(201).json({message: 'Result is created succesfully'})
            } else {
                await API_Results.create(
                    {title_result, isReady, APIUser_id},
                )
                  return res.status(201).json({message: 'Result is created succesfully1'})
            }
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

            const userResults = await API_User.findAll({
            include: [{
                model: API_Results,
                as: 'API_Result'
            }],
            where: {
                id: user_id
            }
        })
            return res.status(200).json(userResults)

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
    //api/dashboard/result/update
    async updateResult(req, res) {

        try{
            const {title_result, isReady, file, APIUser_id} = req.body

            const resultExists = await API_Results.findOne({where: {title_result}})

            if (!resultExists) {
                return res.status(400).json({message: "Result doesn't exist"})
            }

            const result = handfulThing.uploadFile('sdsd')
            console.log(result)


            let resultFile = file
            if(req.files) resultFile = req.files.file

            if (resultFile) {
                try{
                    await fs.accessSync(`resultFile/file-${APIUser_id}`, fs.constants.R_OK)
                    await fs.promises.rm(`resultFile/file-${APIUser_id}`, {recursive: true})
                }catch (e) {}

                await fs.promises.mkdir(`resultFile/file-${APIUser_id}`, {recursive: true})
                await resultFile.mv(path.resolve(__dirname, '../../', `resultFile/file-${APIUser_id}`, resultFile.name))
                const resultPath = `http://192.168.0.118:8081/api/dashboard/resultFile/file-${APIUser_id}/${resultFile.name}`
                await API_Results.update(
                    {title_result, isReady, file: resultPath , APIUser_id}, {where: {title_result}}
                )
                  return res.status(202).json({message: "Result is updated"})
            } else {
                await API_Results.update(
                    {title_result, isReady, APIUser_id}, {where: {title_result}}
                )
                  return res.status(202).json({message: "Result is updated1"})
            }

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
     //api/dashboard/result/delete
    async deleteResult(req, res) {
        try {
            const {title_result} = req.body
            const findResult = await API_Results.findOne({where:{title_result}})
            if (!findResult) {
                return res.status(404).json({message: "Result doesn't exist"})
            }
            await findResult.destroy()
            return res.status(410).json({message: "The result was deleted"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }

    }

}


module.exports = new resultControllersDashboard()