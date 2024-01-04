import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within, act } from "@testing-library/react";
import App from "../App";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/filterEventsByCity.feature");

defineFeature(feature, (test) => {
  test("When user hasn't searched for a city, show upcoming events from all cities.", ({
    given,
    when,
    then,
  }) => {
    given("user hasn't searched for any city", () => {});
    let AppComponent;
    when("the user opens the app", () => {
      AppComponent = render(<App />);
    });

    then("the user should see the list of all upcoming events.", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });
  test("User should see a list of suggestions when they search for a city.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the main page is open", () => {
      AppComponent = render(<App />);
    });
    let CitySearchDOM;
    when("user starts typing in the city textbox", async () => {
      const user = userEvent;
      const AppDOM = AppComponent.container.firstChild;
      CitySearchDOM = AppDOM.querySelector("#city-search");
      const citySearchInput = within(CitySearchDOM).queryByRole("textbox");
      await user.type(citySearchInput, "Berlin");
    });

    then(
      "the user should recieve a list of cities (suggestions) that match what they've typed",
      async () => {
        await waitFor(() => {
          const suggestionListItems =
            within(CitySearchDOM).queryAllByRole("listitem");

          const allowedSuggestions = ["Berlin, Germany", "See all cities"];
          const actualSuggestions = suggestionListItems
            .map((item) => item.textContent.trim())
            .filter((text) => allowedSuggestions.includes(text));

          expect(actualSuggestions).toEqual(allowedSuggestions);
        });
      }
    );
  });
  test("User can select a city from the suggested list.", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let CitySearchDOM;
    let citySearchInput;
    let suggestionListItems;

    const getPlainTextContent = (element) => {
      return element.textContent.replace(/<[^>]*>/g, "").trim();
    };

    given("user was typing “Berlin” in the city textbox", async () => {
      AppComponent = render(<App />);
      const user = userEvent;
      AppDOM = AppComponent.container.firstChild;
      CitySearchDOM = AppDOM.querySelector("#city-search");
      citySearchInput = within(CitySearchDOM).queryByRole("textbox");
      await user.type(citySearchInput, "Berlin");
    });

    and("the list of suggested cities is showing", async () => {
      await waitFor(() => {
        suggestionListItems = within(CitySearchDOM).queryAllByRole("listitem");

        const expectedSuggestions = [
          "London, UK",
          "Berlin, Germany",
          "See all cities",
        ];
        const actualSuggestions = suggestionListItems.map(getPlainTextContent);

        expect(actualSuggestions).toEqual(expectedSuggestions);
      });
    });

    when(
      "the user selects a city (e.g., “Berlin, Germany”) from the list",
      async () => {
        const user = userEvent;

        // Manually set the value of citySearchInput after clicking on the suggestion
        await act(async () => {
          // Select the entire city suggestion from the list
          const selectedCityItem = suggestionListItems.find(
            (item) => item.textContent.trim() === "Berlin, Germany"
          );

          // Simulate clicking on the selected city item
          user.click(selectedCityItem);

          console.log(
            "CitySearchInput after manual update:",
            citySearchInput.value
          );
        });
      }
    );

    then(
      "their city should be changed to that city (i.e., “Berlin, Germany”)",
      async () => {
        // Wait for the input value to be updated
        await waitFor(() => {
          expect(citySearchInput.value).toEqual(
            expect.stringContaining("Berlin, Germany")
          );
        });
      }
    );

    and(
      "the user should receive a list of upcoming events in that city",
      async () => {
        const EventListDOM = AppDOM.querySelector("#event-list");
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        const allEvents = await getEvents();

        // filtering the list of all events down to events located in Germany
        // citySearchInput.value should have the value "Berlin, Germany" at this point
        const berlinEvents = allEvents.filter((event) =>
          event.location.endsWith(citySearchInput.value)
        );
        expect(EventListItems).toHaveLength(berlinEvents.length);
      }
    );
  });
});
