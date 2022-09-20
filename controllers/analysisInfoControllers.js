const {UI_Analysis} = require('../models/models')

class analysisInfoControllers {
    async getAllAnalysis(req, res) {
        try {
            const allAnalysis = await UI_Analysis.findAll()
            return res.status(200).json(allAnalysis)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    async createAnalysis(req, res) {
        try {
            const {tags, title, date, type, price,
                code, title_long, additional,
                href, image_analysis} = req.body

            if (!tags && !title && !date && !type && !price
                && !code && !title_long && !additional && !href
                && !image_analysis) {
                return res.status(400).json({message: "All input is required"})
            }

            await UI_Analysis.create({tags, title, date, type, price,
                code, title_long, additional,
                href, image_analysis})

            return res.status(201).json({message: "Analysis is created successfully"})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new analysisInfoControllers()