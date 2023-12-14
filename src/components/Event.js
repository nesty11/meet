import { useState } from "react";
/* import { getEvents } from "../api";
import mockData from "../mockData"; */

const Event = ({ event }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const isoDateString = event.created;
  const isoDate = new Date(isoDateString);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const readableDate = isoDate.toLocaleString(undefined, options);

  return (
    <li className="event">
      <div className="event-title">{event.summary}</div>
      <div className="event-infos">
        <div>{readableDate}</div>
        <div>{event.location}</div>
      </div>
      {/* details are hidden by default */}
      {isDetailsOpen ? (
        <details open={true} className="detailsOpened">
          <summary> </summary>
          <p> {event.description} </p>
        </details>
      ) : (
        <details open={false} className="detailsClosed">
          <summary> </summary>
          <p> {event.description}</p>
        </details>
      )}

      <div className="details-btn">
        {isDetailsOpen ? (
          <button
            className="hide-details"
            onClick={() => {
              setIsDetailsOpen(false);
            }}
          >
            Hide Details
          </button>
        ) : (
          <button
            className="show-details"
            onClick={() => {
              setIsDetailsOpen(true);
            }}
          >
            show details
          </button>
        )}
      </div>
    </li>
  );
};

export default Event;
