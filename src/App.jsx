/* eslint-env jest */

// src/App.jsx
import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { getEvents, extractLocations } from './api';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const events = await getEvents(); // Fetch event data
      const locations = extractLocations(events); // Extract locations from events
      setAllLocations(locations);
    };

    fetchLocations();
  }, []);

  return (
    <div>
      <CitySearch allLocations={allLocations} />
      <EventList />
    </div>
  );
};

export default App;
