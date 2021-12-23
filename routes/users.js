const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getUserList);
router.get('/locked', usersController.getLockedUsers);
router.get('/:userId', usersController.getUserDetail);

module.exports = router;
