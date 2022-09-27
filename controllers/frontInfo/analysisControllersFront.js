const {API_Analysis} =  require('../../models/models')

class analysisControllersFront {
    async getAllAnalysis(req, res) {
        try {
            const allAnalysis = await API_Analysis.findAll()
            return res.status(200).json(allAnalysis)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
    //TODO banner_img, document_img, main_img (need to be made static file
    //TODO for research_id - i suppose uuid.v4
    async createAnalysis(req, res) {
        try {
            const { short_title, long_title, is_unique, research_id, research_time
                , biomaterial, preparation_doctor, banner_img, document_img,
                main_img, description_doctor, preparation_patient, type} = req.body

            if (!tags && !title && !date && !type && !price
                && !code && !title_long && !additional && !href
                && !image_analysis) {
                return res.status(400).json({message: "All input is required"})
            }

            await API_Analysis.create({tags, title, date, type, price,
                code, title_long, additional,
                href, image_analysis})

            return res.status(201).json({message: "Analysis is created successfully"})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new analysisControllersFront()