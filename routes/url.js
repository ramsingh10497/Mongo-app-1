const express = require("express");
const { HandleGenerateNewShortURL } = require("../controllers/url");

const router = express();

router.post("/", HandleGenerateNewShortURL);

module.exports = router;
