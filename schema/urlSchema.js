const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: "string",
      required: true,
      unique: true,
    },
    redirectUri: {
      type: "string",
      required: true,
    },
    visitHistory: [
      {
        timestamp: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

module.exports = urlSchema;
