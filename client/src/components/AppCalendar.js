import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from 'axios';

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function AppCalendar(props) {
  const [events, setEvents] = useState([]);
  console.log(events);
  const END_POINT = 'http://localhost:5000/cal';

  useEffect(() => {
    axios
      .get(END_POINT)
      .then(res => {
        res.data.forEach(evt => {
          evt.start = new Date(evt.start);
          evt.end = new Date(evt.end);
        })
        setEvents(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Enter a new event name');

    if(title) {
      setEvents([...events, { start, end, title }]);
    }
  }

  const onSelectEvent = evt => {
    const remove = window.confirm('Delete event?');

    if(remove === true) {
      const index = events.indexOf(evt);
      events.splice(index, 1);
      return events;
    }
  }

  return (
    <div className='cal'>
      <div className='cal-outer-container'>
        <h1>Calendar</h1>
        <div className='cal-inner-container'>
          <Calendar
            defaultDate={moment().toDate()}
            defaultView="month"
            events={events}
            localizer={localizer}
            selectable
            onSelectEvent={evt => onSelectEvent(evt)}
            onSelectSlot={handleSelect}
            startAccessor='start'
            endAccessor='end'
          />
        </div>
      </div>
    </div>
  )
}
