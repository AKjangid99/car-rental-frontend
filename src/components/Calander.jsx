import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const RangeCalendar = () => {
  const [range, setRange] = useState();

  const disabledDays = [{ before: new Date() }, new Date(2026, 3, 28)];

  return (
    <>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>Select Range</h2>
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          disabled={disabledDays}
          numberOfMonths={1}
        />

        <div style={{ marginTop: "10px" }}>
          {range?.from ? (
            <p>
              {format(range.from, "PPP")}
              {range.to
                ? ` to ${format(range.to, "PPP")}`
                : " (select end date)"}
            </p>
          ) : (
            <p>Please pick the first day.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RangeCalendar;
