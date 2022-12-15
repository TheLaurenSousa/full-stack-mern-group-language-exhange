const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    users: [{
        id: Number, 
        username: String
    }],
    messages: [{
        username: String,
        message: String, 
        date: Date
    }]
}, {timestamps: true});

module.exports.User = mongoose.model("Chat", ChatSchema);