"use client";
import { useEffect, useState } from "react";
import MonthDisplay from "./MonthDisplay";
import { months } from "./lib/data";
import { days } from "./lib/data";
import YearDisplay from "./YearDisplay";
import { data } from "./lib/data";
import { appendnewObject } from "./lib/data";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import { checkYear } from "./lib/data";
import { isLeapYear } from "./lib/data";
export default function Home() {
  const [monthCounter, setMonthCounter] = useState(0);
  const monthArray = months;
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(months[monthCounter]);
  const [selectedDay, setSelectedDay] = useState("");
  const [text, setText] = useState("");
  const [textId, setTextId] = useState("textAble");
  const [divId, setDivId] = useState("divDisable");
  const [spanId, setSpanId] = useState("none");
  const [showText, setShowText] = useState("");
  const [isUpdated, setIsUpdated] = useState("false");

  if (checkYear(year) === true) {
    appendnewObject(year);
  }
  if (isLeapYear(year)) {
    days[1] = 29;
  }

  const currentYear = data.find((item) => item.year == year);

  const currentMonth = currentYear.monthData[monthCounter];

  const dayBox = currentMonth[months[monthCounter]];
  function handleClick(e, index) {
    setShowText("");
    setSelectedDay(index);
    console.log(selectedDay);

    if (dayBox[index] === "") {
      setText("");
      setTextId("textAble");
      setDivId("divDisable");
    } else if (dayBox[index] !== "") {
      setTextId("textDisable");
      setDivId("divAble");
      setSpanId("visible");
      setShowText(dayBox[index]);
    }
  }
  function handleChange(e) {
    e.preventDefault();
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dayBox[selectedDay] = text;

    console.log(dayBox[selectedDay].length);
    if (dayBox[selectedDay]?.length > 0) {
      setText("");
      setTextId("textDisable");
      setDivId("divAble");
      setSpanId("visible");
      setIsUpdated("true");
      setShowText(dayBox[selectedDay]);
    }
  }
  function handleEdit() {
    setTextId("textAble");
    setDivId("divDisable");
    setIsUpdated("false");
  }
  useEffect(() => {
    setTextId("textAble");
    setDivId("divDisable");
  }, [month, year, monthCounter, dayBox]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Diary</h1>
      <MonthDisplay
        monthCounter={monthCounter}
        setMonthCounter={setMonthCounter}
        months={monthArray}
        month={month}
        setmonth={setMonth}
      />
      <YearDisplay year={year} setYear={setYear} />
      <div className="parent">
        {dayBox.map((item, index) => {
          return (
            <div
              id={selectedDay === index ? "blue" : ""}
              style={{
                backgroundColor: dayBox[index] !== "" ? "cyan" : "",
              }}
              className="box"
              key={index}
              onClick={(e) => handleClick(e, index)}
            >
              {index + 1}{" "}
              <span
                style={{
                  visibility: dayBox[index] !== "" ? "visible" : "hidden",
                }}
                className="envelope"
              >
                📩
              </span>
            </div>
          );
        })}
      </div>
      <div className="text-display">
        <form action="">
          <textarea
            onChange={handleChange}
            id={textId}
            cols="30"
            rows="10"
            style={{
              width: "90%",
              marginInline: "50px",
              marginTop: "20px",
              fontSize: "20px",
            }}
          ></textarea>
          <div id={divId} className="text-final">
            {showText}
          </div>
          <input id="btn" type="submit" value="Submit" onClick={handleSubmit} />
          <button className="edit-btn" type="button" onClick={handleEdit}>
            Edit
          </button>
          <button
            className="del-btn"
            type="button"
            onClick={(e) => (
              (dayBox[selectedDay] = ""),
              setIsUpdated(false),
              setTextId("textAble"),
              setDivId("divDisable")
            )}
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
