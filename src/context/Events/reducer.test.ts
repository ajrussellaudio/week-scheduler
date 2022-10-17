import { Action, reducer, State } from './reducer';

describe('events reducer', () => {
  it('allows an event to be added to a day', () => {
    const initialState = {};
    const action: Action = {
      type: 'ADD_EVENT',
      payload: {
        days: ['Sunday'],
        event: {
          subject: 'My first appointment',
          start: '09:30.00',
          end: '11:00.00',
        },
      },
    };
    expect(reducer(initialState, action)).toEqual({
      Sunday: [
        {
          subject: 'My first appointment',
          start: '09:30.00',
          end: '11:00.00',
        },
      ],
    });
  });

  it('allows a second event to be added to a day', () => {
    const initialState: State = {
      Sunday: [
        {
          subject: 'My first appointment',
          start: '09:30.00',
          end: '11:00.00',
        },
      ],
    };
    const action: Action = {
      type: 'ADD_EVENT',
      payload: {
        days: ['Sunday'],
        event: {
          subject: 'My second appointment',
          start: '12:00.00',
          end: '14:15.00',
        },
      },
    };
    expect(reducer(initialState, action)).toEqual({
      Sunday: [
        {
          subject: 'My first appointment',
          start: '09:30.00',
          end: '11:00.00',
        },
        {
          subject: 'My second appointment',
          start: '12:00.00',
          end: '14:15.00',
        },
      ],
    });
  });

  it('allows an event to be added to more than one day', () => {
    const initialState: State = {};
    const action: Action = {
      type: 'ADD_EVENT',
      payload: {
        days: ['Monday', 'Thursday'],
        event: {
          subject: 'Repeating appointment',
          start: '10:30.00',
          end: '11:00.00',
        },
      },
    };
    expect(reducer(initialState, action)).toEqual({
      Monday: [
        {
          subject: 'Repeating appointment',
          start: '10:30.00',
          end: '11:00.00',
        },
      ],
      Thursday: [
        {
          subject: 'Repeating appointment',
          start: '10:30.00',
          end: '11:00.00',
        },
      ],
    });
  });

  it('repeating events do not overwrite one-off events', () => {
    const initialState: State = {
      Thursday: [
        {
          subject: 'My first appointment',
          start: '09:30.00',
          end: '11:00.00',
        },
      ],
    };
    const action: Action = {
      type: 'ADD_EVENT',
      payload: {
        days: ['Monday', 'Thursday'],
        event: {
          subject: 'Repeating appointment',
          start: '10:30.00',
          end: '11:00.00',
        },
      },
    };
    expect(reducer(initialState, action)).toEqual({
      Monday: [
        {
          subject: 'Repeating appointment',
          start: '10:30.00',
          end: '11:00.00',
        },
      ],
      Thursday: [
        {
          subject: 'My first appointment',
          start: '09:30.00',
          end: '11:00.00',
        },
        {
          subject: 'Repeating appointment',
          start: '10:30.00',
          end: '11:00.00',
        },
      ],
    });
  });
});
