import {useState} from 'react';
import Calendar from 'react-calendar'; 
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDate } from '../redux/actions';

function Calendario() {
  const date = useSelector(state => state.chosenDate.date)
  const dispatch=useDispatch()
  const handleChange=(newDate) => {
    const dateString = newDate.toLocaleDateString('hu');
    console.log("New date:", dateString);
    dispatch(setDate(dateString));
  }

return (
 <div className="app" id="reservations">
   <h1 className="calheader">Foglalj most!</h1>
   <div className="calendar-container">
     <Calendar onChange={handleChange} value={date} locale="hu"/>
   </div>
   <div className="text-center">
      Választott dátum: {date}
   </div>
 </div>
  )

}

export default Calendario;