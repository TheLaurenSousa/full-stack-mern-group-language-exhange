const UserController = require('../controllers/users.controller');

module.exports = function(app){
    app.post('/user/create', UserController.createUser);
    app.get('/users', UserController.getAllUsers);
    app.get('/user/:id', UserController.getUser);
    app.get('/user/edit/:id', UserController.getUser);
    app.put('/user/update/:id', UserController.updateUser);
    app.delete('/user/delete/:id', UserController.deleteUser);
    app.post('/login', UserController.login);
    app.get('/logout', UserController.logout);
}