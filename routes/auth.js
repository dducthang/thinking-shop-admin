const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');

router.get('/login', authController.getLogin);
router.get('/signup', authController.getSignup);
router.get('/forgotPassword', authController.getForgotPassword);
router.get('/block/user/:_id', authController.blockUser);
router.get('/unblock/user/:_id', authController.unblockUser);
router.get('/block/shop/:_id', authController.blockShop);
router.get('/unblock/shop/:_id', authController.unblockShop);

module.exports = router;
