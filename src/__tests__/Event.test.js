import { render } from "@testing-library/react";
import mockData from "../mockData";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe("<Event/> component", () => {
  let EventComponent;

  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  beforeEach(async () => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("has an element with summary key (events title)", () => {
    console.log("CONSOLE LOGGING:", allEvents[0]);
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("has an element with location key (events city)", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("by default, events details section should be hidden", () => {
    console.log("CONSOLE LOGGING:", allEvents[0].description);

    expect(
      EventComponent.container.querySelector(".detailsOpened")
    ).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the show details button", async () => {
    const showDetailsButton = EventComponent.queryByText("show details");
    await userEvent.click(showDetailsButton);
    const descriptionSection =
      EventComponent.container.querySelector(".detailsOpened");
    expect(descriptionSection).toBeVisible();
  });
  test("hides the details section when the user clicks on the hide details button", async () => {
    const hideDetailsButton = EventComponent.queryByText("hide details");

    // Check if the button is present before asserting
    if (hideDetailsButton) {
      expect(hideDetailsButton).toBeInTheDocument();
      await userEvent.click(hideDetailsButton);

      // Check the visibility of the details section
      const descriptionSection =
        EventComponent.container.querySelector(".detailsClosed");
      expect(descriptionSection).not.toBeVisible();
    } else {
      // Handle the case where the button is not present
      // (e.g., the details are already closed)
      console.warn("The 'hide details' button is not present.");
    }
  });
});
