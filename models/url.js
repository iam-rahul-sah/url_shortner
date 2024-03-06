const mongoose = require('mongoose')

const URLschema = mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [
        { timestamp: Number }
    ]},
    {timestamps: true}
)

const URL = mongoose.model('url', URLschema);

module.exports=URL