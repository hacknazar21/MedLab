const {Router} = require("express");
const router = Router()

const reviewInfoControllers = require('../controllers/reviewInfoControllers')
const newsInfoControllers = require('../controllers/newsInfoControllers')
const analysisInfoControllers = require('../controllers/analysisInfoControllers')

//api/front/news/allNews
router.get('/news/allNews', newsInfoControllers.getAllNews)
//api/front/news/createNews
router.post('/news/createNews', newsInfoControllers.createNews)


//api/front/review/allReviews
router.get('/review/allReviews', reviewInfoControllers.getAllReviews)
//api/front/review/createReview
router.post('/review/createReview', reviewInfoControllers.createReviews)


//api/front/analysis/allAnalysis
router.get('/analysis/allAnalysis', analysisInfoControllers.getAllAnalysis)
//api/front/analysis/createAnalysis
router.post('/analysis/createAnalysis', analysisInfoControllers.createAnalysis)

module.exports = router