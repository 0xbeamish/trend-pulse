/**
 * Vercel Serverless Proxy for Artemis Analytics API
 * Reads ARTEMIS_API_KEY from environment — never exposed to the browser.
 *
 * Usage:
 *   GET /api/artemis?endpoint=STABLECOIN_SUPPLY&symbols=ethereum,solana&startDate=2026-03-01&endDate=2026-03-09
 *   GET /api/artemis?endpoint=METRICS_BY_SYMBOL&symbols=ethereum&metrics=tvl
 *   GET /api/artemis?endpoint=STABLECOIN_DAU&symbols=ethereum
 *   GET /api/artemis?endpoint=STABLECOIN_TX_UNFILTERED&symbols=ethereum
 *   GET /api/artemis?endpoint=flows_top&sourceChains=ethereum&breakdown=chains&flowType=netflow
 *   GET /api/artemis?endpoint=asset_symbols
 */

const ARTEMIS_BASE = "https://api.artemisanalytics.com";

// Allowed endpoint mappings (whitelist to prevent abuse)
const ENDPOINTS = {
  STABLECOIN_SUPPLY:        "/data/api/STABLECOIN_SUPPLY",
  STABLECOIN_DAU:           "/data/api/STABLECOIN_DAU",
  STABLECOIN_TX_UNFILTERED: "/data/api/STABLECOIN_TX_UNFILTERED",
  METRICS_BY_SYMBOL:        "/data/api/METRICS_BY_SYMBOL",
  flows_top:                "/flows/top",
  asset_symbols:            "/asset/symbols",
};

// Params that can be forwarded (whitelist)
const ALLOWED_PARAMS = new Set([
  "symbols", "metrics", "startDate", "endDate", "granularity",
  "sourceChains", "breakdown", "flowType", "limit",
]);

export default async function handler(req, res) {
  // CORS headers for frontend
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=60");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const apiKey = process.env.ARTEMIS_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "ARTEMIS_API_KEY not configured" });
  }

  const { endpoint, ...queryParams } = req.query;

  if (!endpoint || !ENDPOINTS[endpoint]) {
    return res.status(400).json({
      error: "Invalid or missing endpoint parameter",
      allowed: Object.keys(ENDPOINTS),
    });
  }

  // Build upstream URL
  const url = new URL(ARTEMIS_BASE + ENDPOINTS[endpoint]);
  url.searchParams.set("APIKey", apiKey);

  for (const [key, value] of Object.entries(queryParams)) {
    if (ALLOWED_PARAMS.has(key) && value) {
      url.searchParams.set(key, value);
    }
  }

  try {
    const upstream = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      return res.status(upstream.status).json({
        error: "Artemis API error",
        status: upstream.status,
        detail: text.slice(0, 500),
      });
    }

    const data = await upstream.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(502).json({ error: "Failed to reach Artemis API", detail: err.message });
  }
}
