import React, { useState, useEffect } from "react";
import { Nav } from "../../../components/Nav";
import { CalendarDay } from "./components/CalendarDay";

export function Calendar() {
  const [date, setDate] = useState({
    allDay: [],
    month: "",
    year: "",
  });

  //saving number of days in a month
  useEffect(() => {
    handleDate(null);
  }, []);

  const handleDate = (count) => {
    let month;
    let year;

    if (count === null) {
      month = new Date().getMonth();
      year = new Date().getFullYear();
    } else if (count > -1 && count < 12) {
      month = count;
      year = date.year;
    } else if (count === 12) {
      year = date.year + 1;
      month = 0;
    } else if (count === -1) {
      year = date.year - 1;
      month = 11;
    }

    //get first day in month
    const firstDateDay = new Date(year, month, 0);
    let firstDay = firstDateDay.getDay();
    let difference = firstDay * -1;

    //handle number of day and push to state
    let numberDays = new Date(year, month + 1, 0).getDate();
    let result = [];

    for (let i = difference; i < numberDays; i++) {
      result.push(i + 1);
    }

    setDate({ allDay: result, month: month, year: year });
  };

  const handleDay = date.allDay.map((e) => <CalendarDay day={e} />);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className="section-container ">
          <section>
            <div className="card-wrapper">
              <h1>{`${date.year}-${date.month + 1}`}</h1>
              <div className="calendar">
                <div className="arrow-icon left">
                  <a
                    className="material-icons"
                    onClick={() => handleDate(date.month - 1)}
                  >
                    back
                  </a>
                </div>
                <div className="module-section">
                  <div className="days-week-wrapper">
                    <div className="day-week">
                      <span>Mon</span>
                    </div>
                    <div className="day-week">
                      <span>Tue</span>
                    </div>
                    <div className="day-week">
                      <span>Wed</span>
                    </div>
                    <div className="day-week">
                      <span>Thu</span>
                    </div>
                    <div className="day-week">
                      <span>Fri</span>
                    </div>
                    <div className="day-week">
                      <span>Sat</span>
                    </div>
                    <div className="day-week">
                      <span>Sun</span>
                    </div>
                  </div>
                  <div
                    className={
                      new Date().getMonth() !== date.month ||
                      new Date().getFullYear() !== date.year
                        ? "days-wrapper"
                        : "days-wrapper active"
                    }
                  >
                    {handleDay}
                  </div>
                </div>
                <div className="arrow-icon right">
                  <a
                    className="material-icons"
                    onClick={() => handleDate(date.month + 1)}
                  >
                    for
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
