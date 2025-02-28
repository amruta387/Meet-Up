import React, { useState } from 'react';

const NumberOfEvents = ({ numberOfEvents, setNumberOfEvents, setCurrentNOE, setErrorAlert }) => {
    const [error, setError] = useState('');

    const handleInputChanged = (event) => {
        const value = parseInt(event.target.value, 10);

        if (isNaN(value) || value <= 0 || value > 32) {
            setError('Select number from 1 to 32');
            setErrorAlert('Select number from 1 to 32'); 
        } else {
            setError(''); 
            setErrorAlert(''); 
            setNumberOfEvents(value); 
            setCurrentNOE(value);
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