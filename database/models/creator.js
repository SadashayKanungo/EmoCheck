const mongoose = require('mongoose');

var creator = new mongoose.Schema({
    
}, {timestamps: false});

const Creator = mongoose.model('Creator', creator);

module.exports = Creator;