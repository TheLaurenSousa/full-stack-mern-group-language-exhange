const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Title is required"
        ]
    },
    description: {
        type: String,
        required: [
            true, 
            "Description is required"
        ]
    },
    owner: {
        type: String
    }
}, {timestamps: true});

module.exports.Chat = mongoose.model("Chat", ChatSchema);