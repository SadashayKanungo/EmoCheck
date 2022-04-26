const mongoose = require('mongoose')

const candidate = new mongoose.Schema({
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        enum: ['M','F'],
        required: true
    }
})
module.exports = candidate