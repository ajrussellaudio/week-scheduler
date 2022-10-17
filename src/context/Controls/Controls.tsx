import { createContext, ReactNode, useContext, useState } from 'react';

type ControlsContextType = {
  showMockEvents: boolean;
  toggleShowMockEvents: () => void;
};

const ControlsContext = createContext<ControlsContextType | undefined>(undefined);

type ControlsProviderProps = {
  children: ReactNode;
};

export function ControlsProvider({ children }: ControlsProviderProps) {
  const [showMockEvents, setShowMockEvents] = useState(false);

  const toggleShowMockEvents = () => setShowMockEvents((prevShowMockEvents) => !prevShowMockEvents);

  return (
    <ControlsContext.Provider value={{ showMockEvents, toggleShowMockEvents }}>
      {children}
    </ControlsContext.Provider>
  );
}

export function useControls() {
  const context = useContext(ControlsContext);

  if (!context) {
    throw new Error('useControls must be used within a ControlsProvider');
  }

  return context;
}
