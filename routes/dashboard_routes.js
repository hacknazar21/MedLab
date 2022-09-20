const {Router} = require('express')
const router = Router()
const resultController = require('../controllers/resultControllers')
const appointmentController = require('../controllers/appointmentControllers')
const notificationController = require('../controllers/notificationControllers')

//api/dashboard/result/create
router.post('/result/create', resultController.createResult)
//api/dashboard/result/allResult
router.get('/result/allResult', resultController.allResult)

//api/dashboard/appointment/create
router.post('/appointment/create', appointmentController.createAppointments)
//api/dashboard/appointment/allAppointment
router.get('/appointment/allAppointment', appointmentController.allAppointments)

//api/dashboard/notification/create
router.post('/notification/create', notificationController.createNotification)
//api/dashboard/notification/allNotification
router.get('/notification/allNotification', notificationController.allNotification)



module.exports = router