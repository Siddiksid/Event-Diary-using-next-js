import React from "react";

function MonthDisplay({ monthCounter, setMonthCounter, months }) {
  return (
    <div className="month-display">
      <button
        onClick={() => setMonthCounter(monthCounter - 1)}
        disabled={monthCounter === 0}
      >
        &lt;
      </button>
      <p style={{ width: "150px", textAlign: "center" }}>
        {months[monthCounter]}
      </p>
      <button
        onClick={() => setMonthCounter(monthCounter + 1)}
        disabled={monthCounter === 11}
      >
        &gt;
      </button>
    </div>
  );
}

export default MonthDisplay;
