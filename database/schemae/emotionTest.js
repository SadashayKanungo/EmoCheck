const mongoose = require('mongoose')

const emotionTest = new mongoose.Schema({
    neutral:{
        type: Boolean,
        required: true,
        default: true
    },
    happy:{
        type: Boolean,
        required: true,
        default: true
    },
    surprized:{
        type: Boolean,
        required: true,
        default: true
    },
    angry:{
        type: Boolean,
        required: true,
        default: true
    },
    sad:{
        type: Boolean,
        required: true,
        default: true
    },
    disgust:{
        type: Boolean,
        required: true,
        default: true
    },
    fear:{
        type: Boolean,
        required: true,
        default: true
    },
    contempt:{
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = emotionTest