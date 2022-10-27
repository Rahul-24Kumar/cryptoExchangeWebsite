const binance = require("../models/binance");

let binanceData = async function (req, res) {
    try {
        let result = await binance.create(req.body);
        let body = [];

        console.log(body.push(result));
        return res.status(201).send({ msg: "successful", body });
    } catch (error) {
        console.log(error);
    }
};


let binanceApi = async (req, res) => {
    try {
        let apiData = req.body;
        let resultApi = await binance.updateMany({}, apiData);
        console.log(resultApi);
        let body = [];

        console.log(body.push(resultApi));

        return res.status(200).send({ msg: "successful", body });
    } catch (error) {
        return res.send(msg.error);
    }
};

module.exports = {
    binanceApi,
    binanceData
};









/* let binanceApi = async (req, res) => {
    try {
        let apiBody = req.body;
        const { apiData } = await axios({
            method: "put",
            url: "https://api.binance.com/api/v3/ticker/24hr",
            data: {
                result: binance.updateMany(apiBody),
            },
        });

        console.log(apiData);
        return res.status(200).send({ msg: "successful", apiData });

    } catch (err) {
        if (err.response.status === 404) {
            console.log("Resource could not be found!");
        } else {
            console.log(err.message);
        }
    }
}; */
