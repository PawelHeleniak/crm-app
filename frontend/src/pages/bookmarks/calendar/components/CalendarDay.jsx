import React from "react";
import PropTypes from "prop-types";

export function CalendarDay({ day }) {
  const date = new Date();

  return (
    <div
      className={date.getDate() !== day ? "calendar-day" : "calendar-day today"}
    >
      {" "}
      <span>{day <= 0 ? "" : day}</span>
    </div>
  );
}

CalendarDay.propTypes = {
  day: PropTypes.number.isRequired,
};
