const {API_AboutUs} = require('../../models/models')

class AboutUsControllersFront {
    //api/front/aboutus/allNotes
    async allNotes(req, res) {
        try {
            const getAllNotes = await API_AboutUs.findAll()
            return res.status(200).json(getAllNotes)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    //api/front/aboutus/:title
    async oneNote(req, res) {
        try {
            const {title} = req.params

            const noteExist = await API_AboutUs.findOne(
                                                        {where: {title}}
                                                        )

            if (!noteExist) {
                return res.status(404).json({message: "Note doesn't exist"})
            }

            return res.status(201).json(noteExist)


        } catch (e) {
            return res.status(500).json({message: e.message})
        }

    }

    //api/front/aboutus/createNotes
    async createNotes(req, res) {
        try {
            const {title, text, image} = req.body

            if (!title && !text && !image) {
                return res.status(401).json({message: 'All input is required'})
            }

            const noteExists = await API_AboutUs.findOne({where: {title}})

            if (noteExists) {
                return res.status(401).json({message: "Note already exists"})
            }

            await API_AboutUs.create({title, text, image})

            return res.status(201).json({message: "Note is created"})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
    //api/front/aboutus/update/:id
    async updateNotes(req, res) {
        try {
            const {title, text, image} = req.body
            const {id} = req.params
            const noteExists = await API_AboutUs.findOne({where: {id}})

            if (!noteExists) {
                return res.status(404).json({message: "Note doesn't exist"})
            }

            await API_AboutUs.update({title, text, image}, {where: {id}})
            return res.status(202).json({message: "Note is updated"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
    //api/front/aboutus/delete
    async deleteNotes(req, res) {
        try {
            const {id} = req.body
            const deleteById = await API_AboutUs.findByPk(id)

            if (!deleteById) {
                return res.status(404).json({message: `Note with this id ${id} not found`})
            }

            await deleteById.destroy()
            return res.status(410).json(`Note with this id ${id} is deleted`)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new AboutUsControllersFront()