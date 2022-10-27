const coinGecko = require("../models/coinGecko");

let coinGeckoApi = async function (req, res) {
  try {
    let result = await coinGecko.create(req.body);
    let body = [];

    console.log(body.push(result));
    return res.status(201).send({ msg: "successful", body });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { coinGeckoApi };
