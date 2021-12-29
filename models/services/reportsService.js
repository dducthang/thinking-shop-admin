const Report = require("../report");
exports.getProductReportList = async () => {
  const result = await Report.find({}).sort({ postDate: -1 }).lean();
  return result;
};
