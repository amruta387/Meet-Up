import React from 'react';
import { render, within, waitFor } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import App from "../App";

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

describe('<EventList /> integration', () => {
    test('renders a list of 32 events when the app is mounted and rendered', async () => {
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');
        await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBeGreaterThan(0);
        });
    });

});
