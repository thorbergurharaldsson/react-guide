import React from "react";

const CurrencyList = (props) => {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions ? (
          currencyOptions.map((item) => (
            <option key={item.shortName} value={item.shortName}>
              {item.shortName}
            </option>
          ))
        ) : (
          <option value="ISK">ISK</option>
        )}
      </select>
    </div>
  );
};

export default CurrencyList;
