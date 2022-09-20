const {API_Notifications} = require('../models/models')

class notificationControllers {
    async createNotification(req, res) {
        try{
           const {title_notification, date, result} = req.body

            if (!title_notification && !date && !result) {
                return res.json(400).json({message: "All input is required"})
            }

            const notificationExists = await API_Notifications.findOne({
                where: {
                    title_notification
                }
            })

            if (notificationExists) {
                return res.status(400).json({message: "Notification already exists"})
            }

            const createNotification = await API_Notifications.create({
                title_notification,
                date,
                result
            })

            return res.status(200).json({message: "Notification is created succesfully"})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    async allNotification(req, res) {
        try {
            const allNotifications = await API_Notifications.findAll()
            return res.json(allNotifications)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new notificationControllers()