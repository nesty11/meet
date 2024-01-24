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

  /* const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventsNumber(value);
    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "The value input is not a number or is less than zero.";
    } else {
      errorText = "";
      setErrorAlert(errorText);
      setCurrentNOE(value);
    }
  }; */

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventsNumber(value);
    setErrorAlert("");
    if (value && (isNaN(value) || value <= 0)) {
      setErrorAlert("Only positive numbers are allowed!");
      return;
    }
    setCurrentNOE(value);
  };

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
