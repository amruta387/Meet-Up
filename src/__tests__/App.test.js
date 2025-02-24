/* eslint-env jest */

// src/__tests__/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';



describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    })


    test('renders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });


    test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });
    
    test('renders NumberOfEvents', () => {
        const { container } = render(<App />); // Use render() to get the container
        const numberOfEvents = container.querySelector('#number-of-events');
        expect(numberOfEvents).toBeInTheDocument();
    });

});