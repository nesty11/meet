import { render, waitFor, within } from "@testing-library/react";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("Event element is collapsed by default", ({ given, when, then }) => {
    let AppComponent;
    given("there is an event on the page", () => {
      AppComponent = render(<App />);
    });

    when("the user views the event", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("the event details should be collapsed", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see details", ({ given, when, then }) => {
    let AppComponent;
    given("there is a collapsed event on the page", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("the user clicks to expand the event", async () => {
      const button = AppComponent.queryAllByText("Show Details")[0];
      await userEvent.click(button);
    });

    then("the user should see the details of the event", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details-btn.hide-details");
      expect(details).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let button;
    given("there is an expanded event on the page", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });

      try {
        button = AppComponent.getByText("Hide Details");
        userEvent.click(button);
      } catch (error) {
        console.error("Error finding button:", error);
      }
    });

    when("the user clicks to collapse the event", async () => {
      const button = AppComponent.queryAllByText("Show Details")[0];
      await userEvent.click(button);
    });

    then("the event details should be hidden", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details-btn.show-details");
      expect(details).toBeInTheDocument();
    });
  });
});
