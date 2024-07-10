"use client";
import React, { useState } from "react";
function CounterInput({ name, min, max }) {
  const [value, setValue] = useState(1);
  const [isMinusDisabled, setIsMinusDisabled] = useState(false);
  const [isPlusDisabled, setIsPlusDisabled] = useState(false);

  const handleClick = (type) => {
    if (type === "minus" && value > min) {
      setValue(value - 1);
    } else if (type === "plus" && value < max) {
      setValue(value + 1);
    }
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
    } else {
      alert("Value out of range");
    }
  };

  const handleKeyDown = (e) => {
    const allowedKeys = [46, 8, 9, 27, 13, 190];
    const numberKeys = [...Array(10).keys()]
      .map((i) => i + 48)
      .concat([...Array(10).keys()].map((i) => i + 96));
    if (
      allowedKeys.includes(e.keyCode) ||
      (e.keyCode === 65 && e.ctrlKey === true) ||
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      return;
    }
    if (!numberKeys.includes(e.keyCode) || (e.shiftKey && e.keyCode < 96)) {
      e.preventDefault();
    }
  };

  React.useEffect(() => {
    setIsMinusDisabled(value <= min);
    setIsPlusDisabled(value >= max);
  }, [value, min, max]);

  return (
    <div>
      <button
        type="button"
        className="btn-number btnLeft"
        data-type="minus"
        data-field={name}
        onClick={() => handleClick("minus")}
        disabled={isMinusDisabled}
      >
        <svg
          width="18"
          height="2"
          viewBox="0 0 18 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 1H1"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <input
        type="number"
        name={name}
        className="input-number"
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="btn-number btnRight"
        data-type="plus"
        data-field={name}
        onClick={() => handleClick("plus")}
        disabled={isPlusDisabled}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 17V9M9 9V1M9 9H17M9 9H1"
            stroke="#000"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default CounterInput;
