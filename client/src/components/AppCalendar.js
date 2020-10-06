import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from 'axios';

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const Cal = withDragAndDrop(Calendar);

export default function AppCalendar(props) {
  const [events, setEvents] = useState([]);
  const END_POINT = 'http://localhost:5000/cal';

  useEffect(() => {
    axios
      .get(END_POINT)
      .then(res => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

  return (
    <div>
      <Cal
        defaultDate={moment().toDate()}
        defaultView="month"
        events={events}
        localizer={localizer}
        style={{ height: "100vh" }}
      />
    </div>
  )
}
