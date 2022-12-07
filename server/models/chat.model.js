const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [
            true,
            "Username is required"],
        minLength: [3, "Username must be at least 3 characters long"]
    },
    password: {
        type: String,
        required: [
            true,
            "Password is required"],
        minLength: [8, "Password must be at least 8 characters long"]
    }
}, {timestamps: true});

module.exports.User = mongoose.model("User", UserSchema);