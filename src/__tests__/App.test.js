import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import App from "../App";

describe("<App /> component", () => {
  let AppDOM;

  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  });

  test("renders list of events", () => {
    expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
  });

  test("render CitySearch", () => {
    expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
  });

  test("render number of events component", () => {
    expect(AppDOM.querySelector("#number-of-events")).toBeInTheDocument();
  });

  test("renders a list of events matching the city selected by the user", async () => {
    const user = userEvent;
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector("#city-search");
    const CitySearchInput = within(CitySearchDOM).queryByRole("textbox");

    await user.type(CitySearchInput, "Berlin");

    await waitFor(() => {
      expect(
        within(CitySearchDOM).queryByText("Berlin, Germany")
      ).toBeInTheDocument();
    });

    const berlinSuggestionItem =
      within(CitySearchDOM).queryByText("Berlin, Germany");

    await user.click(berlinSuggestionItem);

    const EventListDOM = AppDOM.querySelector("#event-list");

    await waitFor(async () => {
      const allRenderedEventItems =
        within(EventListDOM).queryAllByRole("listitem");

      const allEvents = await getEvents();

      const berlinEvents = allEvents.filter(
        (event) => event.location === "Berlin, Germany"
      );

      expect(allRenderedEventItems.length).toBe(berlinEvents.length);
      allRenderedEventItems.forEach((event) => {
        expect(event.textContent).toContain("Berlin, Germany");
      });
    });
  });

  test("user can change the number of events displayed", async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    // Assuming NumberOfEvents has an id of "number-of-events"
    const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
    const NumberOfEventsInput =
      within(NumberOfEventsDOM).queryByRole("textbox");

    // Simulate changing the value to "10"
    await userEvent.type(NumberOfEventsInput, "{backspace}{backspace}10");

    // Wait for the app to fully update based on the new number of events
    await waitFor(() => {
      const EventListDOM = AppDOM.querySelector("#event-list");
      const allRenderedEventItems =
        within(EventListDOM).queryAllByRole("listitem");
      expect(allRenderedEventItems.length).toEqual(10);
    });
  });
});
