const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getUsers);
router.get('/locked', usersController.getLockedUsers);
router.get('/:userId', usersController.getUser);

module.exports = router;
