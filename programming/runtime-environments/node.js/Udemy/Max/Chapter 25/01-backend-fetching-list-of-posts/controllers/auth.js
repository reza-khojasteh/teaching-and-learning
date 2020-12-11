const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const user = require('../models/user');

exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed in signup (auth.js controller) on the server side!');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })// A double check on the server-side not mentioned in the course!
        .then(user => {
            if (user) {
                const error = new Error('User with this email already exists!');
                error.statusCode = 401;
                throw error;
            }
            return bcrypt.hash(password, 12);
        })
        .then(hashedPw => {
            const user = new User({
                name: name,
                password: hashedPw,
                email: email
            });
            return user.save();
        })
        .then(user => {
            res.status(201).json({ message: 'User Created!', userId: user._id });
        })
        .catch(err => {
            if (!err.statusCode)
                err.statusCode = 500;
            next(err);
        });
}

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                const error = new Error('User with this email address not found!');
                error.statusCode = 401;
                throw error;
            }
            loadedUser = user;
            return bcrypt.compare(password, loadedUser.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error('Wrong Password!');
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign({
                email: loadedUser.email,
                userId: loadedUser._id.toString()
            },
                'alongsecretstring',
                {
                    expiresIn: '1h'
                }
            );
            res.status(200).json({ token: token, userId: loadedUser._id.toString() });
        })
        .catch(err => {
            if (!err.statusCode)
                err.statusCode = 500;
            next(err);
        });
}