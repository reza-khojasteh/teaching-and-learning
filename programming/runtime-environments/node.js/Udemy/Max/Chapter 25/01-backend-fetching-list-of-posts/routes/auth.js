const express = require('express');
const { body } = require('express-validator/check');

const User = require('../models/user');
const authController = require('../controllers/auth');

const router = express.Router();

router.put('/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email!')
            .custom((value, { req }) => {
                return User.findOne({ email: value })
                    .then(userDoc => {
                        if (userDoc) {
                            return Promise.reject('Email already exists!');
                        }
                    });
            }),
            //.normalizeEmail(),//This remmoves dots from my gmail address!
        body('password')
            .trim()
            .isLength({ min: 5 }),
        body('name')
            .trim()
            .not()
            .isEmpty()
    ], authController.signup);

router.post('/login', [
    body('email')
        //.normalizeEmail()
],
    authController.login);

module.exports = router;