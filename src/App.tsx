import { Calendar } from './components/Calendar';
import { Controls } from './components/Controls';
import { ControlsProvider } from './context/Controls/Controls';
import { EventsProvider } from './context/Events';

function App() {
  return (
    <EventsProvider>
      <ControlsProvider>
        <Controls />
        <Calendar />
      </ControlsProvider>
    </EventsProvider>
  );
}

export default App;
