import {useState} from 'react';
import Calendar from 'react-calendar'; 
function Calendario() {
 const [date, setDate] = useState(new Date())



return (
 <div className="app">
   <h1 className="calheader">Foglalj most!</h1>
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date} locale="hu"/>
   </div>
   <div className="text-center">
      Választott dátum: {date.toLocaleDateString('hu')} 
   </div>
 </div>
  )

}

export default Calendario;