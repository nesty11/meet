import React, { useState } from "react";

const NumberOfEvents = () => {
  const [eventsNumber, setEventsNumber] = useState("32");

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventsNumber(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="event-number"
        placeholder="32"
        value={eventsNumber}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;