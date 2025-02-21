// src/components/CitySearch.jsx
import React, { useState } from 'react';
// eslint-disable-next-line react/prop-types
const CitySearch = ({ allLocations }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) =>
                location ? location.toUpperCase().includes(value.toUpperCase()) : false
            )
            : [];

        setQuery(value);
        setSuggestions(filteredLocations);
    };


    return (
        <div id="city-search">
            <input
                type="text"
                className="city"
                placeholder="Search for a city"
                value={query}
                onFocus={() => setShowSuggestions(true)}
                onChange={handleInputChanged}
            />
            {showSuggestions && (
                <ul className="suggestions">
                    {suggestions.map((suggestion) => (
                        <li key={suggestion}>{suggestion}</li>
                    ))}
                    <li key="See all cities">
                        <b>See all cities</b>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default CitySearch;
