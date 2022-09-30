const {API_QaA} = require('../../models/models')


class QaAControllersFront {
    //api/front/qaa/allQaA
    async getAllQaA(req, res) {
        try {
            const allQaA = await API_QaA.findAll()
            return res.status(200).json(allQaA)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
     //api/front/qaa/:question
    async oneQaA(req, res) {
        try {
            const {question} = req.params

            const quesitonExists = await API_QaA.findOne({where: {question}})


            if (!quesitonExists) {
                return res.status(404).json({message: "Question doesn't exist"})
            }

            return res.status(200).json(quesitonExists)

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    //api/front/qaa/createQaA
    async createQaA(req, res) {
        try {
            const {question, answer} = req.body

            if (!question && !answer) {
                return res.status(401).json({message: "All input is required"})
            }

            const questionExists = await API_QaA.findOne({
                where: {question}
            })

            if (questionExists) {
                return res.status(401).json({message: "Question already exists"})
            }

            await API_QaA.create({question, answer})

            return res.status(201).json({message: "QaA is created"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    //api/front/qaa/update/:id
    async updateQaA(req, res) {
        try {
            const {question, answer} = req.body
            const {id} = req.params
            console.log(req.body, '2222')
            const questionExists = await API_QaA.findOne({
                where: {id}
            })

            if (!questionExists) {
                return res.status(400).json({message: "Question doesn't exist"})
            }

            const updateQaA = await API_QaA.update({question, answer}, {where: {id}})

            return res.status(202).json({updateQaA})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    //api/front/qaa/delete
    async deleteQaA(req, res) {
        try {
            const {question} = req.body

            const questionExists = await API_QaA.findOne({where: {question}})

            if (!questionExists) {
                return res.status(404).json({message: "Question doesn't exist"})
            }

            await questionExists.destroy()
            return res.status(410).json({message: "QaA is deleted"})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new QaAControllersFront()