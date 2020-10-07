import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from 'axios';

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function Cal() {
  const [events, setEvents] = useState([]);
  const END_POINT = 'http://localhost:5000/events';

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
        console.log(error.message);
      });
  }, []);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Enter a new event name');

    if(title) {
      
      axios
        .post(END_POINT, { start, end, title })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error.message);
        })

      setEvents([...events, { start, end, title }]);
    }
  }

  const onSelectEvent = evt => {
    const remove = window.confirm('Delete event?');

    if(remove === true) {

      axios 
        .delete(`http://localhost:5000/events/${evt.id}`)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error.message);
        })

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