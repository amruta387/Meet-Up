/* eslint-env jest */
// src/__tests__/EventList.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';

describe('<EventList /> component', () => {
    let EventListComponent;
    
    beforeEach(() => {
        EventListComponent = render(<EventList events={[]} />);
    });

    test('has at least one element with "list" role', () => {
        expect(EventListComponent.getAllByRole("list").length).toBeGreaterThan(0);
    });

    test('renders correct number of events', async () => {
        const allEvents = await getEvents();
        EventListComponent.rerender(<EventList events={allEvents} />);
        
        const eventItems = await EventListComponent.findAllByRole("listitem");
        expect(eventItems).toHaveLength(allEvents.length);
    });
});
