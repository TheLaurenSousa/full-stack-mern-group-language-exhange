const { User } = require("../models/chat.model");

module.exports.createUser = (request, response) => {
    const { username, password, confirmPassword } = request.body;
    User.create({username, password, confirmPassword})
        .then(user => {
            response.json({ msg: "Success!", user: user });
        })
        .catch(err => response.json(err));
}

module.exports.getAllUsers = (request, response) => {
    User.find({})
        .then(users => response.json(users))
        .catch(err => response.json(err));
}

module.exports.getUser = (request, response) => {
    User.findOne({_id: request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err));
}

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.status(400).json(err));
}

module.exports.deleteUser = (request, response) => {
    User.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}