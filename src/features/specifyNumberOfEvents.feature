Feature: Specify Number of Events

Scenario: Display 32 events by default when the user hasn't specified a number
    Given the user hasn't specified the number of event
    When the user views the list of upcoming events
    Then 32 events should be displayed by default

Scenario: User can change the number of events displayed
    Given the user is viewing the list of upcoming events
    When the user specifies a different number of events to be displayed
    Then the list should update to show the specified number of events