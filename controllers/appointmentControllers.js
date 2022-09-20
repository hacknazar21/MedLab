const {API_Appointments} = require('../models/models')


class appointmentControllers {
    async createAppointments(req, res) {
        try {
        const {title_appointment, date, time, description, qr_code} = req.body

        if (!title_appointment && !date && !time && !description && !qr_code) {
            return res.status(400).json({message: "All input is required"})
        }

        const appointmentExists = await API_Appointments.findOne({
            where: {
                title_appointment
            }
        })

        if (appointmentExists) {
            return res.status(400).json({message: "Appointments already exists"})
        }

        const createAppointment = await API_Appointments.create({
            title_appointment,
            date,
            time,
            description,
            qr_code
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
}

module.exports = new appointmentControllers()