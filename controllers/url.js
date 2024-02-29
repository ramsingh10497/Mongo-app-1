const Url = require("../models/url");
const { generate } = require("shortid");

async function HandleGenerateNewShortURL(req, res) {
  const body = req.body;
  const { url } = body;
  if (!Url) return res.status(400).json({ error: "Url must be provided" });
  try {
    const shortId = generate();
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

const RedirectFunction = async (req, res) => {
  const shortId = req.params.shortId ?? null;
  try {
    const entry = await Url.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: { timestamp: Date.now() },
        },
      }
    );
    if (!entry) return res.status(400).json({ error: "Invalid shortId" });
    res.redirect(entry.redirectUri);
  } catch (error) {
    res.status(400).json({ error: error ?? "Invalid short ID" });
  }
};

const handleGetAnalytics = async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const analytics = await Url.findOne({ shortId });
    if (!analytics)
      return res.status(400).json({ error: "No analytics found" });
    const result = {
      totalClickCount: analytics.visitHistory.length,
      analytics: analytics.visitHistory,
    };
    res.json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  HandleGenerateNewShortURL,
  RedirectFunction,
  handleGetAnalytics,
};
