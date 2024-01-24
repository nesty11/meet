import React, { useState, useEffect } from "react";

const NumberOfEvents = ({
  setCurrentNOE,
  initialEventsNumber = "32",
  setErrorAlert,
}) => {
  const [eventsNumber, setEventsNumber] = useState(initialEventsNumber);

  useEffect(() => {
    setCurrentNOE(eventsNumber);
  }, [eventsNumber, setCurrentNOE]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventsNumber(value);
    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "The value inputted is not a number or is less than zero.";
    } else {
      errorText = "";
      setErrorAlert(errorText);
      setCurrentNOE(value);
    }
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
