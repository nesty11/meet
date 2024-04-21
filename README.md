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

# Serverless Functions 🌐

The Meet App harnesses the power of serverless functions to optimize various aspects of its backend processes, enhancing user experiences, ensuring real-time data processing, and facilitating scalability. Here's a breakdown of how serverless functions are utilized in the Meet App:

## Key Use Cases:

### 1. Event Notifications
Serverless functions efficiently handle event notifications, delivering real-time updates to users regarding upcoming events. This ensures users stay informed about changes and relevant information related to the events they are interested in.

### 2. Real-Time Data Processing
Utilizing serverless functions enables dynamic and personalized experiences through real-time data processing. These functions play a crucial role in handling on-demand processing tasks, providing users with the latest and most relevant event data.

### 3. User Authentication
Secure user authentication is achieved through robust serverless functions. These functions handle the authorization process, ensuring that users are securely authenticated to access public calendar events from the Google Calendar API.

### 4. Event Recommendations
Serverless functions intelligently generate event recommendations based on user preferences, historical interactions, and real-time data. This results in a personalized and engaging user experience, delivering tailored event suggestions.

### 5. Scalability
Serverless technology is utilized to ensure the Meet App can dynamically scale resources based on user demand. This enables the app to handle variable loads efficiently, ensuring optimal performance during peak usage periods.

## Implementation Overview:

The Meet App leverages AWS Lambda as the chosen cloud-service provider for implementing these serverless functions. This choice reflects a commitment to scalability and cost-effectiveness in managing backend processes.

By embracing serverless architecture, the Meet App can provide a seamless user experience without the need for managing complex server infrastructures. Cloud-based serverless solutions offer flexibility and cost-effectiveness for handling variable loads of event data processing and visualization tasks.

These serverless functions are a cornerstone of the Meet App's ability to efficiently deliver real-time event data, chart insights, and secure authorization for accessing external APIs while maintaining optimal performance.

**Note:** Proper configuration of AWS credentials is crucial to ensure the successful deployment and operation of these serverless functions.

## Installation

To get started with Meet, follow these steps:

1. Clone the repository::
```
   git clone https://github.com/your-username/meet-app.git
```

2. Navigate to the project directory::
```
   cd ../meet-app
```

3. Install dependencies::
```
   npm install
```

4. Start the development server::
```
   npm start
```

5. Open your browser and visit http://localhost:3000 to access Meet and start exploring!

