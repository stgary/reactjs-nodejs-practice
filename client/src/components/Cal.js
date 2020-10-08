import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from 'axios';

// import "react-big-calendar/lib/css/react-big-calendar.css";

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
    const title = window.prompt('please enter a name');

    if(title) {
      
      axios
        .post(END_POINT, { start, end, title })
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error.message);
        })

      setEvents([...events, { start, end, title }]);
    }
  }

  const onSelectEvent = e => {
    const remove = window.confirm('confirm delete?');

    if(remove === true) {

      axios 
        .delete(`http://localhost:5000/events/${e.id}`)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error.message);
        })

      const index = events.indexOf(e);
      events.splice(index, 1);

      return events;
    }
  }

  return (
    <div className='cal'>
      <div className='wrapper'>
        <div className='left-logo'>自分自身を向上させます 
          <br /> 
            <span className='translate'>improve yourself !</span>
        </div>
        <div className='app-name'>HABITVIZ</div>
        <div className='right-logo'>あなたの目標を達成する
          <br /> 
              <span className='translate'>achieve your goals !</span>
        </div>
      </div>
      <div className='cal-outer-container'>
        <div className='cal-left-section'>
          <div className='schedule-form-container'>
              <span className='form-message'>create an event</span>
              <form className='schedule-form'>
                <input
                  type='text'
                  name='title'
                />
                <textarea 
                  type='text'
                  name='description'
                />
                <input
                  type='submit'
                  name='submit'
                />
              </form>
          </div>
        </div>
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
        <div className='cal-right-section'>
          <div className='schedule-list-container'>

          </div>
        </div>
      </div>
    </div>
  )
}
