import { createContext, ReactNode, useContext, useReducer } from 'react';
import { Action, reducer } from './reducer';
import { Schedule } from './types';

type EventsContextType = {
  state: Schedule;
  dispatch: (action: Action) => void;
};

const EventsContext = createContext<EventsContextType | undefined>(undefined);

type EventsProviderProps = {
  children: ReactNode;
};

export function EventsProvider({ children }: EventsProviderProps) {
  const [state, dispatch] = useReducer(reducer, {});

  return <EventsContext.Provider value={{ state, dispatch }}>{children}</EventsContext.Provider>;
}

export function useEvents() {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error('useEvents must be used within an EventsProvider');
  }

  return context;
}
