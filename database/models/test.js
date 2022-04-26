const mongoose = require('mongoose')
const validator = require('validator')
const emotionResult = require('../schemae/emotionResult')
const emotionTest = require('../schemae/emotionTest')

const test = new mongoose.Schema({
    sample:{
        type: String,
        required: true,
        trim: true,
        validate(value){
            if (! validator.isURL(value)){
                throw new Error('Invalid URL')
            }
        }
    },
    isOpen:{
        type: Boolean,
        default: true
    },
    emotions:{
        type: emotionTest,
        required: true
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Creator'
    },
    averageResult:{
        type: emotionResult
    }
}, {timestamps: true})

test.virtual('results', {
    ref: 'Result',
    localField: '_id',
    foreignField: 'test'
})

const Test = mongoose.model('Test', test)

module.exports = Test