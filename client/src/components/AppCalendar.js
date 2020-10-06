import React, { useState } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const Cal = withDragAndDrop(Calendar);

const initEvent = [
  {
    start: moment().toDate(),
    end: moment().toDate(),
    title: 'event',
  },
];

export default function AppCalendar(props) {
  const [events, setEvents] = useState(initEvent);
  console.log(moment().toDate());
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
