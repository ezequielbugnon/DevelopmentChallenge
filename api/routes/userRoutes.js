const router = require('express').Router();
const userController = require('../controllers/userController.js');
const token = require('../../jwt/index.js');

router.post('/user/login',userController.login);
router.post('/user/register',userController.register);
router.get('/user/me', token.check ,userController.me);


module.exports= router;