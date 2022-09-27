const {API_Notifications} =  require('../../models/models');

class notificationControllersDashboard {

    //api/dashboard/notification/create
    async createNotification(req, res) {
        try{
            const {title_notification, date, result, APIUser_id} = req.body

            if (!title_notification && !date && !result && !APIUser_id) {
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

            await API_Notifications.create({
                title_notification,
                date,
                result,
                APIUser_id
            })

            return res.status(201).json({message: "Notification is created succesfully"})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    //api/dashboard/notification/allNotification
    async allNotification(req, res) {
        try {
            const allNotifications = await API_Notifications.findAll()
            return res.json(allNotifications)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    //api/dashboard/notification/getUserNotification
    async getUserNotification(req, res) {
        const {user_id} = req.body

        const userNotification = await API_Notifications.findAll({
            include: [{
                model: API_Notifications,
                as: 'API_Notification'
            }],
            where: {id: user_id}
        })
    }

    //api/dashboard/notification/update
    async updateNotification(req, res) {
        try {
             const {title_notification, date, result, APIUser_id} = req.body

            if (!title_notification && !date && !result && !APIUser_id) {
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

            await API_Notifications.update({title_notification, date, result, APIUser_id}, {where: {title_notification}})
            return res.status(202).json({message: "Notification was updated"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
    //api/dashboard/notification/delete
    async deleteNotification(req,res) {
        try {
             const {title_notification} = req.body
             const notificationExists = await API_Notifications.findOne({where: {title_notification}})
             if (!notificationExists) {
                 return res.status(404).json({message: "Notification doesn't exist"})
             }

             await notificationExists.destroy()
             return res.status(410).json({message: "Notification was deleted"})
        } catch (e) {
             return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new notificationControllersDashboard()