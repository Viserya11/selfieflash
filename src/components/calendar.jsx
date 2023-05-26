import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Email from './email.jsx';
import { setDate } from '../redux/actions';

function Calendario() {
  const date = useSelector(state => state.chosenDate.date);
  const dispatch = useDispatch();
  const [emailCount, setEmailCount] = useState(0); // state to keep track of email count
  const handleChange = (newDate) => {
    const dateString = newDate.toLocaleDateString('hu');
    console.log("New date:", dateString);
    dispatch(setDate(dateString));
    setEmailCount(0); // reset email count when date changes
  }

  const handleEmailSent = () => {
    setEmailCount(emailCount + 1);
  }

  return (
    <div className="app" >
      <h1 className="calheader">Foglalj most!</h1>
      <div >
        <Calendar className="calendar-container"
          onChange={handleChange}
          value={new Date(date)}
          locale="hu"
          tileDisabled={({ date }) => {
            // disable date if maximum email count has been reached
            if (emailCount >= 3 && date.toLocaleDateString('hu') === date) {
              return true;
            }
          }}
        />
      </div>
      <div className="text-center">
        Választott dátum: {date}
      </div>
      
    </div>
    
  );
}

export default Calendario;
