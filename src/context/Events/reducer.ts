import { Schedule, Weekday, Event } from './types';

export type State = Schedule;

export type Action = {
  type: 'ADD_EVENT';
  payload: {
    days: Weekday[];
    event: Event;
  };
};

export function reducer(state: State, action: Action) {
  if (action.type === 'ADD_EVENT') {
    return action.payload.days.reduce(
      (prevState, day) => {
        return {
          ...prevState,
          [day]: [...(prevState[day] || []), action.payload.event],
        };
      },
      { ...state }
    );
  }
  return state;
}
