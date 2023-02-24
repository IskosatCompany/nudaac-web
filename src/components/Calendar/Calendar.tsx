import moment from "moment";
import "moment/locale/pt"; // without this line it didn't work
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
moment.locale("pt");

const localizer = momentLocalizer(moment);
interface Event {
  start: Date;
  end: Date;
  title: string;
}

const NudaacCalendar = () => {
  const [events, setEvents] = useState<Event[]>();
  moment.locale("pt");

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
        culture={"pt-pt"}
      />
    </div>
  );
};

export default React.memo(NudaacCalendar);
