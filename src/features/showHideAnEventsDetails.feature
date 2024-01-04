Feature: Show/Hide An Events Details

Scenario: Event element is collapsed by default
    Given there is an event on the page
    When the user views the event
    Then the event details should be collapsed

Scenario: User can expand an event to see details
    Given there is a collapsed event on the page
    When the user clicks to expand the event
    Then the user should see the details of the event

Scenario: User can collapse an event to hide details
    Given there is an expanded event on the page
    When the user clicks to collapse the event
    Then the event details should be hidden    