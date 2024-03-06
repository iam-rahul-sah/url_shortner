const express = require('express')
const {handleGenerateNewShortURL, handlGetAnalytics} = require('../controllers/url.js')
const router = express.Router();

router.post('/', handleGenerateNewShortURL)
router.get("/analytics/:id", handlGetAnalytics)

module.exports = router