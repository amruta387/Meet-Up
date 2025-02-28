import React, { useState } from 'react';

const NumberOfEvents = ({ numberOfEvents, setNumberOfEvents, setCurrentNOE, setErrorAlert }) => {
    const [error, setError] = useState('');

    const handleInputChanged = (event) => {
        const value = event.target.value;
        const parsedValue = parseInt(value, 10);

        if (isNaN(parsedValue) || parsedValue <= 0 || parsedValue > 32) {
            setError('Please enter a valid number between 1 and 32.');
            setErrorAlert('Please enter a valid number between 1 and 32.');
        } else {
            setError('');
            setErrorAlert('');
            setNumberOfEvents(parsedValue);
            setCurrentNOE(parsedValue);
        }
    };

    return (
        <div id="number-of-events">
            <label className='noe-label' htmlFor="number-of-events-input">Number of Events: </label>
            <input
                type="number"
                className="number-of-events"
                id="number-of-events-input"
                value={numberOfEvents || ''} 
                onChange={handleInputChanged}
                data-testid="number-of-events-input"
            />
            
        </div>
    );
};

export default NumberOfEvents;
