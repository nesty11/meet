import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import { getEvents } from "../api";

describe("<Event/> component", () => {
  let EventComponent;
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("has an element with summary key (events title)", () => {
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
    const showDetailsButton = EventComponent.queryByText("Show Details");
    expect(showDetailsButton).toBeInTheDocument();
    expect(showDetailsButton).toHaveTextContent("Show Details");
  });

  test("by default, events details section should be hidden", () => {
    expect(
      EventComponent.container.querySelector(".detailsOpened")
    ).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the show details button", async () => {
    const showDetailsButton = EventComponent.queryByText("Show Details");
    await userEvent.click(showDetailsButton);
    const descriptionSection =
      EventComponent.container.querySelector(".detailsOpened");
    expect(descriptionSection).toBeVisible();
  });

  test("hides the details section when the user clicks on the hide details button", async () => {
    const showDetailsButton = EventComponent.queryByText("Show Details");
    await userEvent.click(showDetailsButton);
    const hideDetailsButton = EventComponent.queryByText("Hide Details");
    expect(hideDetailsButton).toBeInTheDocument();
    await userEvent.click(hideDetailsButton);

    const descriptionSection =
      EventComponent.container.querySelector(".detailsClosed");
    expect(descriptionSection).not.toBeVisible();
  });
});
