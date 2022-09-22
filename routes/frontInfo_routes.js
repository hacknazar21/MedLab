const {Router} = require("express");
const router = Router()

const reviewControllers = require('../controllers/reviewControllers')
const newsControllers = require('../controllers/newsControllers')
const analysisControllers = require('../controllers/analysisControllers')

//api/front/news/allNews
router.get('/news/allNews', newsControllers.getAllNews)
//api/front/news/createNews
router.post('/news/createNews', newsControllers.createNews)


//api/front/review/allReviews
router.get('/review/allReviews', reviewControllers.getAllReviews)
//api/front/review/createReview
router.post('/review/createReview', reviewControllers.createReviews)


//api/front/analysis/allAnalysis
router.get('/analysis/allAnalysis', analysisControllers.getAllAnalysis)
//api/front/analysis/createAnalysis
router.post('/analysis/createAnalysis', analysisControllers.createAnalysis)

module.exports = router