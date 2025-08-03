import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  const handleSubmit = () => {
    const value = parseFloat(rupees);
    if (!isNaN(value)) {
      const converted = (value / 90).toFixed(2); // Example rate
      setEuros(converted);
    }
  };

  return (
    <div>
      <h3>Currency Convertor</h3>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in INR"
      />
      <button onClick={handleSubmit}>Convert</button>
      {euros !== null && (
        <p>{rupees} INR = {euros} EUR</p>
      )}
    </div>
  );
};

export default CurrencyConvertor;
