const {API_Appointments, API_User} =  require('../../models/models');
const {where} = require("sequelize");


class appointmentControllersDashboard {
    async createAppointments(req, res) {
        try {
        const {title_appointment, date, time, description, qr_code, APIUser_id} = req.body

        if (!title_appointment && !date && !time && !description && !qr_code && !APIUser_id) {
            return res.status(400).json({message: "All input is required"})
        }

        const appointmentExists = await API_Appointments.findOne({
            where: {
                title_appointment
            }
        })

        const userExists = await API_User.findOne({
            where: {id: APIUser_id}
        })

        if (!userExists) {
            return res.status(400).json({message: "User doesn't exist"})
        }

        if (appointmentExists) {
            return res.status(400).json({message: "Appointments already exists"})
        }

        await API_Appointments.create({
            title_appointment,
            date,
            time,
            description,
            qr_code,
            APIUser_id
        })

        res.status(201).json({message: 'Appointment created successfully'})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    async allAppointments(req, res) {
        try{
            const allAppointments = await API_Appointments.findAll()
            return res.json(allAppointments)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }

    }

    async getUserAppointment(req, res) {
        try {
            const {user_id} = req.body

            const userAppointment = await API_User.findAll(
                {
                    include: [{
                        model: API_Appointments,
                        as: 'API_Appointment'
                    }],
                    where: {
                        id: user_id
                    }
                }
            )
            return res.status(200).json(userAppointment)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    //TODO what to do with qr_code (like it'll be file or what?)
    async updateAppointment(req, res) {
        try{
            const {title_appointment, date, time, description, qr_code} = req.body

            const appointmentExists = await API_Appointments.findOne({where: {title_appointment}})

            if (!appointmentExists) {
                return res.status(400).json({message: "Appointment doesn't exist"})
            }

            await API_Appointments.update({title_appointment, date, time, description, qr_code}, {where: {title_appointment}})
            return res.status(202).json({message: "Appointment is updated"})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    async deleteAppointment(req, res) {
        try {
            const {title_appointment} = req.body
            const deleteAppointment = await API_Appointments.findOne({where: {title_appointment}})
            if (!deleteAppointment) {
                return res.status(404).json({message: "Appointment doesn't exist"})
            }
            await deleteAppointment.destroy()
            return res.status(410).json({message: "Appointment was deleted"})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new appointmentControllersDashboard()