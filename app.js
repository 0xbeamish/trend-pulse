/* Trend Pulse — Application Logic */

(function () {
  "use strict";

  /* ========== DOMAIN CONFIG ========== */
  var DOMAINS = {
    defi:        { label: "DeFi",             cssClass: "defi" },
    stablecoins: { label: "Stablecoins",      cssClass: "stablecoins" },
    predmarkets: { label: "Prediction Mkts",  cssClass: "predmarkets" },
    ai:          { label: "AI",               cssClass: "ai" },
    vc:          { label: "VC",               cssClass: "vc" },
    macro:       { label: "Macro",            cssClass: "macro" },
    fintech:     { label: "Fintech",          cssClass: "fintech" }
  };

  /* ========== SAMPLE DATA ========== */
  var SAMPLE_TRENDS = [
    {
      id: "t1",
      cycle: "2026-03-09T14:00:00Z",
      domain: "defi",
      sentiment: "bullish",
      title: "Solana DeFi TVL Crosses $15B as Institutional Stablecoin Flows Accelerate",
      summary: "Solana's total DeFi TVL has crossed $15B for the first time, driven primarily by institutional stablecoin inflows into money market protocols. Multiple on-chain analysts note the composition of deposits has shifted \u2014 less memecoin collateral, more USDC/USDT from identifiable institutional wallets.",
      why: "This signals a maturation of Solana\u2019s DeFi ecosystem beyond the \"casino\" narrative. If institutional capital is choosing Solana for yield, it validates the chain\u2019s infrastructure play and has implications for SOL\u2019s risk premium.",
      voices: [
        { handle: "@DefiLlama", url: "https://x.com/DefiLlama" },
        { handle: "@CryptoHayes", url: "https://x.com/CryptoHayes" }
      ],
      dataSources: ["Artemis TVL Dashboard"],
      tweets: [
        "Solana DeFi TVL just crossed $15B \u2014 but the interesting part isn\u2019t the number.\n\nThe composition has shifted. Institutional stablecoin deposits are replacing memecoin collateral.\n\nSolana\u2019s \"casino\" narrative is quietly becoming an infrastructure story. $SOL",
        "$15B TVL on Solana and the smart money isn\u2019t aping memecoins.\n\nInstitutional USDC/USDT flows into Solana money markets are accelerating. This is the rotation from speculation to infrastructure that bulls have been waiting for."
      ]
    },
    {
      id: "t2",
      cycle: "2026-03-09T14:00:00Z",
      domain: "stablecoins",
      sentiment: "contested",
      title: "Circle Files Updated S-1 \u2014 IPO Pricing Expected Q2 2026",
      summary: "Circle has filed an updated S-1 with the SEC, indicating a potential IPO pricing in Q2 2026. The filing reveals $1.7B in 2025 revenue, up 38% YoY, with USDC market cap at $48B. CT is divided on whether this is bullish for stablecoin adoption or a liquidity exit for insiders.",
      why: "Circle going public is a landmark event for crypto legitimacy. It gives TradFi a regulated, publicly-traded proxy for stablecoin growth. The filing also reveals USDC\u2019s unit economics in detail for the first time \u2014 critical intelligence for anyone modeling stablecoin market dynamics.",
      voices: [
        { handle: "@TheBlock__", url: "https://x.com/TheBlock__" },
        { handle: "@tier10k", url: "https://x.com/tier10k" }
      ],
      dataSources: ["Artemis Stablecoin Dashboard"],
      tweets: [
        "Circle\u2019s updated S-1 just dropped. The numbers:\n\n\u2022 $1.7B revenue (2025, +38% YoY)\n\u2022 USDC market cap: $48B\n\u2022 IPO pricing expected Q2 2026\n\nFirst time we\u2019ve seen stablecoin unit economics in a public filing. This is institutional signal.",
        "The Circle IPO is the most important crypto event of 2026 that nobody\u2019s talking about.\n\nA publicly-traded stablecoin issuer gives TradFi a regulated on-ramp to crypto yield infrastructure.\n\nForget the ETF narrative \u2014 this is the real bridge."
      ]
    },
    {
      id: "t3",
      cycle: "2026-03-09T14:00:00Z",
      domain: "macro",
      sentiment: "bearish",
      title: "Treasury Yields Spike After Hotter-Than-Expected PPI \u2014 Fed Cut Expectations Pushed Back",
      summary: "February PPI came in at +0.4% MoM vs. +0.2% expected, driven by sticky services inflation. The 10Y Treasury jumped 12bps to 4.52%. Market pricing for a June rate cut dropped from 68% to 41% according to CME FedWatch.",
      why: "A hotter PPI print compounds the sticky CPI narrative. If the Fed is forced to hold rates longer, it tightens financial conditions and pressures risk assets \u2014 particularly crypto and growth equities. This is the second consecutive upside surprise on inflation.",
      voices: [
        { handle: "@NickTimiraos", url: "https://x.com/NickTimiraos" },
        { handle: "@MacroAlf", url: "https://x.com/MacroAlf" },
        { handle: "@zerohedge", url: "https://x.com/zerohedge" }
      ],
      dataSources: [],
      tweets: [
        "PPI +0.4% vs +0.2% expected.\n10Y yield \u2192 4.52% (+12bps).\nJune cut probability: 68% \u2192 41%.\n\nTwo consecutive upside inflation surprises. The \"last mile\" of disinflation is proving stickier than markets priced.",
        "The bond market is telling you something:\n\n10Y at 4.52% after a hot PPI print. June rate cut pricing just cratered.\n\nIf you\u2019re long risk assets on a rate-cut thesis, your timeline just got extended."
      ]
    },
    {
      id: "t4",
      cycle: "2026-03-09T14:00:00Z",
      domain: "predmarkets",
      sentiment: "bullish",
      title: "Polymarket Volume Hits $2B Monthly as US Election Cycle Heats Up",
      summary: "Polymarket crossed $2B in monthly trading volume for the first time, driven by 2026 midterm election markets and a surge in geopolitical event contracts. Open interest on the top 10 markets exceeds $800M. Kalshi also reported record volumes on its regulated platform.",
      why: "Prediction markets are becoming a legitimate price discovery mechanism for real-world events. The volume surge validates the thesis that these platforms aren\u2019t just crypto speculation \u2014 they\u2019re becoming essential infrastructure for information markets.",
      voices: [
        { handle: "@Polymarket", url: "https://x.com/Polymarket" },
        { handle: "@unusual_whales", url: "https://x.com/unusual_whales" }
      ],
      dataSources: [],
      tweets: [
        "Polymarket just hit $2B in monthly volume.\n\nNot a meme. Not a token pump. This is real price discovery for real-world events.\n\nPrediction markets are becoming the most honest information markets we have.",
        "Prediction market volume in March:\n\u2022 Polymarket: $2B+ monthly\n\u2022 Kalshi: record regulated volume\n\u2022 Open interest: $800M+ on top 10 markets\n\nThe 2026 midterms are doing for prediction markets what 2024 did for crypto ETFs."
      ]
    },
    {
      id: "t5",
      cycle: "2026-03-09T12:00:00Z",
      domain: "ai",
      sentiment: "bullish",
      title: "Anthropic Closes $5B Series E at $60B Valuation \u2014 Largest Private AI Round Ever",
      summary: "Anthropic has reportedly closed a $5B Series E round at a $60B valuation, making it the largest private fundraise in AI history. The round was led by Google, Lightspeed, and Spark Capital. The funding comes as Claude\u2019s enterprise adoption has tripled QoQ.",
      why: "This cements the AI infrastructure race as a two-horse contest between OpenAI and Anthropic at the frontier. For investors, it signals that private AI valuations are still climbing despite public market volatility \u2014 and that enterprise AI adoption is the driver, not consumer hype.",
      voices: [
        { handle: "@TheInformation", url: "https://x.com/TheInformation" },
        { handle: "@alexeheath", url: "https://x.com/alexeheath" }
      ],
      dataSources: [],
      tweets: [
        "Anthropic just closed a $5B round at $60B.\n\nLargest private AI raise ever. Claude enterprise adoption 3x QoQ.\n\nThe AI funding market isn\u2019t cooling off \u2014 it\u2019s concentrating at the frontier.",
        "The AI private market in one data point:\n\nAnthropic: $60B valuation. $5B raised. Enterprise revenue tripling.\n\nPublic markets are volatile, but the frontier AI companies are raising bigger rounds at higher valuations than ever."
      ]
    },
    {
      id: "t6",
      cycle: "2026-03-09T12:00:00Z",
      domain: "vc",
      sentiment: "neutral",
      title: "Sequoia Leads $200M Series C for AI Infra Startup Modular at $2.5B Valuation",
      summary: "Modular, the AI infrastructure company founded by ex-Apple and Google engineers, closed a $200M Series C led by Sequoia with participation from GV and General Catalyst. The company\u2019s Mojo programming language and MAX platform are gaining traction in enterprise AI deployment.",
      why: "This signals where top-tier VC capital is flowing in 2026: AI infrastructure and tooling, not consumer AI apps. The valuation reflects conviction that the AI stack is being rebuilt and the companies providing the picks-and-shovels will capture outsized value.",
      voices: [
        { handle: "@sequoia", url: "https://x.com/sequoia" },
        { handle: "@tecaborisenko", url: "https://x.com/tecaborisenko" }
      ],
      dataSources: [],
      tweets: [
        "Sequoia just led a $200M round for Modular at $2.5B.\n\nThe VC signal is clear: AI infrastructure > AI applications.\n\nThe real money is betting on the picks and shovels, not the gold rush.",
        "Where is top-tier VC capital going in 2026?\n\n\u2022 AI infrastructure (Modular: $2.5B)\n\u2022 AI tooling and deployment\n\u2022 NOT consumer AI apps\n\nSequoia, GV, General Catalyst \u2014 all converging on the same thesis."
      ]
    },
    {
      id: "t7",
      cycle: "2026-03-09T12:00:00Z",
      domain: "fintech",
      sentiment: "bullish",
      title: "Stripe Launches Embedded Stablecoin Rails for Platform Customers",
      summary: "Stripe announced embedded USDC payment rails for its platform customers, enabling instant cross-border settlements without traditional correspondent banking. Early partners include Shopify and Ramp. The product uses Circle\u2019s infrastructure and supports payouts in 30+ countries.",
      why: "This bridges TradFi and crypto infrastructure in a way that mainstream businesses can actually use. If Stripe\u2019s merchant base starts settling in stablecoins, it validates the thesis that crypto rails will underpin traditional finance \u2014 a core Artemis narrative.",
      voices: [
        { handle: "@FinancialTimes", url: "https://x.com/FinancialTimes" },
        { handle: "@a16z", url: "https://x.com/a16z" }
      ],
      dataSources: [],
      tweets: [
        "Stripe just launched embedded stablecoin rails.\n\nInstant cross-border settlements via USDC. Shopify and Ramp are early partners. 30+ countries.\n\nThe crypto payment thesis isn\u2019t theoretical anymore \u2014 it\u2019s in Stripe\u2019s API docs.",
        "Forget crypto payments for consumers.\n\nThe real play was always B2B settlement rails. Stripe + USDC = instant cross-border payouts without correspondent banks.\n\nThis is what \"crypto eating fintech\" actually looks like."
      ]
    }
  ];

  /* ========== STATE ========== */
  var state = {
    trends: [],
    allTrends: [],
    filter: "all",
    showHistory: false,
    theme: "dark"
  };

  /* ========== DOM REFS ========== */
  var mainEl = document.getElementById("main-content");
  var headerTitle = document.getElementById("header-title");
  var lastUpdatedEl = document.getElementById("last-updated");
  var historyToggle = document.getElementById("history-toggle");
  var themeToggle = document.querySelector("[data-theme-toggle]");
  var filterBtns = document.querySelectorAll(".filter-btn");

  /* ========== DATA LOADING ========== */
  function loadData() {
    fetch("./trends.json")
      .then(function (res) {
        if (!res.ok) { throw new Error("No data file"); }
        return res.json();
      })
      .then(function (data) {
        if (data && data.trends && data.trends.length > 0) {
          state.allTrends = data.trends;
          state.trends = getLatestCycle(data.trends);
          if (data.updated) {
            lastUpdatedEl.textContent = "Updated " + formatTimeAgo(new Date(data.updated));
          }
        } else {
          useSampleData();
        }
        updateCounts();
        render();
      })
      .catch(function () {
        useSampleData();
        updateCounts();
        render();
      });
  }

  function useSampleData() {
    state.allTrends = SAMPLE_TRENDS;
    state.trends = getLatestCycle(SAMPLE_TRENDS);
    lastUpdatedEl.textContent = "Sample data \u2014 awaiting first scan";
  }

  function getLatestCycle(trends) {
    if (!trends.length) { return []; }
    var sorted = trends.slice().sort(function (a, b) {
      return new Date(b.cycle) - new Date(a.cycle);
    });
    var latestCycle = sorted[0].cycle;
    return sorted.filter(function (t) { return t.cycle === latestCycle; });
  }

  function getFilteredTrends() {
    var source = state.showHistory ? state.allTrends : state.trends;
    if (state.filter === "all") { return source; }
    return source.filter(function (t) { return t.domain === state.filter; });
  }

  /* ========== RENDERING ========== */
  function render() {
    var filtered = getFilteredTrends();

    if (filtered.length === 0) {
      mainEl.innerHTML = renderEmpty();
      return;
    }

    if (state.showHistory) {
      mainEl.innerHTML = renderWithCycleDividers(filtered);
    } else {
      mainEl.innerHTML = '<div class="trend-grid">' +
        filtered.map(renderTrendCard).join("") +
        "</div>";
    }
  }

  function renderWithCycleDividers(trends) {
    var sorted = trends.slice().sort(function (a, b) {
      return new Date(b.cycle) - new Date(a.cycle);
    });

    var html = '<div class="trend-grid">';
    var lastCycle = null;

    sorted.forEach(function (trend) {
      if (trend.cycle !== lastCycle) {
        if (lastCycle !== null) {
          html += '<div class="cycle-divider"><div class="cycle-divider-line"></div>' +
            '<span class="cycle-divider-label">' + formatCycleTime(trend.cycle) + '</span>' +
            '<div class="cycle-divider-line"></div></div>';
        }
        lastCycle = trend.cycle;
      }
      html += renderTrendCard(trend);
    });

    html += "</div>";
    return html;
  }

  function renderTrendCard(trend) {
    var sentimentIcon = getSentimentIcon(trend.sentiment);
    var domainConf = DOMAINS[trend.domain] || { label: trend.domain, cssClass: trend.domain };

    var dataSourcesHtml = "";
    if (trend.dataSources && trend.dataSources.length > 0) {
      dataSourcesHtml = trend.dataSources.map(function (ds) {
        return '<span class="data-source-badge">' +
          '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' +
          escapeHtml(ds) + '</span>';
      }).join("");
    }

    return '<article class="trend-card" data-domain="' + trend.domain + '">' +
      '<div class="trend-card-header">' +
        '<div class="trend-card-meta">' +
          '<span class="trend-domain ' + domainConf.cssClass + '">' + domainConf.label + '</span>' +
          '<span class="sentiment-tag ' + trend.sentiment + '">' + sentimentIcon + capitalize(trend.sentiment) + '</span>' +
          dataSourcesHtml +
        '</div>' +
        '<span class="trend-time">' + formatTimeAgo(new Date(trend.cycle)) + '</span>' +
      '</div>' +
      '<div class="trend-card-body">' +
        '<h3 class="trend-title">' + escapeHtml(trend.title) + '</h3>' +
        '<p class="trend-summary">' + escapeHtml(trend.summary) + '</p>' +
        '<div class="trend-why"><strong>Why it matters:</strong> ' + escapeHtml(trend.why) + '</div>' +
        '<div class="trend-voices">' +
          trend.voices.map(function (v) {
            return '<a class="voice-link" href="' + v.url + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(v.handle) + '</a>';
          }).join("") +
        '</div>' +
      '</div>' +
      '<div class="tweet-section">' +
        '<div class="tweet-section-title">Tweet Drafts</div>' +
        trend.tweets.map(function (tweet, i) {
          var charCount = tweet.length;
          var overClass = charCount > 280 ? " over" : "";
          return '<div class="tweet-draft">' +
            '<div class="tweet-draft-label">' +
              '<span>' + (i === 0 ? "Primary" : "Alt") + '</span>' +
              '<button class="copy-btn" data-tweet="' + escapeAttr(tweet) + '" aria-label="Copy tweet">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>' +
                '<span>Copy</span>' +
              '</button>' +
            '</div>' +
            '<div class="tweet-text">' + escapeHtml(tweet) + '</div>' +
            '<div class="tweet-char-count' + overClass + '">' + charCount + '/280</div>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</article>';
  }

  function renderEmpty() {
    return '<div class="empty-state">' +
      '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
        '<path d="M8 22L12 14L17 18L24 8" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<circle cx="12" cy="12" r="10"/>' +
      '</svg>' +
      '<h3>No trends yet</h3>' +
      '<p>The monitor is scanning Twitter every 2 hours. Trends will appear here when noteworthy narratives are detected across DeFi, stablecoins, prediction markets, AI, VC, macro, or fintech.</p>' +
    '</div>';
  }

  /* ========== COUNTS ========== */
  function updateCounts() {
    var source = state.showHistory ? state.allTrends : state.trends;
    document.getElementById("count-all").textContent = source.length;

    Object.keys(DOMAINS).forEach(function (d) {
      var count = source.filter(function (t) { return t.domain === d; }).length;
      var el = document.getElementById("count-" + d);
      if (el) { el.textContent = count; }
    });
  }

  /* ========== EVENT HANDLERS ========== */
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      state.filter = btn.getAttribute("data-filter");
      var domainConf = DOMAINS[state.filter];
      var label = state.filter === "all" ? "" : (domainConf ? domainConf.label : capitalize(state.filter));
      headerTitle.textContent = state.filter === "all" ?
        (state.showHistory ? "Trend History" : "Latest Trends") :
        label + (state.showHistory ? " History" : " Trends");
      render();
    });
  });

  historyToggle.addEventListener("click", function () {
    state.showHistory = !state.showHistory;
    historyToggle.classList.toggle("active", state.showHistory);
    var domainConf = DOMAINS[state.filter];
    var label = state.filter === "all" ? "" : (domainConf ? domainConf.label + " " : "");
    headerTitle.textContent = state.showHistory ?
      (label + "History").trim() || "Trend History" :
      (label + "Trends").trim() || "Latest Trends";
    if (state.filter === "all") {
      headerTitle.textContent = state.showHistory ? "Trend History" : "Latest Trends";
    }
    updateCounts();
    render();
  });

  mainEl.addEventListener("click", function (e) {
    var copyBtn = e.target.closest(".copy-btn");
    if (!copyBtn) { return; }

    var tweet = copyBtn.getAttribute("data-tweet");
    navigator.clipboard.writeText(tweet).then(function () {
      copyBtn.classList.add("copied");
      copyBtn.querySelector("span").textContent = "Copied";
      setTimeout(function () {
        copyBtn.classList.remove("copied");
        copyBtn.querySelector("span").textContent = "Copy";
      }, 2000);
    }).catch(function () {
      var textEl = copyBtn.closest(".tweet-draft").querySelector(".tweet-text");
      if (textEl) {
        var range = document.createRange();
        range.selectNodeContents(textEl);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    });
  });

  /* Theme toggle */
  (function () {
    var root = document.documentElement;
    var currentTheme = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    root.setAttribute("data-theme", currentTheme);
    state.theme = currentTheme;

    if (themeToggle) {
      updateThemeIcon(currentTheme);
      themeToggle.addEventListener("click", function () {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", currentTheme);
        state.theme = currentTheme;
        updateThemeIcon(currentTheme);
        themeToggle.setAttribute("aria-label",
          "Switch to " + (currentTheme === "dark" ? "light" : "dark") + " mode");
      });
    }
  })();

  function updateThemeIcon(theme) {
    if (!themeToggle) { return; }
    themeToggle.innerHTML = theme === "dark" ?
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>' :
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  /* ========== UTILITIES ========== */
  function formatTimeAgo(date) {
    var now = new Date();
    var diff = Math.floor((now - date) / 1000);
    if (diff < 60) { return "just now"; }
    if (diff < 3600) { return Math.floor(diff / 60) + "m ago"; }
    if (diff < 86400) { return Math.floor(diff / 3600) + "h ago"; }
    return Math.floor(diff / 86400) + "d ago";
  }

  function formatCycleTime(isoStr) {
    var d = new Date(isoStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" }) +
      " at " + d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  }

  function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;")
              .replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function getSentimentIcon(sentiment) {
    var s = { bullish: "M12 19V5M5 12l7-7 7 7", bearish: "M12 5v14M5 12l7 7 7-7", contested: "M8 3v18M16 3v18" };
    var d = s[sentiment] || "M5 12h14";
    return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:-1px;margin-right:2px"><path d="' + d + '"/></svg>';
  }

  /* ========== ARTEMIS DATA MODULE ========== */
  var ARTEMIS_API = "/api/artemis";
  var artemisState = { available: false, metrics: null, loading: true, error: null };

  /* Helper: format large numbers ($1.2B, $450M, etc.) */
  function formatLargeNumber(num) {
    if (num == null || isNaN(num)) { return "—"; }
    var abs = Math.abs(num);
    if (abs >= 1e12) { return "$" + (num / 1e12).toFixed(2) + "T"; }
    if (abs >= 1e9) { return "$" + (num / 1e9).toFixed(2) + "B"; }
    if (abs >= 1e6) { return "$" + (num / 1e6).toFixed(1) + "M"; }
    if (abs >= 1e3) { return "$" + (num / 1e3).toFixed(0) + "K"; }
    return "$" + num.toFixed(0);
  }

  function formatCount(num) {
    if (num == null || isNaN(num)) { return "—"; }
    var abs = Math.abs(num);
    if (abs >= 1e9) { return (num / 1e9).toFixed(2) + "B"; }
    if (abs >= 1e6) { return (num / 1e6).toFixed(1) + "M"; }
    if (abs >= 1e3) { return (num / 1e3).toFixed(0) + "K"; }
    return num.toFixed(0);
  }

  function formatPct(num) {
    if (num == null || isNaN(num)) { return "—"; }
    var sign = num >= 0 ? "+" : "";
    return sign + num.toFixed(2) + "%";
  }

  /* Calculate % change between last two values in a time series object */
  function calcDelta(seriesObj) {
    if (!seriesObj) { return null; }
    var keys = Object.keys(seriesObj).sort();
    if (keys.length < 2) { return null; }
    var latest = seriesObj[keys[keys.length - 1]];
    var prev   = seriesObj[keys[keys.length - 2]];
    if (!prev || prev === 0) { return null; }
    return ((latest - prev) / Math.abs(prev)) * 100;
  }

  /* Get the latest value from a time series object */
  function latestValue(seriesObj) {
    if (!seriesObj) { return null; }
    var keys = Object.keys(seriesObj).sort();
    if (!keys.length) { return null; }
    return seriesObj[keys[keys.length - 1]];
  }

  /* Get recent N values for sparkline */
  function recentValues(seriesObj, n) {
    if (!seriesObj) { return []; }
    var keys = Object.keys(seriesObj).sort();
    return keys.slice(-n).map(function (k) { return seriesObj[k]; });
  }

  /* Build SVG sparkline from an array of numbers */
  function buildSparkline(values) {
    if (!values || values.length < 2) { return ""; }
    var w = 200, h = 32;
    var min = Math.min.apply(null, values);
    var max = Math.max.apply(null, values);
    var range = max - min || 1;
    var step = w / (values.length - 1);
    var points = values.map(function (v, i) {
      var x = (i * step).toFixed(1);
      var y = (h - ((v - min) / range) * (h - 4) - 2).toFixed(1);
      return x + "," + y;
    }).join(" ");
    var areaPoints = points + " " + w.toFixed(1) + "," + h + " 0," + h;
    return '<svg class="artemis-sparkline" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none">' +
      '<polygon class="spark-area" points="' + areaPoints + '"/>' +
      '<polyline points="' + points + '"/></svg>';
  }

  /* Delta arrow icon */
  function deltaIcon(delta) {
    if (delta > 0) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    } else if (delta < 0) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>';
    }
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/></svg>';
  }

  function deltaClass(delta) {
    if (delta > 0.01) { return "positive"; }
    if (delta < -0.01) { return "negative"; }
    return "flat";
  }

  /* Artemis badge mini */
  var artemisBadgeHtml = '<span class="artemis-badge">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' +
    'Artemis</span>';

  /* Date helpers for API */
  function toDateStr(d) {
    return d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0");
  }

  function daysAgo(n) {
    var d = new Date();
    d.setDate(d.getDate() - n);
    return toDateStr(d);
  }

  /* Probe if Artemis API is available */
  function probeArtemis() {
    return fetch(ARTEMIS_API + "?endpoint=asset_symbols", { method: "GET" })
      .then(function (res) { return res.ok; })
      .catch(function () { return false; });
  }

  /* Fetch a single Artemis endpoint */
  function fetchArtemis(endpoint, params) {
    var qs = "endpoint=" + encodeURIComponent(endpoint);
    Object.keys(params || {}).forEach(function (k) {
      if (params[k]) { qs += "&" + k + "=" + encodeURIComponent(params[k]); }
    });
    return fetch(ARTEMIS_API + "?" + qs)
      .then(function (res) {
        if (!res.ok) { throw new Error("Artemis " + res.status); }
        return res.json();
      });
  }

  /* Load all Artemis metrics */
  function loadArtemisMetrics() {
    artemisState.loading = true;
    artemisState.error = null;
    renderArtemisBar();

    probeArtemis().then(function (ok) {
      if (!ok) {
        artemisState.available = false;
        artemisState.loading = false;
        renderArtemisBar();
        return;
      }
      artemisState.available = true;

      var start = daysAgo(30);
      var end = daysAgo(0);

      Promise.all([
        /* Stablecoin total supply (aggregate across major chains) */
        fetchArtemis("STABLECOIN_SUPPLY", {
          symbols: "ethereum,tron,solana,arbitrum,base,polygon,avalanche,optimism",
          startDate: start, endDate: end, granularity: "DAY"
        }).catch(function () { return null; }),

        /* Stablecoin DAU */
        fetchArtemis("STABLECOIN_DAU", {
          symbols: "ethereum,tron,solana,arbitrum,base",
          startDate: start, endDate: end, granularity: "DAY"
        }).catch(function () { return null; }),

        /* DeFi TVL via metrics endpoint (top chains) */
        fetchArtemis("METRICS_BY_SYMBOL", {
          symbols: "ethereum,solana,arbitrum,avalanche,base",
          metrics: "tvl",
          startDate: start, endDate: end, granularity: "DAY"
        }).catch(function () { return null; }),

        /* Chain flows (top netflows) */
        fetchArtemis("flows_top", {
          sourceChains: "ethereum",
          breakdown: "chains",
          flowType: "netflow",
          startDate: daysAgo(7), endDate: end,
          limit: "10"
        }).catch(function () { return null; })
      ]).then(function (results) {
        artemisState.metrics = processArtemisResults(results);
        artemisState.loading = false;
        renderArtemisBar();
      }).catch(function (err) {
        artemisState.error = err.message || "Failed to load";
        artemisState.loading = false;
        renderArtemisBar();
      });
    });
  }

  /* Process raw API results into display-ready metrics */
  function processArtemisResults(results) {
    var supply = results[0];
    var dau    = results[1];
    var tvl    = results[2];
    var flows  = results[3];

    var metrics = {};

    /* Aggregate stablecoin supply across all chains */
    if (supply && supply.data) {
      var aggregated = aggregateSeries(supply.data);
      metrics.stablecoinSupply = {
        value: latestValue(aggregated),
        delta: calcDelta(aggregated),
        sparkline: recentValues(aggregated, 30)
      };
    }

    /* Aggregate stablecoin DAU */
    if (dau && dau.data) {
      var aggDau = aggregateSeries(dau.data);
      metrics.stablecoinDAU = {
        value: latestValue(aggDau),
        delta: calcDelta(aggDau),
        sparkline: recentValues(aggDau, 30)
      };
    }

    /* Aggregate DeFi TVL */
    if (tvl && tvl.data) {
      var aggTvl = aggregateSeries(tvl.data);
      metrics.defiTVL = {
        value: latestValue(aggTvl),
        delta: calcDelta(aggTvl),
        sparkline: recentValues(aggTvl, 30)
      };
    }

    /* Chain flows — just store the raw result */
    if (flows) {
      metrics.flows = flows;
    }

    return metrics;
  }

  /* Sum multiple chain time series into one aggregate */
  function aggregateSeries(dataObj) {
    var agg = {};
    Object.keys(dataObj).forEach(function (chain) {
      var series = dataObj[chain];
      if (!series || typeof series !== "object") { return; }
      Object.keys(series).forEach(function (date) {
        var val = parseFloat(series[date]);
        if (!isNaN(val)) {
          agg[date] = (agg[date] || 0) + val;
        }
      });
    });
    return agg;
  }

  /* Render the Artemis metrics bar at top of main content */
  function renderArtemisBar() {
    var container = document.getElementById("artemis-metrics");
    if (!container) {
      container = document.createElement("div");
      container.id = "artemis-metrics";
      mainEl.parentNode.insertBefore(container, mainEl);
      container.style.padding = "var(--space-6) var(--space-6) 0";
      container.style.gridColumn = "2";
    }

    /* Not available (local/no Vercel) — hide silently */
    if (!artemisState.available && !artemisState.loading) {
      container.innerHTML = "";
      return;
    }

    /* Loading state */
    if (artemisState.loading) {
      container.innerHTML = '<div class="artemis-bar-loading">' +
        [1, 2, 3, 4].map(function () {
          return '<div class="artemis-card-skeleton">' +
            '<div class="skeleton"></div>' +
            '<div class="skeleton"></div>' +
            '<div class="skeleton"></div>' +
          '</div>';
        }).join("") +
      '</div>';
      return;
    }

    /* Error state */
    if (artemisState.error) {
      container.innerHTML = '<div class="artemis-error">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>' +
        '<span>Artemis data unavailable — showing trend data only</span></div>';
      return;
    }

    var m = artemisState.metrics;
    if (!m) { container.innerHTML = ""; return; }

    var cards = [];

    /* Stablecoin Supply */
    if (m.stablecoinSupply) {
      cards.push(renderArtemisMetricCard(
        "Stablecoin Supply",
        formatLargeNumber(m.stablecoinSupply.value),
        m.stablecoinSupply.delta,
        m.stablecoinSupply.sparkline,
        "Aggregate across major chains"
      ));
    }

    /* Stablecoin DAU */
    if (m.stablecoinDAU) {
      cards.push(renderArtemisMetricCard(
        "Stablecoin DAU",
        formatCount(m.stablecoinDAU.value),
        m.stablecoinDAU.delta,
        m.stablecoinDAU.sparkline,
        "Daily active users"
      ));
    }

    /* DeFi TVL */
    if (m.defiTVL) {
      cards.push(renderArtemisMetricCard(
        "DeFi TVL",
        formatLargeNumber(m.defiTVL.value),
        m.defiTVL.delta,
        m.defiTVL.sparkline,
        "Total value locked"
      ));
    }

    if (cards.length === 0) {
      container.innerHTML = "";
      return;
    }

    container.innerHTML = '<div class="artemis-bar">' + cards.join("") + '</div>';
  }

  function renderArtemisMetricCard(label, value, delta, sparkData, sub) {
    var deltaHtml = "";
    if (delta != null) {
      var cls = deltaClass(delta);
      deltaHtml = '<span class="artemis-card-delta ' + cls + '">' +
        deltaIcon(delta) + formatPct(delta) + ' 24h</span>';
    }
    return '<div class="artemis-card">' +
      '<div class="artemis-card-header">' +
        '<span class="artemis-card-label">' + label + '</span>' +
        artemisBadgeHtml +
      '</div>' +
      '<div class="artemis-card-value">' + value + '</div>' +
      deltaHtml +
      (sub ? '<div class="artemis-card-sub">' + sub + '</div>' : '') +
      buildSparkline(sparkData) +
    '</div>';
  }

  /* Auto-refresh every 5 min */
  setInterval(function () { loadData(); }, 5 * 60 * 1000);

  /* Refresh Artemis data every 10 min */
  setInterval(function () {
    if (artemisState.available) { loadArtemisMetrics(); }
  }, 10 * 60 * 1000);

  /* ========== INIT ========== */
  loadData();
  loadArtemisMetrics();

})();
