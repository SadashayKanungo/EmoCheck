const mongoose = require('mongoose')
const emotionResult = require('../schemae/emotionResult')
const candidate = require('../schemae/candidate')

const result = new mongoose.Schema({
    test:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Test'
    },
    emotions:[{
        type: emotionResult,
        required: true
    }],
    candidate:{
        type: candidate,
        required: true,
    }
}, {timestamps: true})

const Result = mongoose.model('Result', result)

module.exports = Result