import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './App.css';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32); 
  const [currentNOE, setCurrentNOE] = useState(32); 
  const [errorAlert, setErrorAlert] = useState('');
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

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
    setEvents(filteredEvents.slice(0, currentNOE)); // Use currentNOE to control the number of events
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents
        numberOfEvents={numberOfEvents}
        setNumberOfEvents={setNumberOfEvents}
        setCurrentNOE={setCurrentNOE} 
        setErrorAlert={setErrorAlert}
      />
      <EventList events={events} />
    </div>
  );
};

export default App;
