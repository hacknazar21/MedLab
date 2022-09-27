const {Router} = require("express");
const router = Router()

const reviewControllersFront = require('../controllers/frontInfo/reviewControllersFront')
const newsControllersFront = require('../controllers/frontInfo/newsControllersFront')
const analysisControllersFront = require('../controllers/frontInfo/analysisControllersFront')

//api/front/news/allNews
router.get('/news/allNews', newsControllersFront.getAllNews)
//api/front/news/createNews
router.post('/news/create', newsControllersFront.createNews)
//api/front/news/update
router.post('/news/update', newsControllersFront.updateNews)
//api/front/news/delete
router.delete('/news/delete', newsControllersFront.deleteNews)


//api/front/review/allReviews
router.get('/review/allReviews', reviewControllersFront.getAllReviews)
//api/front/review/createReview
router.post('/review/createReview', reviewControllersFront.createReviews)
//api/front/review/update
router.post('/review/update', reviewControllersFront.updateReview)
//api/front/review/delete
router.delete('/review/delete', reviewControllersFront.deleteReviews)

//api/front/analysis/allAnalysis
router.get('/analysis/allAnalysis',analysisControllersFront.getAllAnalysis)
//api/front/analysis/createAnalysis
router.post('/analysis/createAnalysis', analysisControllersFront.createAnalysis)

module.exports = router