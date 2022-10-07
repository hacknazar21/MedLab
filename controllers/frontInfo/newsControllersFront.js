const {API_News} =  require('../../models/models');

class NewsControllersFront {
    //api/front/news/allNews
    async getAllNews(req, res) {
        try {
            const allNews = await API_News.findAll()
            return res.status(200).json(allNews)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
    //api/front/news/create
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

            if (!titleExists) {
                return res.status(404).json({message: "News doesn't exist"})
            }

            await API_News.create({img_news, title, href, date})
            return res.status(201).json({message: "News is created successfully"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
    //TODO uploading img_news (need to be refactored)
    //api/front/news/update
    async updateNews(req, res) {
        try{
            const {img_news, title, href, date} = req.body
            if (!img_news && !title && !href && !date) {
                return res.status(400).json({message: "All input is required"})
            }
            const [titleExists] = await Promise.all([API_News.findOne({
                where: {
                    title
                }
            })])

            if (!titleExists) {
                return res.status(404).json({message: "News doesn't exist"})
            }

            const a = await API_News.update({img_news, title, href, date}, {where: {title}})
            console.log(a)
            return res.status(201).json(a)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
    //api/front/news/delete
    async deleteNews(req, res) {
        try {
            const {title} = req.body

            const newsExists = await API_News.findOne({where: {title}})
            if (!newsExists) {
                return res.status(404).json({message: "News doesn't exist"})
            }
            await newsExists.destroy()
            return res.status(410).json({message: "News was deleted"})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new NewsControllersFront()