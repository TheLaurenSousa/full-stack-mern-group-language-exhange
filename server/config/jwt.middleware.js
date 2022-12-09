const jwt = require('jsonwebtoken');

require('dotenv').config();
const secretkey = process.env.SECRET_KEY;

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secretkey, (err, payload) => {
        if (err) {
            return res.status(401).json({
                message: "Unauthorized access. Please login to continue.",
                verified: false
            });
        }
        next();
    });
}