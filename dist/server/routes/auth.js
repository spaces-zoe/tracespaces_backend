'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _authController = require('../controllers/authController');

var _authController2 = _interopRequireDefault(_authController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

var signup = _authController2.default.signup,
    signin = _authController2.default.signin,
    verifyAccount = _authController2.default.verifyAccount;


router.post('/signup', signup);
router.post('/signin', signin);
router.post('/verifyaccount', verifyAccount);

exports.default = router;