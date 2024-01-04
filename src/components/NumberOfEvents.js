import React, { useState, useEffect } from "react";

const NumberOfEvents = ({ setCurrentNOE, initialEventsNumber = "32" }) => {
  const [eventsNumber, setEventsNumber] = useState(initialEventsNumber);

  useEffect(() => {
    setCurrentNOE(eventsNumber);
  }, [eventsNumber, setCurrentNOE]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventsNumber(value);
  };

  console.log("Initial Events Number:", eventsNumber);

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="event-number"
        placeholder="32"
        value={eventsNumber}
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};

export default NumberOfEvents;
