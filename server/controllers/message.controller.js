const { response } = require('express');
const { Message } = require('../models/message.model');

module.exports.createMessage = (request, response) => {
    const { username, chatId, message } = request.body;
    Message.create({ username, chatId, message })
        .then(message => {
            response.json({message: "Success!", message: message});
        })
        .catch(err => response.json(err));
}

module.exports.getAllMessages = (request, response) => {
    Message.find({chatId: request.params.chatId})
        .then(messages => response.json(messages))
        .catch(err => response.json(err))
}

module.exports.deleteMessages = (request,reponse) => {
    Message.deleteMany({chatId: request.params.chatId})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}