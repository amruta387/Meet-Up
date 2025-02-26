import React from 'react'; // Ensure React is imported
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import App from '../App'; // Your App component

// Load the feature file
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
    test('User does not type in the number-of-events field', ({ given, when, then }) => {
        let AppComponent;

        // Define the 'given' step
        given('I am a user', () => {
            // Render the App component
            AppComponent = render(<App />);
        });

        // Define the 'when' step
        when('I do not type in the number-of-events field', () => {
            // No action needed here, the user simply doesn't type anything
        });

        // Define the 'then' step
        then('the default number of events should be shown', async () => {
            // Look for the event list container
            const EventListDOM = screen.getByTestId('event-list');
            await waitFor(() => {
                // Get the list items and verify the length (default to 32)
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32); // Default should be 32
            });
        });
    });

    test('User types in the number-of-events field', ({ given, when, then }) => {
        let AppComponent;

        // Define the 'given' step
        given('I am a user', () => {
            // Render the App component
            AppComponent = render(<App />);
        });

        // Define the 'when' step
        when('I type a number on the number-of-events field', async () => {
            // Find the input field for number of events using the exact label
            const numberOfEventsInput = screen.getByLabelText('Number of Events:');  // Exact match, including the colon
            // Change the value of the input field
            fireEvent.change(numberOfEventsInput, { target: { value: '3' } });
        });

        // Define the 'then' step
        then('I should be able to see a list of events with the number I typed as the length', async () => {
            // Look for the event list container
            const EventListDOM = screen.getByTestId('event-list');
            await waitFor(() => {
                // Get the list items and verify the length (should be 3 if user typed 3)
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(3); // Expect 3 events if user typed 3
            });
        });
    });
});
