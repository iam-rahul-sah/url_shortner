const shortid = require('shortid')
const URL = require('../models/url')

async function handleGenerateNewShortURL(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'URL is required'})
    const shortID = shortid(8)
    console.log(shortID)
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    })

    return res.json({id: shortID})
}

async function handlGetAnalytics(req, res){
    const shortId = req.params.id
    const result = await URL.findOne({shortId})

    return res.json({
        redirectURL: result.redirectURL,
        totalClick: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports = {
    handleGenerateNewShortURL,
    handlGetAnalytics
}