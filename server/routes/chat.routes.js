const ChatController = require('../controllers/chat.controller');

module.exports = function(app){
    app.post('/chat/create', ChatController.createChat);
    app.get('/chat/:id', ChatController.getChat);
    app.get('/chats', ChatController.getAllChats);
    app.put('/chat/update/:id', ChatController.updateChat);
    app.delete('/chat/delete/:id', ChatController.deleteChat);
}