
import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import NumberOfEvents from '../components/NumberOfEvents';
import App from "../App";

describe('<NumberOfEvents /> component', () => {
  let setNumberOfEvents, setErrorAlert, setCurrentNOE;

  beforeEach(() => {
    setNumberOfEvents = jest.fn();
    setErrorAlert = jest.fn();
    setCurrentNOE = jest.fn();
  });

  test('renders input field with correct initial value', () => {
    render(<NumberOfEvents
      numberOfEvents={32}
      setNumberOfEvents={setNumberOfEvents}
      setErrorAlert={setErrorAlert}
      setCurrentNOE={setCurrentNOE}  
    />);
    const inputElement = screen.getByTestId('number-of-events-input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(32);
  });

  test('calls setNumberOfEvents, setErrorAlert and setCurrentNOE when input is valid', () => {
    render(<NumberOfEvents
      numberOfEvents={32}
      setNumberOfEvents={setNumberOfEvents}
      setErrorAlert={setErrorAlert}
      setCurrentNOE={setCurrentNOE}  
    />);
    const inputElement = screen.getByTestId('number-of-events-input');
    fireEvent.change(inputElement, { target: { value: '10' } });
    expect(setNumberOfEvents).toHaveBeenCalledWith(10);
    expect(setErrorAlert).toHaveBeenCalledWith('');
    expect(setCurrentNOE).toHaveBeenCalledWith(10);  
  });

  test('shows error message and calls setErrorAlert when input is invalid', () => {
    render(<NumberOfEvents
      numberOfEvents={32}
      setNumberOfEvents={setNumberOfEvents}
      setErrorAlert={setErrorAlert}
      setCurrentNOE={setCurrentNOE}  
    />);
    const inputElement = screen.getByTestId('number-of-events-input');
    fireEvent.change(inputElement, { target: { value: '0' } });

    expect(screen.getByText('Select number from 1 to 32')).toBeInTheDocument();
    expect(setErrorAlert).toHaveBeenCalledWith('Select number from 1 to 32');
    expect(setNumberOfEvents).not.toHaveBeenCalled();
    expect(setCurrentNOE).not.toHaveBeenCalled();
  });

  test('clears error message when input becomes valid', () => {
    render(<NumberOfEvents
      numberOfEvents={32}
      setNumberOfEvents={setNumberOfEvents}
      setErrorAlert={setErrorAlert}
      setCurrentNOE={setCurrentNOE}  
    />);
    const inputElement = screen.getByTestId('number-of-events-input');
    fireEvent.change(inputElement, { target: { value: '0' } });

    expect(screen.getByText('Select number from 1 to 32')).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: '10' } });

    expect(screen.queryByText('Select number from 1 to 32')).not.toBeInTheDocument();
    expect(setNumberOfEvents).toHaveBeenCalledWith(10);
    expect(setErrorAlert).toHaveBeenCalledWith('');
    expect(setCurrentNOE).toHaveBeenCalledWith(10);
  });
});


describe('<NumberOfEvents /> integration', () => {

  test('User can change the number of events displayed', async () => {
    const user = userEvent.setup();
    
    
    render(<App />);
    
    await waitFor(() => {
      const EventListDOM = screen.getByTestId('event-list');
      const eventItems = within(EventListDOM).queryAllByRole('listitem');
      expect(eventItems.length).toBeGreaterThan(0);
    });


    const NumberOfEventsInput = screen.getByTestId('number-of-events-input');
    
    await user.type(NumberOfEventsInput, "{backspace}{backspace}10");
    
    await waitFor(() => {
      const EventListDOM = screen.getByTestId('event-list');
      const eventItems = within(EventListDOM).queryAllByRole('listitem');
      expect(eventItems.length).toBe(10); 
    });
  });

});