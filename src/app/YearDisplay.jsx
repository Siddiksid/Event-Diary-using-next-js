import React from "react";
import { data } from "./lib/data";
function YearDisplay({ year, setYear, currentYear, setCurrentYear }) {
  function handlePrevyear(e) {
    setYear(year - 1);
    // setCurrentYear(data.find((item) => item.year == year));
  }
  function handleNextYear(e) {
    setYear(year + 1);
    // setCurrentYear(data.find((item) => item.year == year));
  }
  return (
    <div className="year-display">
      <button onClick={handlePrevyear} disabled={year === 1923}>
        &lt;
      </button>
      <p style={{ width: "150px", textAlign: "center" }}>{year}</p>
      <button onClick={handleNextYear} disabled={year === 2123}>
        &gt;
      </button>
    </div>
  );
}

export default YearDisplay;
