const express = require('express')
const {connectToMongoDB} = require("./connect")
const urlRoute = require("./routes/url")
const URL = require("./models/url")
const shortid = require('shortid')

const app = express()
app.use(express.json())
app.use("/url", urlRoute)
const PORT = 8000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    console.log(shortId)
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {$push: {
        visitHistory: {
            timestamp: Date.now()
        }
    }})
    res.redirect(entry.redirectURL);
})

connectToMongoDB('mongodb://localhost:27017/testdb')
.then(console.log("Mongodb connected"))
