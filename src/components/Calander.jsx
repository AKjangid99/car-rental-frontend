import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

// Controlled range calendar. The selected range is owned by the parent so the
// booking summary can react to the dates the user picks.
const RangeCalendar = ({ range, onChange }) => {
  const disabledDays = [{ before: new Date() }];

  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">
        Select your rental dates
      </p>
      <div className="bg-white rounded-2xl border border-slate-200 p-2 flex justify-center">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={onChange}
          disabled={disabledDays}
          numberOfMonths={1}
        />
      </div>
    </div>
  );
};

export default RangeCalendar;
