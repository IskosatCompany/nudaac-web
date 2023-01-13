import moment from "moment";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

interface Event {
  start: Date;
  end: Date;
  title: string;
}

const NudaacCalendar = () => {
  const [events, setEvents] = useState<Event[]>();

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default React.memo(NudaacCalendar);
