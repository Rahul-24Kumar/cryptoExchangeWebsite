const express = require("express");
const router = express.Router();

const coinGecko = require("../controllers/coinGecko");
const binance = require("../controllers/binance");

router.put("/binanceApi", binance.binanceApi);

router.post("/apiData", binance.binanceData);
router.post("/coin", coinGecko.coinGeckoApi);

module.exports = router;
