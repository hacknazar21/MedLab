const {API_Analysis} =  require('../../models/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op



class AnalysisControllersFront {

    //TODO what column here is need to be filtered?
    //api/front/analysis/filter/byName
    async aboutSearchingByName(req, res) {
        try {
            const {short_title} = req.body
            const searchByName = await API_Analysis.findAll(
                {where:
                            {short_title:
                                        {
                                            [Op.like]: `%${short_title}%`
                                        }
                            }
                        })

            return res.status(200).json(searchByName)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }




    //api/front/analysis/allAnalysis
    async getAllAnalysis(req, res) {
        try {
            const allAnalysis = await API_Analysis.findAll();
            return res.status(200).json(allAnalysis);
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    }

     //api/front/analysis/:short_title
     async oneAnalysis(req, res) {
        try {
            const {short_title} = req.params

            const titleExists = await API_Analysis.findOne({where: {short_title}})

            if (!titleExists) {
                return res.status(500).json({message: "Analysis doesn't exist or title"})
            }

            return res.status(200).json(titleExists)

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
     }

    //TODO banner_img, document_img, main_img (need to be made static file)
    //TODO for research_id - i suppose uuid.v4 #2 but i guess there gonna be special id
    //api/front/analysis/createAnalysis
    async createAnalysis(req, res) {
        try {
            const {short_title, long_title, is_unique, research_id, research_time
                , biomaterial, preparation_doctor, banner_img, document_img,
                main_img, description_doctor, description_patient, preparation_patient, type, price} = req.body;



            if (!short_title && !long_title && !is_unique && !research_id && !research_time
                && !biomaterial && !preparation_doctor && !banner_img && !document_img
                && !main_img && !description_doctor && !preparation_patient && !type && !price && !description_patient) {
                return res.status(400).json({message: "All input is required"});
            }

            if (!research_id) {
                return res.status(401).json({message: "Analysis doesn't exist"});
            }


            await API_Analysis.create({ short_title, long_title, is_unique, research_id, research_time
                , biomaterial, preparation_doctor, banner_img, document_img,
                main_img, description_doctor, preparation_patient, type, price, description_patient});

            return res.status(201).json({message: "Analysis is created successfully"});

        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    }
    //api/front/analysis/update/:id
    async updateAnalysis(req, res) {
        try {
            const {short_title, long_title, is_unique, research_id, research_time
                , biomaterial, preparation_doctor, banner_img, document_img,
                main_img, description_doctor, description_patient, preparation_patient, type, price} = req.body;

            const {id} = req.params

            if (!short_title && !long_title && !is_unique && !research_id && !research_time
                && !biomaterial && !preparation_doctor && !banner_img && !document_img
                && !main_img && !description_doctor && !preparation_patient && !type && !price && !description_patient) {
                return res.status(400).json({message: "All input is required"});
            }

            const researchIdExists = await API_Analysis.findOne({where: {id}});

            if (!researchIdExists) {
                return res.status(401).json({message: "Analysis isn't unique"});
            }

            await API_Analysis.update({short_title, long_title, is_unique, research_id, research_time
                , biomaterial, preparation_doctor, banner_img, document_img,
                main_img, description_doctor, description_patient, preparation_patient, type, price}, {where: {id}});

            return res.status(201).json({message: "Analysis is updated"});
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    }
     //api/front/analysis/delete
    async deleteAnalysis(req, res) {
        try {
        const {research_id} = req.body;

        const researchIdExists = await API_Analysis.findOne({where: {research_id}});

        if (!researchIdExists) {
            return res.status(401).json({message: "Analysis isn't unique"});
        }
        await researchIdExists.destroy();

        return res.status(410).json({message: "Analysis is deleted"})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    }
}

module.exports = new AnalysisControllersFront()