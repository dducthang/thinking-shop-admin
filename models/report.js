const mongoose = require("mongoose");
const reportSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  shopID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  postDate: {
    type: Date,
    default: Date.now,
  },
  //0 la shop 1 la product
  reportType: {
    type: Number,
  },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
