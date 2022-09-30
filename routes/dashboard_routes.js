const {Router} = require('express')
const router = Router()
const ResultControllerDashboard = require('../controllers/dashboard/resultControllersDashboard')
const AppointmentControllersDashboard = require('../controllers/dashboard/appointmentControllersDashboard')
const NotificationControllerDashboard = require('../controllers/dashboard/notificationControllersDashboard')


//api/dashboard/result/allResult
router.get('/result/allResult', ResultControllerDashboard.allResult)
//api/dashboard/result/getUserResults
router.get('/result/getUserResults', ResultControllerDashboard.getUserResults)
//api/dashboard/result/:title
router.get('/result/:title', ResultControllerDashboard.oneResult)
//api/dashboard/result/create
router.post('/result/create', ResultControllerDashboard.createResult)
//api/dashboard/result/update
router.post('/result/update/:id', ResultControllerDashboard.updateResult)
//api/dashboard/result/delete
router.delete('/result/delete', ResultControllerDashboard.deleteResult)


//api/dashboard/appointment/allAppointment
router.get('/appointment/allAppointment', AppointmentControllersDashboard.allAppointments)
//api/dashboard/appointment/:title
router.get('/appointment/:title', AppointmentControllersDashboard.oneAppointment)
//api/dashboard/appointment/create
router.post('/appointment/create', AppointmentControllersDashboard.createAppointment)
//api/dashboard/appointment/getUserAppointment
router.get('/appointment/getUserAppointment', AppointmentControllersDashboard.getUserAppointment)
//api/dashboard/appointment/update
router.post('/appointment/update/:id', AppointmentControllersDashboard.updateAppointment)
//api/dashboard/appointment/delete
router.delete('/appointment/delete', AppointmentControllersDashboard.deleteAppointment)




//api/dashboard/notification/allNotification
router.get('/notification/allNotification', NotificationControllerDashboard.allNotification)
//api/dashboard/notification/getUserNotification
router.get('/notification/getUserNotification', NotificationControllerDashboard.getUserNotification)
//api/dashboard/notification/:title
router.get('/notification/:title', NotificationControllerDashboard.oneNotification)
//api/dashboard/notification/create
router.post('/notification/create', NotificationControllerDashboard.createNotification)
//api/dashboard/notification/update
router.post('/notification/update', NotificationControllerDashboard.updateNotification)
//api/dashboard/notification/delete
router.delete('/notification/delete', NotificationControllerDashboard.deleteNotification)



module.exports = router