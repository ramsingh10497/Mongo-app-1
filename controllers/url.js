const Url = require("../models/url");

async function HandleGenerateNewShortURL(req, res) {
  const body = req.body;
  const { url } = body;
  if (!Url) return res.status(400).json({ error: "Url must be provided" });

  try {
    const shortId = "dsfsfsds";

    console.log(shortId);

    Url.create({
      shortId,
      redirectUri: url,
      visitHistory: [],
    });

    res.status(201).json({ id: shortId });
  } catch (error) {
    res.status(error.code).json({ error });
  }
}

module.exports = {
  HandleGenerateNewShortURL,
};
