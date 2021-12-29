const express = require("express");

const router = express.Router();

const reportController = require("../controllers/reports");

router.get("/reportList", reportController.getProductReportList);
module.exports = router;
