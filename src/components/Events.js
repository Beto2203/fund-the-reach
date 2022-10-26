import '../styles/Events.css';
import 'react-calendar/dist/Calendar.css';
import image from '../media/homebg.jpg';
import {useState} from 'react';
import Calendar from 'react-calendar';
import SectionHeading from './SectionHeading';

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
};

function Events() {
  const [calendarValue, setCalendarValue] = useState(new Date());

  const month = months[calendarValue.getUTCMonth()];

  return (
   <div>
      <SectionHeading heading="Our Events" imageUrl={image} />
     <div id="events">
       <div className="subHeading">
         Events for {month} {calendarValue.getUTCFullYear()}
         <h2>Category Event</h2>
       </div>
       <div id="calendar">
         <Calendar onChange={setCalendarValue} value={calendarValue} />
       </div>
     </div>
   </div>
  );
}

export default Events;
