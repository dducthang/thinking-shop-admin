const reportService = require("../models/services/reportsService");
exports.getProductReportList = async (req, res, next) => {
  const reports = reportService.getProductReportList();
  res.render("main/reportList", { reports });
};
