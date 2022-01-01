const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admins");

router.get("/profile", adminController.getProfile);
router.get("/updatepassword", adminController.getUpdatePassword);
router.post("/updatepassword", adminController.postUpdatePassword);

module.exports = router;
