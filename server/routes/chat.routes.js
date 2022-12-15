const ChatController = require('../controllers/chat.controller');

module.exports = function(app){
    app.post('/chat/create', ChatController.createChat);
    app.get('/chat/:id', ChatController.getChat);
    app.put('/chat/update/:id', ChatController.updateChat);
}