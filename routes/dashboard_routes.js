const {Router} = require('express')
const router = Router()
const resultControllerDashboard = require('../controllers/dashboard/resultControllersDashboard')
const appointmentControllersDashboard = require('../controllers/dashboard/appointmentControllersDashboard')
const notificationControllerDashboard = require('../controllers/dashboard/notificationControllersDashboard')

//api/dashboard/result/create
router.post('/result/create', resultControllerDashboard.createResult)
//api/dashboard/result/allResult
router.get('/result/allResult', resultControllerDashboard.allResult)
//api/dashboard/result/getUserResults
router.get('/result/getUserResults', resultControllerDashboard.getUserResults)
//api/dashboard/result/update
router.post('/result/update', resultControllerDashboard.updateResult)
//api/dashboard/result/delete
router.delete('/result/delete', resultControllerDashboard.deleteResult)


//api/dashboard/appointment/create
router.post('/appointment/create',appointmentControllersDashboard.createAppointments)
//api/dashboard/appointment/allAppointment
router.get('/appointment/allAppointment', appointmentControllersDashboard.allAppointments)
//api/dashboard/appointment/getUserAppointment
router.get('/appointment/getUserAppointment', appointmentControllersDashboard.getUserAppointment)
//api/dashboard/appointment/update
router.post('/appointment/update', appointmentControllersDashboard.updateAppointment)
//api/dashboard/appointment/delete
router.delete('/appointment/delete', appointmentControllersDashboard.deleteAppointment)




//api/dashboard/notification/create
router.post('/notification/create', notificationControllerDashboard.createNotification)
//api/dashboard/notification/allNotification
router.get('/notification/allNotification', notificationControllerDashboard.allNotification)
//api/dashboard/notification/getUserNotification
router.get('/notification/getUserNotification', notificationControllerDashboard.getUserNotification)
//api/dashboard/notification/update
router.get('/notification/update', notificationControllerDashboard.updateNotification)
//api/dashboard/notification/delete
router.get('/notification/delete', notificationControllerDashboard.deleteNotification)



module.exports = router