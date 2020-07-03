import React, { useState } from 'react';
import { render } from 'react-dom';
import moment from "moment"
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css'
import {dateStyle, birthdayStyle, cellStyle, modifiers, modifiersStyles} from "./calendarStyles"
import { birthdays} from "./birthdays"
import './style.css';

function renderDay(day) {
  const date = moment(new Date(day)).format("MM-DD-YYYY")
  return (
    <div style={cellStyle}>
      <div style={dateStyle}>{new Date(date).getDate()}</div>
      {birthdays[date] &&
        birthdays[date].map((name, i) => (
          <div key={i} style={birthdayStyle}>
            🎁 {name}
          </div>
        ))}
    </div>
  );
}



const App = () => {
  const [selectedDate, setSelectedDate] = useState(moment(new Date).format("LL"))

  const handleDayClick = (day) => {
    setSelectedDate(moment(day).format("LL"))
  }
  return (
    <div className="container">
      <div className="header">
        <h1>React Day picker</h1>
        <p>
        Selected Date: {selectedDate && selectedDate}
        </p>
      </div>

      <DayPicker
        onDayClick={handleDayClick}
        className="daypicker"
        renderDay={renderDay}
        todayButton="Go to Today"
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
      />
    </div>
  )
}

render(<App />, document.getElementById('root'));
