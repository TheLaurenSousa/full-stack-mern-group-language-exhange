const ChatController = require('../controllers/chat.controller');

module.exports = function(app){
    app.post('/user/create', ChatController.createUser);
    app.get('/users', ChatController.getAllUsers);
    app.get('user/:id', ChatController.getUser);
    app.get('/user/edit/:id', ChatController.getUser);
    app.put('/user/update/:id', ChatController.updateUser);
    app.delete('/user/delete/:id', ChatController.deleteUser);
    app.post('/login', ChatController.login);
}