const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Title is required"
        ]
    },
    users: [{
        username: String
    }],
    messages: [{
        username: String,
        message: String
    }]
}, {timestamps: true});

module.exports.Chat = mongoose.model("Chat", ChatSchema);