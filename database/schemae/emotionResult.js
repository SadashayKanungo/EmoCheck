const mongoose = require('mongoose')

const emotionResult = new mongoose.Schema({
    time:{
        type: Number,
        required: true,
    },
    neutral:{
        type: Number,
        required: true,
    },
    happy:{
        type: Number,
        required: true,
    },
    surprized:{
        type: Number,
        required: true,
    },
    angry:{
        type: Number,
        required: true,
    },
    sad:{
        type: Number,
        required: true,
    },
    disgust:{
        type: Number,
        required: true,
    },
    fear:{
        type: Number,
        required: true,
    },
    contempt:{
        type: Number,
        required: true,
    }
})

module.exports = emotionResult