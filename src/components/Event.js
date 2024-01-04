import { useState } from "react";

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
      <details
        open={isDetailsOpen}
        className={isDetailsOpen ? "detailsOpened" : "detailsClosed"}
      >
        <summary>
          {/* Use a conditional rendering for the description */}
          {isDetailsOpen && <p>{event.description}</p>}
        </summary>
      </details>

      <button
        className={`details-btn ${
          isDetailsOpen ? "hide-details" : "show-details"
        }`}
        onClick={() => {
          setIsDetailsOpen((prevState) => !prevState);
        }}
      >
        {isDetailsOpen ? "Hide Details" : "Show Details"}
      </button>
    </li>
  );
};

export default Event;
