const {API_News} = require("../models/models");

class newsControllers {
    async getAllNews(req, res) {
        try {
            const allNews = API_News.findAll()
            return res.status(200).json(allNews)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    async createNews(req, res) {
        try {
            const {img_news, title, href, date} = req.body
            if (!img_news && !title && !href && !date) {
                return res.status(400).json({message: "All input is required"})
            }

            const titleExists = await API_News.findOne({
                where: {
                    title
                }
            })

            if (titleExists) {
                return res.status(400).json({message: "News already exists"})
            }

            await API_News.create({img_news, title, href, date})
            return res.status(201).json({message: "News is created successfully"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new newsControllers()