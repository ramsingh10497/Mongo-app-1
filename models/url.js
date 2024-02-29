const mongoose = require("mongoose");
const urlSchema = require("../schema/urlSchema");

const Url = mongoose.model("url", urlSchema);

module.exports = Url;
