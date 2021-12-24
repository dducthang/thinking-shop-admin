const express = require('express');

const router = express.Router();

const accountsApiController = require('../controllers/api/accounts');
router.get('/block/user/:_id', accountsApiController.blockUser);