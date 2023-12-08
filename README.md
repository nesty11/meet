# Meet App 🌟

The Meet App is a versatile event management application that allows users to explore and customize their event experience.

## Features 🚀

### Feature 1: Filter Events by City 🏙️

#### Scenario 1: Display upcoming events from all cities when no city is specified
- Given the user hasn't searched for a city
- When the user views upcoming events
- Then the user should see events from all cities

#### Scenario 2: Provide a list of suggestions when the user searches for a city
- Given the user is on the event search page
- When the user starts typing a city name
- Then the user should see a list of suggested cities

#### Scenario 3: User can select a city from the suggested list
- Given the user has entered a partial city name
- When the user selects a city from the suggestions
- Then the selected city should be applied as the filter for upcoming events

**User Stories:**
- As a user, I should be able to filter events by city so that I can see a list of events happening in the city that I might be interested in.

### Feature 2: Show/Hide Event Details 🎭

#### Scenario 1: Event element is collapsed by default
- Given there is an event on the page
- When the user views the event
- Then the event details should be collapsed

#### Scenario 2: User can expand an event to see details
- Given there is a collapsed event on the page
- When the user clicks to expand the event
- Then the user should see the details of the event

#### Scenario 3: User can collapse an event to hide details
- Given there is an expanded event on the page
- When the user clicks to collapse the event
- Then the event details should be hidden

**User Stories:**
- As a user, I should be able to show/hide event details so that I can see more/less information about an event.

### Feature 3: Specify Number of Events 🔢

#### Scenario 1: Display 32 events by default when the user hasn't specified a number
- Given the user hasn't specified the number of events
- When the user views the list of upcoming events
- Then 32 events should be displayed by default

#### Scenario 2: User can change the number of events displayed
- Given the user is viewing the list of upcoming events
- When the user specifies a different number of events to display
- Then the list should update to show the specified number of events

**User Stories:**
- As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

### Feature 4: Use the App When Offline 📴

#### Scenario 1: Show cached data when there's no internet connection
- Given the user has previously accessed the app with an internet connection
- When the user opens the app without an internet connection
- Then the app should display cached data

#### Scenario 2: Show an error when the user changes search settings (city, number of events, etc.) offline
- Given the user is offline
- When the user attempts to change search settings
- Then the app should display an error message indicating the lack of internet connectivity

**User Stories:**
- As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.

### Feature 5: Add an App Shortcut to the Home Screen 🏡📱

#### Scenario 1: User can install the meet app as a shortcut on their device home screen
- Given the user has the meet app open
- When the user selects the option to add a shortcut to the home screen
- Then a shortcut to the meet app should be added to the device home screen

**User Stories:**
- As a user, I should be able to conveniently add a shortcut to the home screen, so that I can streamline access to the meet app.

### Feature 6: Display Charts Visualizing Event Details 📊

#### Scenario 1: Show a chart with the number of upcoming events in each city
- Given there are upcoming events in multiple cities
- When the user navigates to the charts section
- Then a chart should be displayed visualizing the number of upcoming events in each city

**User Stories:**
- As a user, I should be able to visually explore the distribution of upcoming events in each city through informative charts.

## Serverless Functions 🌐

Meet App leverages serverless functions to enhance its backend capabilities. Here are some key aspects of our serverless architecture:

### Event Notifications

Serverless functions efficiently handle event notifications, ensuring timely updates for users.

### Real-Time Data Processing

Utilizing serverless functions enables dynamic and personalized experiences through real-time data processing.

### User Authentication

Secure user authentication is achieved through robust serverless functions, enhancing the overall user experience.

### Event Recommendations

Our serverless functions intelligently generate event recommendations, delivering a personalized and engaging user experience.
