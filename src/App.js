import React, { useState, useEffect } from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import CurrencyExchange from "./routes/CurrencyExchange";
import QrCodeMaker from "./routes/QrCodeMaker";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/currencyexchange" element={<CurrencyExchange />} />
            <Route path="/qrmaker" element={<QrCodeMaker />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
