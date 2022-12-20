const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [
            true,
            "Username is required"
        ]
    },
    chatId: {
        type: String,
        required: [
            true,
            "ChatId is required"
        ]
    },
    message: {
        type: String,
        required: [
            true, 
            "Message is required"
        ]
    }
}, {timestamps: true});

module.exports.Message = mongoose.model("Message", MessageSchema);