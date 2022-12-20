const MessageController = require('../controllers/message.controller');

module.exports = function(app){
    app.post('/message/create', MessageController.createMessage);
    app.get('/message/:chatId', MessageController.getAllMessages);
    app.delete('/message/chat/:chatId', MessageController.deleteMessages);
}