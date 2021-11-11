import React, { useState, useEffect } from "react";

import CurrencyList from "../components/CurrencyList";

const CurrencyExchange = () => {
  const [currencyOptions, setcurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1000);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  // exchange calculation
  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount / exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount * exchangeRate;
  }

  // initialize currency options, and the exchange rate
  useEffect(() => {
    fetch("https://apis.is/currency/m5")
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = data.results[0];
        setcurrencyOptions(data.results);
        setToCurrency(firstCurrency);
        setExchangeRate(firstCurrency.value);
      });
  }, []);

  // When changing selected currency, update the exchange rate
  useEffect(() => {
    fetch("https://apis.is/currency/m5")
      .then((res) => res.json())
      .then((data) => {
        data = data.results;
        const selCur = data.find((e) => e.shortName === toCurrency);
        if (selCur != null) {
          setExchangeRate(selCur.value);
        }
      });
  }, [fromCurrency, toCurrency]);

  const handleFormAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };
  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    <>
      <CurrencyList
        amount={fromAmount}
        onChangeAmount={handleFormAmountChange}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
      />
      <h3 className="equals">=</h3>
      <CurrencyList
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handleToAmountChange}
      />
    </>
  );
};

export default CurrencyExchange;
