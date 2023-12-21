import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} />
    );
  });

  test("renders text input", () => {
    const NumberOfEventsTextBox =
      NumberOfEventsComponent.queryByRole("textbox");

    expect(NumberOfEventsTextBox).toBeInTheDocument();
    expect(NumberOfEventsTextBox).toHaveClass("event-number");
  });
  test("number of events is 32 by default", () => {
    const textBox = NumberOfEventsComponent.queryByRole("textbox");

    expect(textBox.value).toBe("32");
  });
  test("value of textbox component changes when user types in it", async () => {
    const textBox = NumberOfEventsComponent.queryByRole("textbox");

    await userEvent.type(textBox, "{backspace}{backspace}10");
    expect(textBox.value).toBe("10");
  });
});
