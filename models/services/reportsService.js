const Report = require("../report");
exports.getProductReportList = async () => {
  const result = await Report.find({reportType:1}).populate({
    path:"productId",
    model:"Product"
  }).populate({
    path:"userId",
    model:"User"
  })
  .sort({ postDate: -1 }).lean();
  return result;
};

exports.getShopReportList = async () => {
  const result = await Report.find({reportType:0}).populate({
    path:"shopID",
    model:"Shop"
  }).populate({
    path:"userId",
    model:"User"
  })
  .sort({ postDate: -1 }).lean();
  return result;
};
