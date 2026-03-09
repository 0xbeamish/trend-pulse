# Trend Pulse — Twitter Intelligence Dashboard

A real-time Twitter trend monitoring dashboard for DeFi, stablecoins, prediction markets, AI, VC, macro, and fintech.

Built with vanilla HTML/CSS/JS. Dark-first design. No build step required.

## Topics Monitored

- **DeFi** — Protocol launches, TVL movements, governance, exploits, restaking
- **Stablecoins** — Market cap shifts, regulatory developments, USDC/USDT, tokenization
- **Prediction Markets** — Polymarket/Kalshi volume, event market movements
- **AI** — Private market rounds, valuations, frontier model releases, infrastructure
- **VC** — Tech VC rounds, fund raises, IPO pipeline, sector allocation
- **Macro** — Fed, CPI/PPI, yields, oil, geopolitics, tariffs
- **Fintech** — Funding, M&A, regulatory changes, product launches

## Deploy on Vercel

1. Fork this repo or push to your own GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import this repository
4. Deploy — no configuration needed (static site, auto-detected)

## Data

The dashboard reads from `trends.json` in the root directory. When no `trends.json` is found, it displays sample data.

The JSON schema:

```json
{
  "updated": "2026-03-09T14:00:00Z",
  "trends": [
    {
      "id": "unique-id",
      "cycle": "2026-03-09T14:00:00Z",
      "domain": "defi|stablecoins|predmarkets|ai|vc|macro|fintech",
      "sentiment": "bullish|bearish|neutral|contested",
      "title": "Trend headline",
      "summary": "2-3 sentence summary",
      "why": "Why it matters",
      "voices": [{"handle": "@username", "url": "https://x.com/username"}],
      "dataSources": ["Optional data source names"],
      "tweets": ["Primary tweet draft", "Alt tweet draft"]
    }
  ]
}
```

## License

MIT

