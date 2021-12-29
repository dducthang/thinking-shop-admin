const reportService = require("../models/services/reportsService");
exports.getReports = async (req, res, next) => {
    const reportedProducts = await reportService.getProductReportList();
    const reportedShops = await reportService.getShopReportList();
    const reportedList= { shops:reportedShops, products: reportedProducts }
    res.render("main/reportList", {reportedList});
};

