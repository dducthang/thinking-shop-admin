const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admins");

router.get("/profile", adminController.getProfile);

module.exports = router;
