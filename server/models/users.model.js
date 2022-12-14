const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        const error = this.invalidate('confirmPassword', "Password must match Confirm Password");
        next(error);
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports.User = mongoose.model("User", UserSchema);