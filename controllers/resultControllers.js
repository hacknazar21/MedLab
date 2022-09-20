const {API_Results} = require('../models/models')

// TODO how to create file
class resultControllers {
    async createResult(req, res) {
        try {
        const {title_result, isReady, file} = req.body

    if (!title_result && !isReady && !file) {
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
        file
    })
    console.log(createResult)
    return res.status(201).json({message: 'Result is created succesfully'})
    } catch (e) {
       return  res.status(500).json({messsage: e.messsage})
    }
    }

    async allResult(req, res) {
        const allResult = await API_Results.findAll()
        return res.json(allResult)
    }
}


module.exports = new resultControllers()