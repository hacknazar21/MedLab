const {API_Promotion} = require("../../models/models")

class PromotionControllersFront {
    //api/front/promotion/allPromotions
    async allPromotions(req, res) {
        try {
            const getAll = await API_Promotion.findAll()
            return res.status(200).json(getAll)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }

    }

    //api/front/promotion/:title
    async onePromotion(req, res) {
        try {
            const {title} = req.params

            const titleExists = await API_Promotion.findOne({where: {title}})

            if (!titleExists) {
                return res.status(404).json({message: "Promotion doesn't exist"})
            }

            return res.status(200).json(titleExists)

        } catch (e) {
             return res.status(500).json({message: e.message})
        }
    }

    //api/front/promotion/createPromotion
    async createPromotion(req, res) {
        try {
            const {title, text} = req.body

            if (!title && !text) {
                return res.status(400).json({message: "All input is required"})
            }

            const titleExists = await API_Promotion.findOne({where: {title}})
            console.log(titleExists)

            if (titleExists) {
                return res.status(400).json({message: "Promotion already exists"})
            }

            await API_Promotion.create({title, text})

            return res.status(201).json({message: "Promotion has been created"})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    //api/front/promotion/update/:id
    async updatePromotion(req, res) {
        try {
            const {title, text} = req.body
            const {id} = req.params

            const titleExists = await API_Promotion.findAll({where: {id}})

            if (!titleExists) {
                return res.status(404).json({message: "Promotion doesn't exist"})
            }

            await API_Promotion.update({title, text}, {where: {id}})

            return res.status(201).json({message: "Promotion has been updated"})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    //api/front/promotion/delete/:id
    async deletePromotion(req, res) {
        try {
            const {id} = req.params

            const promotionExists = await API_Promotion.findOne({where: {id}})

            if (!promotionExists) {
                return res.status(404).json({message: "Promotion doesn't exist"})
            }

            await promotionExists.destroy()

            return res.status(410).json({message: "Promotion has been deleted"})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

}

module.exports = new PromotionControllersFront()