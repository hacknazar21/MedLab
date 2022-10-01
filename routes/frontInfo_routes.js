const {Router} = require("express");
const router = Router()

const ReviewControllersFront = require('../controllers/frontInfo/reviewControllersFront')
const NewsControllersFront = require('../controllers/frontInfo/newsControllersFront')
const AnalysisControllersFront = require('../controllers/frontInfo/analysisControllersFront')
const QaAControllersFront = require('../controllers/frontInfo/QaAControllersFront')
const AboutUsControllersFront = require('../controllers/frontInfo/aboutUsControllersFront')
const PromotionControllersFront = require('../controllers/frontInfo/promotionControllersFront')
const ContactControlleresFront = require("../controllers/frontInfo/contactsControllersFront")


//api/front/news/allNews
router.get('/news/allNews', NewsControllersFront.getAllNews)
//api/front/news/createNews
router.post('/news/createNews', NewsControllersFront.createNews)
//api/front/news/update
router.post('/news/update', NewsControllersFront.updateNews)
//api/front/news/delete
router.delete('/news/delete', NewsControllersFront.deleteNews)


//api/front/review/allReviews
router.get('/review/allReviews', ReviewControllersFront.getAllReviews)
//api/front/review/:text_review
router.get('/review/:text_review', ReviewControllersFront.oneReview)
//api/front/review/createReview
router.post('/review/createReview', ReviewControllersFront.createReviews)
//api/front/review/update
router.post('/review/update', ReviewControllersFront.updateReview)
//api/front/review/delete
router.delete('/review/delete', ReviewControllersFront.deleteReviews)


//api/front/analysis/allAnalysis
router.get('/analysis/allAnalysis',AnalysisControllersFront.getAllAnalysis)
//api/front/analysis/:short_title
router.get('/analysis/:short_title', AnalysisControllersFront.oneAnalysis)
//api/front/analysis/createAnalysis
router.post('/analysis/createAnalysis', AnalysisControllersFront.createAnalysis)
//api/front/analysis/update
router.post('/analysis/update/:id', AnalysisControllersFront.updateAnalysis)
//api/front/analysis/delete
router.delete('/analysis/delete', AnalysisControllersFront.deleteAnalysis)
//api/front/analysis/byName
router.get('/analysis/filter/byName', AnalysisControllersFront.aboutSearchingByName)


//api/front/qaa/allQaA
router.get('/qaa/allQaA', QaAControllersFront.getAllQaA)
//api/front/qaa/:question
router.get('/qaa/:question', QaAControllersFront.oneQaA)
//api/front/qaa/createQaA
router.post('/qaa/createQaA', QaAControllersFront.createQaA)
//api/front/qaa/update
router.post('/qaa/update/:id', QaAControllersFront.updateQaA)
//api/front/qaa/delete
router.delete('/qaa/delete', QaAControllersFront.deleteQaA)


//api/front/aboutus/allNotes
router.get('/aboutus/allNotes', AboutUsControllersFront.allNotes)
//api/front/aboutus/:title
router.get('/aboutus/:title', AboutUsControllersFront.oneNote)
//api/front/aboutus/createNotes
router.post('/aboutus/createNote', AboutUsControllersFront.createNotes)
//api/front/aboutus/update
router.post('/aboutus/update/:id', AboutUsControllersFront.updateNotes)
//api/front/aboutus/delete
router.delete('/aboutus/delete/:id', AboutUsControllersFront.deleteNotes)


//api/front/promotion/allPromotions
router.get('/promotion/allPromotion', PromotionControllersFront.allPromotions)
//api/front/promotion/:title
router.get('/promotion/:title', PromotionControllersFront.onePromotion)
//api/front/promotion/createPromotion
router.post('/promotion/createPromotion', PromotionControllersFront.createPromotion)
//api/front/promotion/update/:id
router.post('/promotion/update/:id', PromotionControllersFront.updatePromotion)
//api/front/promotion/delete/:id
router.delete('/promotion/delete/:id', PromotionControllersFront.deletePromotion)


//api/front/contact/allContacts
router.get('/contact/allContacts', ContactControlleresFront.allContacts)
//api/front/contact/createContact
router.post('/contact/createContact', ContactControlleresFront.createContact)
//api/front/contact/update/:id
router.post('/contact/update/:id', ContactControlleresFront.updateContact)
//api/front/contact/delete/:id
router.delete('/contact/delete/:id', ContactControlleresFront.deleteContact)


module.exports = router