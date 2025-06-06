 ## Meet App – Serverless Progressive Web App (PWA)
Meet App is a serverless, progressive web application (PWA) built with React and developed using a Test-Driven Development (TDD) approach. It integrates with the Google Calendar API to fetch upcoming events and displays them in a user-friendly interface with powerful data visualization tools.

## Project Objectives
-Build a serverless PWA with React
-Use TDD to drive development
-Fetch upcoming events using the Google Calendar API
-Enable offline support and home screen installation
-Visualize event data using interactive charts

## Features
🔍 City-based event search

📆 Upcoming event list pulled from Google Calendar

📊 Data visualization with:

-Scatterplot: Number of events per city
-Pie chart: Popularity of event genres

🌐 Offline support and Add to Home Screen prompt

⚡ Fast loading and responsive design

☁️ Serverless backend with AWS Lambda

🧪 Test-Driven Development (TDD)


🔧 Technologies Used
-React (with Create React App)
-AWS Lambda (Serverless backend)
-Google Calendar API
-Recharts (for data visualization)
-Jest, React Testing Library (for testing)
-Workbox (for PWA service workers)
-OAuth 2.0 (Google Authentication)

📈 Charts & Visualizations
-Events per City – A scatter chart showing how many events are scheduled in each city.
-Event Genres – A pie chart showing the proportion of different event types.

## User Stories
* Feature 1: Filter Events By City
    - As a user, I should be able to filter events by city so that I can see events relevant to my location.
* Feature 2: Show/Hide Event Details
    - As a user, I should be able to expand an event so that I can see more details.
    - As a user, I should be able to collapse an event so that I can hide details.
* Feature 3: Specify Number of Events
    - As a user, I should be able to specify the number of events so that I can control how many events I see.
* Feature 4: Use the App When Offline
    - As a user, I should be able to see cached data when offline so that I can still access event information.
    - As a user, I should be notified if changes can’t be made offline so that I understand why my actions aren’t working.
* Feature 5: Add an App Shortcut to the Home Screen
    - As a user, I should be able to install the app as a shortcut so that I can access it quickly.
* Feature 6: Display Charts Visualizing Event Details
    - As a user, I should be able to see a chart with the number of upcoming events so that I can understand event trends.


## Gherkin Scenarios
* Feature 1: Filter Events By City
    - Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
        Given the user has not searched for a city  
        When they open the app  
        Then the app should display upcoming events from all cities  
    - Scenario 2: User should see a list of suggestions when they search for a city
        Given the user is typing a city name in the search bar  
        When the entered text matches available cities  
        Then a list of suggested cities should be displayed  
    - Scenario 3: User can select a city from the suggested list
        Given the user sees a list of suggested cities  
        When they select a city  
        Then the app should display events from the selected city  
* Feature 2: Show/Hide Event Details
    - Scenario 1: An event element is collapsed by default
        Given the user is viewing the event list  
        When they first load the events  
        Then all event details should be collapsed by default  
    - Scenario 2: User can expand an event to see details
        Given the event details are collapsed  
        When the user clicks on an event  
        Then the event details should expand  
    - Scenario 3: User can collapse an event to hide details
        Given the event details are expanded  
        When the user clicks on the event again  
        Then the event details should collapse  
* Feature 3: Specify Number of Events
    - Scenario 1: When user hasn’t specified a number, 32 events are shown by default
        Given the user has not set a number of events  
        When they open the app  
        Then 32 events should be displayed by default  
    - Scenario 2: User can change the number of events displayed
        Given the user wants to change the number of displayed events  
        When they enter a specific number  
        Then the app should update to display that number of events  
* Feature 4: Use the App When Offline
    - Scenario 1: Show cached data when there’s no internet connection
        Given the user has accessed the app before. And there is no internet connection  
        When they open the app  
        Then the app should display the cached event data  
    - Scenario 2: Show error when user changes search settings (city, number of events)
        Given the user is offline  
        When they try to change the city or number of events  
        Then an error message should be displayed  
* Feature 5: Add an App Shortcut to the Home Screen
    - Scenario 1: User can install the meet app as a shortcut on their device home screen
        Given the user is using a supported browser  
        When they click the "Add to Home Screen" option  
        Then the app should be installed as a shortcut on their device  
* Feature 6: Display Charts Visualizing Event Details
    - Scenario 1: Show a chart with the number of upcoming events in each city
        Given the user is viewing the event list  
        When the app loads event data  
        Then a chart should be displayed showing the number of upcoming events per city  
