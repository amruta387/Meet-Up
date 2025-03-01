import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import CityEventsChart from "./components/CityEventsChart";
import EventGenresChart from './components/EventGenresChart';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import { getEvents, extractLocations } from './api';
import './App.css';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [errorAlert, setErrorAlert] = useState('');
  const [events, setEvents] = useState([]);
  const [infoAlert, setInfoAlert] = useState("");
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    const fetchLocations = async () => {
      const events = await getEvents();
      const locations = extractLocations(events);
      setAllLocations(locations);
    };

    fetchLocations();
  }, []);


  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);  
  
  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
        setEvents(filteredEvents.slice(0, currentNOE)); 
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");  // Clear warning if online
    } else {
      setWarningAlert("You are offline. The event data shown may be outdated and loaded from cache.");
    }
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <h1 className="meetup-heading">MEET-UP</h1>

      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        numberOfEvents={numberOfEvents}
        setNumberOfEvents={setNumberOfEvents}
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <div className="charts-container">
          <CityEventsChart allLocations={allLocations} events={events} />
          <EventGenresChart events={events} />
      </div>
      <EventList events={events} />
    </div>
  );
};

export default App;
