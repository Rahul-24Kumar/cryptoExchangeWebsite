import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Coins from "./components/Coins";
import Coin from "./route/Coin";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
 //const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
 
 const url = "https://api.binance.com/api/v3/ticker/24hr";
 
 const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function data() {
      try {
        await axios.get(url).then((response) => {
          setCoins(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    }
    data();
  }, []);

  async function dataInMongo() {
    try {
      let resp2 = await axios({
        method: "post",
        url: "http://localhost:5000/apiData",
        data: coins,
      });
      console.log(resp2);
    } catch (error) {
      console.log(error);
    }
  }

dataInMongo();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
