const express = require("express");
const cors = require("cors");
const path = require("path");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8787;
const MONTHLY_LIMIT = 15;

const apiKeys = {};
const usage = {};

function createApiKey() {
  const key = "wl_" + crypto.randomBytes(16).toString("hex");
  apiKeys[key] = true;
  usage[key] = { count: 0 };
  return key;
}

const DEFAULT_KEY = createApiKey();

console.log("====================================");
console.log("Wallet Lite API Server + Attack Lab");
console.log("====================================");
console.log("API KEY:", DEFAULT_KEY);
console.log("====================================");

function checkUsage(req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || !apiKeys[apiKey]) {
    return res.status(401).json({
      ok: false,
      error: "INVALID_OR_MISSING_API_KEY",
      message: "A valid x-api-key header is required."
    });
  }

  if (!usage[apiKey]) {
    usage[apiKey] = { count: 0 };
  }

  if (usage[apiKey].count >= MONTHLY_LIMIT) {
    return res.status(429).json({
      ok: false,
      error: "RATE_LIMIT_EXCEEDED",
      message: "Free tier limit reached (15 requests/month)"
    });
  }

  usage[apiKey].count += 1;
  next();
}

function normalize(v) {
  return String(v || "").toLowerCase();
}

function looksLikePoisoningAddress(from, to) {
  const a = normalize(from);
  const b = normalize(to);
  if (!a || !b || a === b) return false;
  return a.slice(0, 10) === b.slice(0, 10) && a.slice(-8) !== b.slice(-8);
}

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "wallet-lite-api",
    port: PORT
  });
});

app.get("/v1/dev/key", (req, res) => {
  res.json({
    ok: true,
    apiKey: DEFAULT_KEY,
    monthlyLimit: MONTHLY_LIMIT
  });
});

app.get("/v1/dev/usage", (req, res) => {
  res.json({
    ok: true,
    usage
  });
});

app.post("/v1/preview", checkUsage, (req, res) => {
  const {
    chainFamily,
    network,
    from,
    to,
    value,
    data,
    instructions
  } = req.body || {};

  if (!chainFamily || !to) {
    return res.status(400).json({
      ok: false,
      error: "MISSING_REQUIRED_FIELDS",
      required: ["chainFamily", "to"]
    });
  }

  let decision = "ALLOW";
  let riskLevel = "LOW";
  let reasonCode = "SAFE";
  let message = "Wallet Lite evaluation complete";

  // Base rules
  if (value && String(value) !== "0") {
    decision = "WARN";
    riskLevel = "MEDIUM";
    reasonCode = "VALUE_TRANSFER";
    message = "Value transfer detected";
  }

  if (typeof data === "string" && data.length > 10) {
    decision = "WARN";
    riskLevel = "HIGH";
    reasonCode = "CONTRACT_INTERACTION";
    message = "Contract interaction detected";
  }

  if (Array.isArray(instructions) && instructions.length > 1) {
    decision = "WARN";
    riskLevel = "HIGH";
    reasonCode = "MULTI_INSTRUCTION_BUNDLE";
    message = "Multi-instruction transaction detected";
  }

  if (from && to && normalize(from) === normalize(to)) {
    decision = "ALLOW";
    riskLevel = "LOW";
    reasonCode = "SELF_TRANSFER";
    message = "Self-transfer detected";
  }

  // Attack lab rules
  if (
    chainFamily === "evm" &&
    typeof data === "string" &&
    data.startsWith("0x095ea7b3")
  ) {
    decision = "WARN";
    riskLevel = "HIGH";
    reasonCode = "TOKEN_APPROVAL";
    message = "Token approval detected";
  }

  if (looksLikePoisoningAddress(from, to)) {
    decision = "WARN";
    riskLevel = "HIGH";
    reasonCode = "ADDRESS_POISONING_SUSPECTED";
    message = "Look-alike destination address detected";
  }

  if (Array.isArray(instructions)) {
    const rendered = JSON.stringify(instructions).toLowerCase();
    if (
      rendered.includes("transfer_all") ||
      rendered.includes("close_account")
    ) {
      decision = "BLOCK";
      riskLevel = "HIGH";
      reasonCode = "DRAIN_BUNDLE_DETECTED";
      message = "Drain-style multi-step bundle detected";
    }
  }

  res.json({
    ok: true,
    version: "wallet-lite-api.v1",
    chainFamily,
    network: network || null,
    decision,
    riskLevel,
    reasonCode,
    message,
    receipt: {
      id: uuidv4(),
      timestamp: new Date().toISOString()
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});