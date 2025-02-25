import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import NumberOfEvents from '../components/NumberOfEvents';
import App from "../App";

describe('<NumberOfEvents /> component', () => {
  let setNumberOfEvents, setErrorAlert;

  beforeEach(() => {
    setNumberOfEvents = jest.fn();
    setErrorAlert = jest.fn();
  });

  test('renders input field with correct initial value', () => {
    render(<NumberOfEvents numberOfEvents={32} setNumberOfEvents={setNumberOfEvents} setErrorAlert={setErrorAlert} />);
    const inputElement = screen.getByTestId('number-of-events-input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(32);
  });

  test('calls setNumberOfEvents and setErrorAlert with correct values when input is valid', () => {
    render(<NumberOfEvents numberOfEvents={32} setNumberOfEvents={setNumberOfEvents} setErrorAlert={setErrorAlert} />);
    const inputElement = screen.getByTestId('number-of-events-input');
    fireEvent.change(inputElement, { target: { value: '10' } });
    expect(setNumberOfEvents).toHaveBeenCalledWith(10);
    expect(setErrorAlert).toHaveBeenCalledWith('');
  });

  test('shows error message and calls setErrorAlert when input is invalid', () => {
    render(<NumberOfEvents numberOfEvents={32} setNumberOfEvents={setNumberOfEvents} setErrorAlert={setErrorAlert} />);
    const inputElement = screen.getByTestId('number-of-events-input');
    fireEvent.change(inputElement, { target: { value: '0' } });
    expect(screen.getByText('Select number from 1 to 32')).toBeInTheDocument();
    expect(setErrorAlert).toHaveBeenCalledWith('Select number from 1 to 32');
    expect(setNumberOfEvents).not.toHaveBeenCalled();
  });

  test('clears error message when input becomes valid', () => {
    render(<NumberOfEvents numberOfEvents={32} setNumberOfEvents={setNumberOfEvents} setErrorAlert={setErrorAlert} />);
    const inputElement = screen.getByTestId('number-of-events-input');
    fireEvent.change(inputElement, { target: { value: '0' } });
    expect(screen.getByText('Select number from 1 to 32')).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: '10' } });
    expect(screen.queryByText('Select number from 1 to 32')).not.toBeInTheDocument();
    expect(setNumberOfEvents).toHaveBeenCalledWith(10);
    expect(setErrorAlert).toHaveBeenCalledWith('');
  });
});

describe('<NumberOfEvents /> integration', () => {
  test('number of events displayed matches the NumberOfEvents input value', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    // Wait for events to load
    await waitFor(() => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      const eventItems = within(EventListDOM).queryAllByRole('listitem');
      expect(eventItems.length).toBeGreaterThan(0);
    });

    // Change number of events to 10
    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
    const numberInput = within(NumberOfEventsDOM).getByTestId('number-of-events-input');
    await user.clear(numberInput);
    await user.type(numberInput, '10');

    // Verify only 10 events are displayed
    await waitFor(() => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      const eventItems = within(EventListDOM).queryAllByRole('listitem');
      expect(eventItems.length).toBe(10);
    });
  });
});