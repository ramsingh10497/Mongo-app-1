const express = require("express");
const {
  HandleGenerateNewShortURL,
  RedirectFunction,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express();

router.post("/url", HandleGenerateNewShortURL);
router.get("/:shortId", RedirectFunction);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
