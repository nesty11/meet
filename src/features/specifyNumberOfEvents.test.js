import { render, waitFor } from "@testing-library/react";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppComponent;
  let NumberOfEventsComponent;

  test("Display 32 events by default when the user hasn't specified a number", ({
    given,
    when,
    then,
  }) => {
    given("the user hasn't specified the number of event", () => {
      AppComponent = render(<App />);
    });

    when("the user views the list of upcoming events", async () => {
      await waitFor(() => {
        const eventList = AppComponent.container.querySelector("#event-list");
        expect(eventList).toBeTruthy();
      });
    });

    then(
      /^(\d+) events should be displayed by default$/,
      async (expectedEventCount) => {
        await waitFor(() => {
          const eventListItems =
            AppComponent.container.querySelectorAll(".event");
          expect(eventListItems.length).toBe(parseInt(expectedEventCount, 10));
        });
      }
    );
  });

  test("User can change the number of events displayed", async ({
    given,
    when,
    then,
  }) => {
    given("the user is viewing the list of upcoming events", async () => {
      AppComponent = render(<App />);
      NumberOfEventsComponent = render(
        <NumberOfEvents setCurrentNOE={() => {}} initialEventsNumber="10" />
      );
      await waitFor(() => {
        const eventList = AppComponent.container.querySelector("#event-list");
        expect(eventList).toBeTruthy();
      });
    });

    when(
      "the user specifies a different number of events to be displayed",
      async () => {
        const inputField =
          NumberOfEventsComponent.container.querySelector(".event-number");
        await userEvent.clear(inputField);
        await userEvent.type(inputField, "{backspace}{backspace}10");
        await new Promise((resolve) => setTimeout(resolve, 0)); // Add a small delay
      }
    );

    then(
      "the list should update to show the specified number of events",
      async () => {
        await waitFor(() => {
          const eventListItems =
            AppComponent.container.querySelectorAll(".event");
          expect(eventListItems.length).toBe(10);
        });
      }
    );
  });
});
